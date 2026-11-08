import { GetHealthService } from './get-health.service';

describe('GetHealthService', () => {
  it('should return the shared health payload', () => {
    const service = new GetHealthService();

    expect(service.execute()).toEqual({ status: 'ok' });
  });
});
