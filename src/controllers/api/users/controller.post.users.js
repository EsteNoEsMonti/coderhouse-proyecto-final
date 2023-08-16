import { encriptarJWT } from "../../../utils/cripto.js";
import { userService } from "../../../services/users.service.js";
import { emailService } from "../../../services/email.service.js";

export async function postUsuarios(req, res, next) {
  req.logger.http("🌙 inside post user");
  try {
    const userCreated = await userService.registrar(req.body);
    req.session.user = userCreated;
    res.cookie("jwt_authorization", encriptarJWT(userCreated), {
      signed: true,
      httpOnly: true,
    });
    const mailData = {
      subject: "Welcome to ecommerce",
      mensaje: `Hi,\n\n
        Thank you for choosing us. Your user is already created, enjoy your visit to our virtual store.\n\n
        Regards,\n
        Lucas' ecommerce`,
    };
    await emailService.send(userCreated.email, mailData);

    res.status(201).json(userCreated);
  } catch (error) {
    req.logger.error(`🌙 post user fail ${error.message}`);
    next(error);
  }
}
