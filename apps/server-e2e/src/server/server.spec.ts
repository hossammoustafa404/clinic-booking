describe('health contract', () => {
  it('GET /api/health returns the shared health response', async () => {
    const response = await fetch(`${process.env.API_URL}/api/health`);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ status: 'ok' });
  });

  it('serves the OpenAPI document', async () => {
    const response = await fetch(`${process.env.API_URL}/api/docs-json`);

    expect(response.status).toBe(200);
    const document = (await response.json()) as {
      openapi?: string;
      paths: Record<string, unknown>;
    };

    expect(document.openapi).toBeDefined();
    expect(document.paths['/api/health']).toBeDefined();
  });

  it('serves the Swagger UI', async () => {
    const response = await fetch(`${process.env.API_URL}/api/docs`);

    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toContain('text/html');
  });
});
