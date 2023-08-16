import { ErrorPermissions } from "../../../models/error/errors.model.js";
import { productsRepository } from "../../../repositories/product.repository.js";

export async function getProductCodeController(req, res, next) {
  req.logger.http("🌙 inside get products by code");
  try {
    const producto = await productsRepository.findOne({ code: req.params.pcd });
    if (
      req.query.owner !== "admin" &&
      producto.owner !== req.query.owner
    ) {
      throw new ErrorPermissions("Product could be edit or delete by owner");
    }
    res.json(producto);
  } catch (error) {
    req.logger.error(`🌙 get product by code fail ${error.message}`);
    next(error);
  }
}
