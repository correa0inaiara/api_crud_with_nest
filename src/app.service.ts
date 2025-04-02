import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return `Api nestjs v${process.env.npm_package_version} - ${process.env.NODE_ENV}`;
	}
}
