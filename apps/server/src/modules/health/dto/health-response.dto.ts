import { createZodDto } from 'nestjs-zod';
import { HealthSchema } from '@saas-kit/schemas';

export class HealthResponseDto extends createZodDto(HealthSchema) {}
