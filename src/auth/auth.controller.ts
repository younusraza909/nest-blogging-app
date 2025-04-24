import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthServices } from './providers/auth.services';
import { SignInDto } from './dtos/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthServices) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  public signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
}
