import { Exclude, Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';

export class CreateUserInput {
  @IsNotEmpty()
  @Length(3, 10)
  @Transform(({ value }) => value.toLowerCase())
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;

  @Exclude()
  id: number;
}
