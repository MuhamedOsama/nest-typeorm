import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppService } from './app.service';
import { DatabaseConfig } from './config/database.config';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [TypeOrmModule.forRoot(DatabaseConfig), SchoolModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
