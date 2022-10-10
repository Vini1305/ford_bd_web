import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/service/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {

  constructor(private prisma: PrismaService) { }

  create(createCustomerDto: CreateCustomerDto) {
    return this.prisma.customer.create({
      data: createCustomerDto
    })
  }

  findAll() {
    return this.prisma.customer.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.customer.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
