import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './data-source';

@Module({
	imports: [
		UsersModule,
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot(DataSourceConfig),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
