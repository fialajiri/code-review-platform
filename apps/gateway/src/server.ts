import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { Server } from "http";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./openapi.json" with { type: "json" };
import { toList } from "./utils/helpers/functions.js";

dotenv.config();
const PORT = process.env.PORT || 3001;
export const getServer = () => {
  const app = express();

  app.use(
    cors({
      optionsSuccessStatus: 200,
      origin: toList(process.env.WHITELIST_ORIGINS as string),
    }),
  );
  app.use(helmet());
  app.disable("x-powered-by");
  app.use(express.json());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  let server: Server | null = null;

  return {
    start: () =>
      new Promise<Server>((resolve, reject) => {
        server = app.listen(PORT, () => {
          console.log(`Server running on port: ${PORT}`);
          resolve(server as Server);
        });
        server.on("error", (err) => reject(err));
      }),
    stop: () =>
      new Promise<void>((resolve, reject) => {
        if (!server) return resolve();
        server.close((err) => (err ? reject(err) : resolve()));
      }),
  };
};
