import {
  calculateTimeDifference,
  parseDate,
} from "../../../middleware/dateformater.js";
import { userRepository } from "../../../repositories/users.repository.js";
import { emailService } from "../../../services/email.service.js";

export async function deleteAllUserController(req, res, next) {
  req.logger.http("🌙 inside delete all user");
  try {
    const users = await userRepository.findMany();
    users.forEach(async (u) => {
      const last = parseDate(u.last_connection);
      const diference = calculateTimeDifference(
        last,
        2 * 24 * 60 * 60 * 1000 // 2d
        // 30 * 60 * 1000 // 30m
      );
      if (diference && u.role !== "admin") {
        await userRepository.deleteOne(u.id);
        const mailData = {
          subject: "Account deleted",
          mensaje: `Hi,\n\n
          Thank you for joining us this time. Ecommerce informs you that due to inactivity your account has been deleted, we look forward to your return to ecommerce.\n\n
          Regards.\n
          Lucas' ecommerce.`,
        };
        await emailService.send(u.email, mailData);
      }
    });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}
