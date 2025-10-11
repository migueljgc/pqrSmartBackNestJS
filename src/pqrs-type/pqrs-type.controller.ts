import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PqrsTypeService } from './pqrs-type.service';
import { CreatePqrsTypeDto } from './dto/create-pqrs-type.dto';
import { UpdatePqrsTypeDto } from './dto/update-pqrs-type.dto';

@Controller('pqrs-type')
export class PqrsTypeController {
  constructor(private readonly pqrsTypeService: PqrsTypeService) {}

  @Post()
  create(@Body() createPqrsTypeDto: CreatePqrsTypeDto) {
    return this.pqrsTypeService.create(createPqrsTypeDto);
  }

  @Get()
  findAll() {
    return this.pqrsTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pqrsTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePqrsTypeDto: UpdatePqrsTypeDto) {
    return this.pqrsTypeService.update(+id, updatePqrsTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pqrsTypeService.remove(+id);
  }
}
