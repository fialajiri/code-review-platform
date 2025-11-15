import { getServer } from "./server.js";

const main = async () => {
  const server = getServer();
  await server.start();
};

main();
