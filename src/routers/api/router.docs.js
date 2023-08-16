import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { specs } from "../../middleware/documentation.js";

export const docsRouter = Router();

docsRouter.use("/", swaggerUi.serve, swaggerUi.setup(specs));
