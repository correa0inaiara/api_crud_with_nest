import 'reflect-metadata';
import { DataSourceOptions } from 'typeorm';

export const DataSourceConfig: DataSourceOptions = {
	type: 'sqlite',
	database: '.db/database',
	synchronize: true,
	logging: false,
	entities: [__dirname + '/**/*.entity{.ts,.js}'],
	migrations: [],
	subscribers: [],
};
