import { Module } from '@nestjs/common';
import { PqrsTypeService } from './pqrs-type.service';
import { PqrsTypeController } from './pqrs-type.controller';

@Module({
  controllers: [PqrsTypeController],
  providers: [PqrsTypeService],
})
export class PqrsTypeModule {}
