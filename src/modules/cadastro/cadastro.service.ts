import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/service/prisma/prisma.service';
import { CustomerService } from '../customer/customer.service';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';

@Injectable()
export class CadastroService {

  constructor(private prisma: PrismaService, private customerService: CustomerService) { }


  async create(createCadastroDto: CreateCadastroDto) {
    const customer = await this.customerService.findOne(createCadastroDto.customerId)

    if(!customer){
      throw new Error('Customer not found');
    }

    return await this.prisma.veiculo.create({
      data: {
        ...createCadastroDto,
        customer: {
          connect: {
            id: createCadastroDto.customerId
          }
        }
      }
    })
  }

  findAll() {
    return this.prisma.cadastro.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} cadastro`;
  }

  update(id: number, updateCadastroDto: UpdateCadastroDto) {
    return `This action updates a #${id} cadastro`;
  }

  remove(id: number) {
    return `This action removes a #${id} cadastro`;
  }
}
