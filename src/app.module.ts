import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/service/database.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { VeiculoModule } from './modules/veiculo/veiculo.module';
import { TrajetoModule } from './modules/trajeto/trajeto.module';
import { BuracoModule } from './modules/buraco/buraco.module';
import { CustomerModule } from './modules/customer/customer.module';
import { HttpClientModule } from '@angular/common/http'

@Module({
  imports: [DatabaseModule, CadastroModule, VeiculoModule, TrajetoModule, BuracoModule, CustomerModule, HttpClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}