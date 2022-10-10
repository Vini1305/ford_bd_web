import { Module } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CadastroController } from './cadastro.controller';
import { DatabaseModule } from 'src/database/service/database.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [DatabaseModule, CustomerModule],
  controllers: [CadastroController],
  providers: [CadastroService]
})
export class CadastroModule {}
