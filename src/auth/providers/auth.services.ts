import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthServices {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}

  public login(email: string, password: string, id: string) {
    const user = this.userService.findOneById(parseInt(id));
    console.log('user', user);

    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
