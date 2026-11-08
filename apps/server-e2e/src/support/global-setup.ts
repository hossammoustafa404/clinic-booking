import { spawn } from 'node:child_process';
import { join } from 'node:path';

/* eslint-disable */
var __TEARDOWN_MESSAGE__: string;

declare global {
  var __SERVER_PID__: number | undefined;
}

const API_PORT = Number(process.env.PORT ?? 3333);
const API_URL = process.env.API_URL ?? `http://127.0.0.1:${API_PORT}`;
const HEALTH_URL = `${API_URL}/api/health`;
const STARTUP_TIMEOUT_MS = 60_000;
const POLL_INTERVAL_MS = 500;

async function waitForApi(): Promise<void> {
  const deadline = Date.now() + STARTUP_TIMEOUT_MS;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(HEALTH_URL);

      if (response.ok) {
        return;
      }
    } catch {
      // The API is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL_MS));
  }

  throw new Error(`API did not become healthy at ${HEALTH_URL}`);
}

module.exports = async function () {
  console.log('\nSetting up...\n');

  const serverProcess = spawn(process.execPath, ['dist/main.js'], {
    cwd: join(__dirname, '../../../..', 'apps/server'),
    env: { ...process.env, PORT: String(API_PORT) },
    stdio: 'ignore',
    detached: true,
  });

  serverProcess.unref();
  globalThis.__SERVER_PID__ = serverProcess.pid;

  await waitForApi();

  // Hint: Use `globalThis` to pass variables to global teardown.
  globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
