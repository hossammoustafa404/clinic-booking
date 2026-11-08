import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import type { Health } from '@saas-kit/schemas';
import { HealthResponseDto } from './dto';
import { GetHealthService } from './services';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly getHealth: GetHealthService) {}

  @Get()
  @ApiOperation({
    summary: 'Process health signal',
    description:
      'No authentication required. Returns the shared health contract when the API process is accepting HTTP requests. ' +
      'It is a process-up signal only and does not report database or queue health.',
  })
  @ApiOkResponse({
    type: HealthResponseDto,
    description: 'The API process is accepting HTTP requests',
  })
  check(): Health {
    return this.getHealth.execute();
  }
}
