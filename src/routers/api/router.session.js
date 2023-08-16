import { Router } from "express";
import * as sesionesController from "../../controllers/api/session/controller.session.js";
import { authGithub, anthGithub_CB, authLocal, authJwtApi } from "../../middleware/authentication.js";
import { getCurrentSessionController } from "../../controllers/api/session/controller.session.js";
import { soloRol } from "../../middleware/authorization.js";

export const sessionRouter = Router();

// local session 
sessionRouter.post("/", authLocal, sesionesController.postSesiones);

// session git 
sessionRouter.get("/git", authGithub);
sessionRouter.get("/gitcall", anthGithub_CB, (req, res, next) => {
  res.redirect("/products?limit=10&page=1");
});

// logout
sessionRouter.delete("/", sesionesController.deleteSesiones);

// TODO dto de sesion
sessionRouter.get("/current", authJwtApi, soloRol("admin"), getCurrentSessionController);
