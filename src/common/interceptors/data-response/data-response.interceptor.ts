import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class DataResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // any code write before here before return will call before controller function is called
    return next.handle().pipe(
      map((data) => ({
        // this code will be called after controller function is called
        data: data,
        apiVersion: '1.0.0',
      })),
    );
  }
}
