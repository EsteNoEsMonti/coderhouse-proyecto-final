import mongoose from "mongoose";
import { MONGODB_CNX_STR } from "../../config/config.js";
import { winLogger } from "../../utils/logger.js";

export async function conectar() {
  if (MONGODB_CNX_STR) {
    await mongoose.connect(MONGODB_CNX_STR);
  }

  winLogger.verbose(`🌙 connected database: ${MONGODB_CNX_STR}`);
}
