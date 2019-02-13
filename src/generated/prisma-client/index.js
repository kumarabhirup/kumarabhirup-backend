"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Contact",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: process.NODE_ENV === 'development' ? process.env.PRISMA_ENDPOINT : process.env.PROD_PRISMA_ENDPOINT
});
exports.prisma = new exports.Prisma();
