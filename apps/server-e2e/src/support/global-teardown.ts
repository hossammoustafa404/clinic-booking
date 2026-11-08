import { killPort } from '@nx/node/utils';

declare global {
  var __SERVER_PID__: number | undefined;
}

module.exports = async function () {
  try {
    await killPort(Number(process.env.PORT ?? 3333));
  } catch {
    // The API already stopped.
  }

  if (globalThis.__SERVER_PID__) {
    try {
      process.kill(globalThis.__SERVER_PID__);
    } catch {
      // The process already exited.
    }
  }

  console.log(globalThis.__TEARDOWN_MESSAGE__);
};
