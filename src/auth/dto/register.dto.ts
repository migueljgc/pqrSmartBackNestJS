import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(8)
  password: string;

  @IsEmail()
  @MinLength(1)
  email: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  fullName: string;

  @IsString()
  @MinLength(8)
  number: string;
}
