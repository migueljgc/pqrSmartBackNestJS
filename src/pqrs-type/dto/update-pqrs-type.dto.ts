import { PartialType } from '@nestjs/mapped-types';
import { CreatePqrsTypeDto } from './create-pqrs-type.dto';

export class UpdatePqrsTypeDto extends PartialType(CreatePqrsTypeDto) {}
