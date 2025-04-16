import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Put,
  Param,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  @Get('/:id')
  // we can get specific component for params,query or body by passing that field in that ()
  public getUsers(
    @Param() getUserParamDTO: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ): string {
    console.log(getUserParamDTO, typeof getUserParamDTO);
    console.log(limit, typeof limit);
    console.log(page, typeof page);
    return 'You sent a get request to /users endpoint';
  }

  @Post()
  public createUser(
    // @Body(new ValidationPipe()) createUserDto: CreateUserDto,
    // we removed validation pipe from here and added it in main.ts as global to prevent repeetition
    @Body() createUserDto: CreateUserDto,
  ): string {
    console.log(createUserDto);
    return 'You sent a post request to /users endpoint';
  }

  @Patch('/:id')
  public patchUser(@Body() patchUserDto: PatchUserDto): string {
    console.log(patchUserDto);
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
