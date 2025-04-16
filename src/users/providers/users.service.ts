import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthServices } from 'src/auth/providers/auth.services';

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(() => AuthServices))
    private readonly authService: AuthServices,
  ) {}

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
