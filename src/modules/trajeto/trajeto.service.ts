import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/service/prisma/prisma.service';
import { VeiculoService } from '../veiculo/veiculo.service';
import { CreateTrajetoDto } from './dto/create-trajeto.dto';
import { UpdateTrajetoDto } from './dto/update-trajeto.dto';

@Injectable()
export class TrajetoService {

  constructor(private prisma: PrismaService, private veiculoService: VeiculoService) { }


  async create(createTrajetoDto: CreateTrajetoDto) {
    const veiculo = await this.veiculoService.findOne(createTrajetoDto.veiculoId)

    if(!veiculo){
      throw new Error('Veiculo not found');
    }

    return await this.prisma.trajeto.create({
      data: {
        ...createTrajetoDto,
        veiculo: {
          connect: {
            id: createTrajetoDto.veiculoId
          }
        }
      }
    })
  }

  findAll() {
    return this.prisma.trajeto.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.trajeto.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateTrajetoDto: UpdateTrajetoDto) {
    return `This action updates a #${id} trajeto`;
  }

  remove(id: number) {
    return `This action removes a #${id} trajeto`;
  }
}
