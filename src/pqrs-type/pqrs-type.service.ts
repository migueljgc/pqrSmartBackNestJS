import { Injectable } from '@nestjs/common';
import { CreatePqrsTypeDto } from './dto/create-pqrs-type.dto';
import { UpdatePqrsTypeDto } from './dto/update-pqrs-type.dto';

@Injectable()
export class PqrsTypeService {
  create(createPqrsTypeDto: CreatePqrsTypeDto) {
    return 'This action adds a new pqrsType';
  }

  findAll() {
    return `This action returns all pqrsType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pqrsType`;
  }

  update(id: number, updatePqrsTypeDto: UpdatePqrsTypeDto) {
    return `This action updates a #${id} pqrsType`;
  }

  remove(id: number) {
    return `This action removes a #${id} pqrsType`;
  }
}
