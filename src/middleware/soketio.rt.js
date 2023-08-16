import { io } from "../app/server.js";
import { productsRepository } from "../repositories/product.repository.js";

export async function socketFn(req, res, next) {
  const products = await productsRepository.findMany();
  io.emit("reloadProducts", {
    list: products,
    listOk: products.length > 0,
  });
}
