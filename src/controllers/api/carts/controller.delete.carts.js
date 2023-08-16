import { cartRepository } from "../../../repositories/cart.repository.js";

export async function deleteAllPrdCart(req, res, next) {
  req.logger.http("🌙 inside delete all products in cart");
  try {
    const deleter = await cartRepository.delAllProductsInCart(req.params.cid);
    res.status(200).json(deleter);
  } catch (error) {
    req.logger.error(`🌙 delete cart fail ${error.message}`);
    return next(error);
  }
}
