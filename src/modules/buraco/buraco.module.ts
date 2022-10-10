import { Module } from '@nestjs/common';
import { BuracoService } from './buraco.service';
import { BuracoController } from './buraco.controller';
import { DatabaseModule } from 'src/database/service/database.module';
import { TrajetoModule } from '../trajeto/trajeto.module';

@Module({
  controllers: [BuracoController],
  providers: [BuracoService],
  imports: [DatabaseModule, TrajetoModule]
})
export class BuracoModule {}
