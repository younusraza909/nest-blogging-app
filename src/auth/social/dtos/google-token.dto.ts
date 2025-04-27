import { IsNotEmpty } from 'class-validator';

export class googleTokenDto {
  @IsNotEmpty()
  token: string;
}
