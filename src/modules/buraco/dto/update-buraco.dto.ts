import { PartialType } from '@nestjs/mapped-types';
import { CreateBuracoDto } from './create-buraco.dto';

export class UpdateBuracoDto extends PartialType(CreateBuracoDto) {}
