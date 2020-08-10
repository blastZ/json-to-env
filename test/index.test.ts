import { jsonToEnv } from "../src";

test("File parse", () => {
  expect(process.env.CUSTOM_APP_STRING_VALUE).toEqual("app");
  expect(process.env.CUSTOM_APP_TRUE_VALUE).toEqual("true");
  expect(process.env.CUSTOM_APP_FALSE_VALUE).toEqual("");
  expect(process.env.CUSTOM_APP_ARRAY_VALUE).toEqual('[true,"true",1]');
  expect(process.env.CUSTOM_APP_NUMBER_VALUE).toEqual("1");
  expect(process.env.CUSTOM_APP_OBJECT_VALUE_NAME).toEqual("app2");
});

test("Json to env", () => {
  jsonToEnv({
    db: {
      host: "127.0.0.1",
      user: "root",
      password: "admin123",
      port: 3306,
    },
  });

  expect(process.env.DB_HOST).toEqual("127.0.0.1");
  expect(process.env.DB_PORT).toEqual("3306");
});
