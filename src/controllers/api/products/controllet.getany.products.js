import { productsRepository } from "../../../repositories/product.repository.js";

export async function getProductIdController(req, res, next) {
  req.logger.http("🌙 inside get products by id");
  try {
    const producto = await productsRepository.findOneById(req.params.pid);
    res.json(producto);
  } catch (error) {
    req.logger.error(`🌙 get products by id fail ${error.message}`);
    next(error);
  }
}
