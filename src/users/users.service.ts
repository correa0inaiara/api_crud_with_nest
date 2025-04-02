import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,
	) {}

	create(createUserInput: CreateUserInput) {
		return this.userRepository.save(createUserInput);
	}

	findAll() {
		return this.userRepository.find();
	}

	findOne(id: number) {
		return this.userRepository.findOneBy({ id: id });
	}

	async update(id: number, updateUserInput: UpdateUserInput) {
		return await this.userRepository.update(id, updateUserInput);
	}

	async remove(id: number) {
		return await this.userRepository.delete(id);
	}
}
