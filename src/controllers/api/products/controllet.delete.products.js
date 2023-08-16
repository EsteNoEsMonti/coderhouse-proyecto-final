import { socketFn } from "../../../middleware/soketio.rt.js";
import { ErrorPermissions } from "../../../models/error/errors.model.js";
import { productsRepository } from "../../../repositories/product.repository.js";
import { emailService } from "../../../services/email.service.js";

export async function deleteProduct(req, res, next) {
  req.logger.http("🌙 inside delete products");
  try {
    const producto = await productsRepository.findOneById(req.params.pid);
    if (
      req.query.owner !== "admin" &&
      producto.owner !== req.query.owner
    ) {
      throw new ErrorPermissions("Product could be edit or delete by owner");
    }
    await productsRepository.deleteOne(req.params.pid);
    if (producto.owner !== "admin") {
      const mailData = {
        subject: "Product eliminated ",
        mensaje: `Hi,\n\n
          commerce notifies you that the product of your property  [${producto.code}], has been deleted.\n\n
          Regards.\n
          Lucas' ecommerce`,
      };
      await emailService.send(producto.owner, mailData);
    }
    await socketFn();
    res.sendStatus(204);
  } catch (error) {
    req.logger.error(`🌙 delete product fail ${error.message}`);
    next(error);
  }
}
