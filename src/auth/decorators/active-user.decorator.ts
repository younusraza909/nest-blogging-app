import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export interface ActiveUser {
  sub: number;
  email: string;
}

export const ActiveUser = createParamDecorator(
  (field: keyof ActiveUser | undefined, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    const user = request['user'] as ActiveUser;
    return field ? user[field] : user;
  },
);
