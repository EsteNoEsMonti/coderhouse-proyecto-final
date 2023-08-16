import jwt from "jsonwebtoken";
import { JWT_PRIVATE_KEY } from "../config/config.js";

export function encriptarJWT(payload) {
  // @ts-ignore
  const token = jwt.sign(JSON.parse(JSON.stringify(payload)), JWT_PRIVATE_KEY, {
    expiresIn: "1h",
  });
  return token;
}

export function decodeToken(token) {
    try {
      // @ts-ignore
      return jwt.verify(token, JWT_PRIVATE_KEY);
    } catch (error) {
      throw new Error('error de autenticacion: sesión expirada')
    }
  }