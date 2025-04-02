import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';

export class CreateUserInput {
	id: number;

	@IsNotEmpty()
	@Length(3, 50)
	@Transform(({ value }) => String(value).toLowerCase())
	@ApiProperty({ description: 'Nome do usuário', minLength: 3, maxLength: 10 })
	readonly name: string;

	@IsNotEmpty()
	@IsEmail()
	@ApiProperty({ description: 'Endereço de e-mail válido' })
	readonly email: string;

	@IsNotEmpty()
	@MinLength(8)
	@ApiProperty({ description: 'Senha do usuário, mínimo de 8 caracteres' })
	readonly password: string;

	// @Exclude()
	// id: number;
}
