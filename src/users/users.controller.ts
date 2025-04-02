import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {
	ApiBadRequestResponse,
	ApiBody,
	ApiCreatedResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	@ApiOkResponse({ description: 'Lista de todos os usuários.' })
	async findAll() {
		return await this.usersService.findAll();
	}

	@Get(':id')
	@ApiOkResponse({ description: 'Detalhes do usuário encontrado.' })
	@ApiNotFoundResponse({ description: 'Usuário não encontrado.' })
	async findOne(@Param('id') id: number) {
		return await this.usersService.findOne(+id);
	}

	@Post()
	@ApiCreatedResponse({ description: 'Usuário criado com sucesso.' })
	@ApiBody({
		type: CreateUserInput,
		description: 'Dados do usuário a serem enviados',
	})
	create(@Body() createUserInput: CreateUserInput) {
		return this.usersService.create(createUserInput);
	}

	@Patch(':id')
	@ApiOkResponse({ description: 'Usuário atualizado com sucesso.' })
	@ApiNotFoundResponse({ description: 'Usuário não encontrado.' })
	@ApiBadRequestResponse({ description: 'Solicitação inválida.' })
	async update(
		@Param('id') id: number,
		@Body() updateUserInput: UpdateUserInput,
	) {
		return await this.usersService.update(+id, updateUserInput);
	}

	@Delete(':id')
	@ApiOkResponse({ description: 'Usuário removido com sucesso.' })
	@ApiNotFoundResponse({ description: 'Usuário não encontrado.' })
	async delete(@Param('id') id: number) {
		return await this.usersService.remove(+id);
	}
}
