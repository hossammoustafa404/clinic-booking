import { Test } from '@nestjs/testing';
import { HealthController } from './health.controller';
import { GetHealthService } from './services';

describe('HealthController', () => {
  let controller: HealthController;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [GetHealthService],
    }).compile();

    controller = moduleRef.get(HealthController);
  });

  it('should return the shared health payload', () => {
    expect(controller.check()).toEqual({ status: 'ok' });
  });
});
