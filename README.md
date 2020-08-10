# json-to-env

## Install

```bash
$ npm install @blastz/json-to-env
```

## Hello json-to-env

Create `env.json` at the root of project

```json
// env.json
{
  "custom": {
    "app": {
      "stringValue": "app",
      "trueValue": true,
      "falseValue": false,
      "arrayValue": [true, "true", 1],
      "numberValue": 1,
      "objectValue": {
        "name": "app2"
      }
    }
  }
}
```

Import `json-to-env`

```ts
import "@blastz/json-to-env";
```

Parsed environment values

```js
process.env.CUSTOM_APP_STRING_VALUE === "app";
process.env.CUSTOM_APP_TRUE_VALUE === "true";
process.env.CUSTOM_APP_FALSE_VALUE === "";
process.env.CUSTOM_APP_ARRAY_VALUE === '[true,"true",1]';
process.env.CUSTOM_APP_NUMBER_VALUE === "1";
process.env.CUSTOM_APP_OBJECT_VALUE_NAME === "app2";
```

## License

MIT
