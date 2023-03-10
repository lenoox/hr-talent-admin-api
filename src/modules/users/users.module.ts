import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

const MODULES = [TypeOrmModule.forFeature([User])];
const SERVICES = [UsersService];
@Module({
  imports: [...MODULES],
  providers: [...SERVICES],
  exports: [...SERVICES],
  controllers: [],
})
export class UsersModule {}
