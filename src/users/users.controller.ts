import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Put,
  Param,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  // we can get specific component for params,query or body by passing that field in that ()
  public getUsers(@Param('id') params: any, @Query() query: any): string {
    console.log(params, query);
    return 'You sent a get request to /users endpoint';
  }

  @Post()
  public createUser(): string {
    return 'You sent a post request to /users endpoint';
  }

  @Patch()
  public updateUser(): string {
    return 'You sent a patch request to /users endpoint';
  }

  @Put()
  public replaceUser(): string {
    return 'You sent a put request to /users endpoint';
  }

  @Delete()
  public deleteUser(): string {
    return 'You sent a delete request to /users endpoint';
  }
}
