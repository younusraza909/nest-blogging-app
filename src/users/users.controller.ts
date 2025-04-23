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
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './providers/users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/:id')
  @ApiOperation({
    summary: 'Fetches a list of registered user on application',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: ' The number of entries return per page',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'Quantity per page of entries',
    example: 1,
  })
  // we can get specific component for params,query or body by passing that field in that ()
  public getUsers(
    @Param() getUserParamDTO: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUserParamDTO, limit, page);
    return [];
  }

  @Post()
  public createUser(
    // @Body(new ValidationPipe()) createUserDto: CreateUserDto,
    // we removed validation pipe from here and added it in main.ts as global to prevent repeetition
    @Body() createUserDto: CreateUserDto,
  ) {
    return this.userService.createUser(createUserDto);
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
