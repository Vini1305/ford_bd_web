import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuracoService } from './buraco.service';
import { CreateBuracoDto } from './dto/create-buraco.dto';
import { UpdateBuracoDto } from './dto/update-buraco.dto';

@Controller('buraco')
export class BuracoController {
  constructor(private readonly buracoService: BuracoService) {}

  @Post()
  create(@Body() createBuracoDto: CreateBuracoDto) {
    return this.buracoService.create(createBuracoDto);
  }

  @Get()
  findAll() {
    return this.buracoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buracoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuracoDto: UpdateBuracoDto) {
    return this.buracoService.update(+id, updateBuracoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buracoService.remove(+id);
  }
}
