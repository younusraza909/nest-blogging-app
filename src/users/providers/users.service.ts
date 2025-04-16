import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UserService {
  public findAll(
    getUsersParamDTO: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    console.log(getUsersParamDTO, limit, page);
    return [
      { firstName: 'John', lastName: 'Doe', email: 'John@gmail.com' },
      { firstName: 'Bon', lasName: 'Doe', email: 'Bob@gmail.com' },
    ];
  }

  public findById(id: GetUsersParamDto) {
    console.log(id);
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'John@gmail.com',
      id: 123,
    };
  }
}
