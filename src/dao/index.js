import { PERSISTENCIA } from "../config/config.js";

let userDao;
let productDao;
let cartDao;
let ticketDao;
if (PERSISTENCIA === "mongoose") {
  const { umg } = await import("./mongoose/users.dao.mg.js");
  userDao = umg;
  const { pmg } = await import("./mongoose/product.dao.mg.js");
  productDao = pmg;
  const { cmg } = await import("./mongoose/cart.dao.mg.js");
  cartDao = cmg;
  const { tmg } = await import("./mongoose/ticket.dao.mg.js");
  ticketDao = tmg;
}

export { userDao, productDao, cartDao, ticketDao };
