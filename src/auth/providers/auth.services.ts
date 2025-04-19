import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class AuthServices {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
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
