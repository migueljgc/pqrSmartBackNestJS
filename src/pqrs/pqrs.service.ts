import { Injectable } from '@nestjs/common';
import { CreatePqrDto } from './dto/create-pqr.dto';
import { UpdatePqrDto } from './dto/update-pqr.dto';

@Injectable()
export class PqrsService {
  create(createPqrDto: CreatePqrDto) {
    return 'This action adds a new pqr';
  }

  findAll() {
    return `This action returns all pqrs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pqr`;
  }

  update(id: number, updatePqrDto: UpdatePqrDto) {
    return `This action updates a #${id} pqr`;
  }

  remove(id: number) {
    return `This action removes a #${id} pqr`;
  }
}
