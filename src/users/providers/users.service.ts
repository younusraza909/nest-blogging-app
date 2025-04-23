import {
  BadRequestException,
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { User } from '../user.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';

/**
 * Controller class for '/users' API endpoint
 */
@Injectable()
export class UsersService {
  constructor(
    /**
     * Injecting User repository into UsersService
     * */
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    private readonly dataSource: DataSource,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    let existingUser: null | undefined | User = undefined;

    try {
      // Check if user with email exists
      existingUser = await this.usersRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (error) {
      // Might want to save these errors with more information in a log file or database
      // You don't need to send this sensitive information to user
      console.log(error);
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error connecting to database',
        },
      );
    }

    /**
     * Handle exceptions if user exists later
     * */
    if (existingUser) {
      throw new BadRequestException(
        'The user already exists, please check your email',
      );
    }

    // Try to create a new user
    // - Handle Exceptions Later
    let newUser = this.usersRepository.create(createUserDto);

    try {
      newUser = await this.usersRepository.save(newUser);
    } catch {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error connecting to database',
        },
      );
    }

    // Create the user
    return newUser;
  }

  /**
   * Public method used to find one user using the ID of the user
   */
  public async findOneById(id: number) {
    try {
      return await this.usersRepository.findOneBy({
        id,
      });
    } catch {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error connecting to database',
        },
      );
    }
  }

  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    const newUsers: User[] = [];
    //Create Query Runner Instance
    const queryRunner = this.dataSource.createQueryRunner();
    try {
      //Connect Query Runner with Data source
      await queryRunner.connect();
      //Start Transaction
      await queryRunner.startTransaction();
    } catch (err) {
      console.log('error', err);
      throw new RequestTimeoutException('Cannot connect to database');
    }

    try {
      //If Successfull Commits
      for (const user of createManyUsersDto.users) {
        const newUser = queryRunner.manager.create(User, user);
        const result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }

      await queryRunner.commitTransaction();
    } catch (error) {
      console.log('Error', error);
      // if un successfull rollback
      await queryRunner.rollbackTransaction();
      throw new ConflictException('could not complete the transaction', {
        description: String(error),
      });
    } finally {
      //Release connection
      await queryRunner.release();
    }
  }
}
