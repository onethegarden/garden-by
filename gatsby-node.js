require("ts-node").register();

const { createPages } = require("./src/lib/createPages.ts");

exports.createPages = createPages;
