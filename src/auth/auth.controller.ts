import { Body, Controller, Post } from '@nestjs/common';
import { AuthServices } from './providers/auth.services';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthServices) {}

  @Post('/login')
  public login(@Body() body: { email: string; password: string; id: string }) {
    console.log('body', body);
    return this.authService.login(body.email, body.password, body.id);
  }
}
