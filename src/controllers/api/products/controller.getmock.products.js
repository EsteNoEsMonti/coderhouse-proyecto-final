import { moackingProducts } from "../../../utils/mocks/mock.product.js";

export async function getProductsMocked(req, res, next) {
  req.logger.http("🌙 inside get products mocked");
  try {
    const products = await moackingProducts();
    res.status(200).json(products);
  } catch (error) {
    req.logger.error(`🌙 get moaking products fail ${error.message}`);
    next(error);
  }
}
