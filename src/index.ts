import fs from "fs";
import path from "path";

const camelToUnderscore = (key: string) => {
  const camelKey = key.slice(0, 1).toLowerCase() + key.slice(1);
  const underscoreKey = camelKey.replace(
    /[A-Z]/g,
    (letter) => `_${letter.toLowerCase()}`
  );
  const envKey = underscoreKey.toUpperCase();

  return envKey;
};

const getEnvKey = (pre: string, key: string) => pre + camelToUnderscore(key);

export const jsonToEnv = (obj: { [key: string]: any }, pre = "") => {
  Object.keys(obj).forEach((key) => {
    const envKey = getEnvKey(pre, key);

    if (Array.isArray(obj[key])) {
      process.env[envKey] = JSON.stringify(obj[key]);
    } else if (typeof obj[key] === "object") {
      jsonToEnv(obj[key], envKey + "_");
    } else if (
      obj[key] === "0" ||
      obj[key] === 0 ||
      obj[key] === false ||
      obj[key] === "false" ||
      (typeof obj[key] === "string" && obj[key].trim() === "")
    ) {
      process.env[envKey] = "";
    } else {
      process.env[envKey] = String(obj[key]);
    }
  });
};

const main = (options?: Options) => {
  const jsonPath = path.resolve(
    process.cwd(),
    options?.jsonPath ?? "./env.json"
  );

  if (!fs.existsSync(jsonPath)) {
    return;
  }

  const jsonObj = require(jsonPath);

  jsonToEnv(jsonObj);
};

main();

export default main;

export type Options = {
  jsonPath?: string;
};
