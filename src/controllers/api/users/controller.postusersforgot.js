import { userRepository } from "../../../repositories/users.repository.js";
import { emailService } from "../../../services/email.service.js";
import { encriptarJWT } from "../../../utils/cripto.js";

export async function postUsersForgot(req, res, next) {
  try {
    req.logger.http("🌙 inside get  forgot-user");
    const user = await userRepository.findOne({ email: req.body.email });
    req.logger.info(user);
    const recoveryToken = encriptarJWT({ email: user.email });
    const mailData = {
      subject: "Password recovery",
      mensaje: `Hi,\n\n
      To reset your password, click on the following link: \n\n
          https://coderhouse-proyecto-final-production.up.railway.app/recover?token=${recoveryToken}\n\n
          If you have not requested a password reset, please disregard this email.\n\n
          Regards,\n
          Lucas' ecommerce`,
    };
    await emailService.send(user.email, mailData);

    res.status(201).json("email sent");
  } catch (error) {
    req.logger.error(`🌙 post forgotuser fail ${error.message}`);
    next(error);
  }
}
