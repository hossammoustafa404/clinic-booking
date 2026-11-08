module.exports = async function () {
  process.env.API_URL = process.env.API_URL ?? 'http://127.0.0.1:3333';
};
