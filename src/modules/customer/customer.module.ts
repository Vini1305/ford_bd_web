import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { DatabaseModule } from 'src/database/service/database.module';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
  imports: [DatabaseModule],
  exports: [CustomerService]
})
export class CustomerModule {}
