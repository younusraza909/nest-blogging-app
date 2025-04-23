import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthServices } from './providers/auth.services';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthServices],
  imports: [UsersModule],
  exports: [AuthServices],
})
export class AuthModule {}
