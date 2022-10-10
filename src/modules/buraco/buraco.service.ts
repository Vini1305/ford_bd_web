import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/service/prisma/prisma.service';
import { TrajetoService } from '../trajeto/trajeto.service';
import { CreateBuracoDto } from './dto/create-buraco.dto';
import { UpdateBuracoDto } from './dto/update-buraco.dto';

@Injectable()
export class BuracoService {

  constructor(private prisma: PrismaService, private trajetoService: TrajetoService) { }


  async create(createBuracoDto: CreateBuracoDto) {
    const trajeto = await this.trajetoService.findOne(createBuracoDto.trajetoId)

    if(!trajeto){
      throw new Error('Trace not found');
    }

    return await this.prisma.buraco.create({
      data: {
        ...createBuracoDto,
        customer: {
          connect: {
            id: createBuracoDto.trajetoId
          }
        }
      }
    })
  }

  findAll() {
    return this.prisma.buraco.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} buraco`;
  }

  update(id: number, updateBuracoDto: UpdateBuracoDto) {
    return `This action updates a #${id} buraco`;
  }

  remove(id: number) {
    return `This action removes a #${id} buraco`;
  }
}
