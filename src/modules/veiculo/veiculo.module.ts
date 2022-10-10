import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { DatabaseModule } from 'src/database/service/database.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  controllers: [VeiculoController],
  providers: [VeiculoService],
  imports: [DatabaseModule, CustomerModule],
  exports: [VeiculoService]
})
export class VeiculoModule {}
