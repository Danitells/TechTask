import * as dotenv from "dotenv";
import { cleanEnv, str } from "envalid";

dotenv.config();

export const ENV = getEnvironment();

function getEnvironment() {
  return cleanEnv(process.env, {
    DEV_ADMIN_URL: str(),
    DEV_ADMIN_LOGIN: str(),
    DEV_ADMIN_PASSWORD: str(),
  });
}
