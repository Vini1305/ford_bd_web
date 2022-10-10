import { Module } from '@nestjs/common';
import { TrajetoService } from './trajeto.service';
import { TrajetoController } from './trajeto.controller';
import { DatabaseModule } from 'src/database/service/database.module';
import { VeiculoModule } from '../veiculo/veiculo.module';

@Module({

  controllers: [TrajetoController],
  providers: [TrajetoService],
  imports: [DatabaseModule, VeiculoModule],
  exports: [TrajetoService]
})
export class TrajetoModule {}
