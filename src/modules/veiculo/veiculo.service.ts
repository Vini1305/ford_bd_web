import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/service/prisma/prisma.service';
import { CustomerService } from '../customer/customer.service';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';

@Injectable()
export class VeiculoService {

  constructor(private prisma: PrismaService, private customerService: CustomerService) { }


  async create(createVeiculoDto: CreateVeiculoDto) {
    const customer = await this.customerService.findOne(createVeiculoDto.customerId)

    if(!customer){
      throw new Error('Customer not found');
    }

    return await this.prisma.veiculo.create({
      data: {
        ...createVeiculoDto,
        customer: {
          connect: {
            id: createVeiculoDto.customerId
          }
        }
      }
    })
  }

  findAll() {
    return this.prisma.veiculo.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.veiculo.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    return `This action updates a #${id} veiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} veiculo`;
  }
}
