import { productsRepository } from "../../../repositories/product.repository.js";

export async function getProductsController(req, res, next) {
  req.logger.http("🌙 inside get products")
  try {
    const urlsrt = `https://coderhouse-proyecto-final-production.up.railway.app${req.originalUrl}`;
    const result = await productsRepository.getPaginatedElements(
      req.query,
      urlsrt
    );
    res.json(result);
  } catch (error) {
    req.logger.error(`🌙 get all products fail ${error.message}`);
    next(error);
  }
}
