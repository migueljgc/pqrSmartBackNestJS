import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PqrsService } from './pqrs.service';
import { CreatePqrDto } from './dto/create-pqr.dto';
import { UpdatePqrDto } from './dto/update-pqr.dto';

@Controller('pqrs')
export class PqrsController {
  constructor(private readonly pqrsService: PqrsService) {}

  @Post()
  create(@Body() createPqrDto: CreatePqrDto) {
    return this.pqrsService.create(createPqrDto);
  }

  @Get()
  findAll() {
    return this.pqrsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pqrsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePqrDto: UpdatePqrDto) {
    return this.pqrsService.update(+id, updatePqrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pqrsService.remove(+id);
  }
}
