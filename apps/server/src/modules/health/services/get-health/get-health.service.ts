import { Injectable } from '@nestjs/common';
import { HealthSchema, type Health } from '@saas-kit/schemas';

@Injectable()
export class GetHealthService {
  execute(): Health {
    return HealthSchema.parse({ status: 'ok' });
  }
}
