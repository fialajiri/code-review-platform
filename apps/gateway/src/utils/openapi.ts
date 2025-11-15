import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import * as fs from "node:fs";
import * as path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { fileURLToPath } from "node:url";
import { openApiRegistry } from "./registry.js";

const getOpenApiDocumentation = () => {
  const generator = new OpenApiGeneratorV3(openApiRegistry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Code Review Platform Gateway",
      description: "API for code review platform",
    },
    servers: [{ url: "/api" }],
  });
};

export const generateOpenApiDocumentation = () => {
  const filePath = path.join(__dirname, "./../openapi.json");
  console.log(`Creating OpenAPI documentation in: ${filePath}`);

  const docs = getOpenApiDocumentation();
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  fs.writeFileSync(filePath, JSON.stringify(docs, null, 2), {
    encoding: "utf8",
  });
};

generateOpenApiDocumentation();
