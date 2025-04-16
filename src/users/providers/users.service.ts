import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthServices } from 'src/auth/providers/auth.services';

/**
 * Class to connect user table and perform business operation
 */
@Injectable()
export class UserService {
  /**
   * Creates an instance of the UserService.
   *
   * Injected via forward reference to resolve circular dependencies between the AuthService and UserService.
   */
  constructor(
    @Inject(forwardRef(() => AuthServices))
    private readonly authService: AuthServices,
  ) {}

  /**The method to get all the users from the database */
  public findAll(
    getUsersParamDTO: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    console.log(getUsersParamDTO, limit, page);
    const isAuth = this.authService.isAuth();

    if (!isAuth) {
      throw new Error('Unauthorized');
    }
    return [
      { firstName: 'John', lastName: 'Doe', email: 'John@gmail.com' },
      { firstName: 'Bon', lasName: 'Doe', email: 'Bob@gmail.com' },
    ];
  }

  /**The method to get user by id */
  public findById(id: string) {
    console.log(id);
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'John@gmail.com',
      id: 123,
    };
  }
}
