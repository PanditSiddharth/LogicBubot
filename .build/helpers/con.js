"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var con_exports = {};
__export(con_exports, {
  default: () => Con
});
module.exports = __toCommonJS(con_exports);
var import_dotenv = __toESM(require("dotenv"));
const { MongoClient } = require("mongodb");
import_dotenv.default.config();
let cons = null;
class Con {
  constructor() {
    this.insert = async ({ ob = void 0, t = null }) => {
      let cn = this.con();
      try {
        if (!ob)
          return console.log("object null");
        let db = cn.db("db");
        const col = db.collection("col");
        const inserted = await col.insertOne(ob);
        console.log(inserted);
        return inserted;
      } catch (err) {
        console.log(err.message);
      } finally {
      }
    };
    this.del = async ({ ob = void 0, t = null }) => {
      let cn = this.con();
      try {
        if (!ob)
          return console.log("object null");
        let db = cn.db("db");
        const col = db.collection("col");
        let deleted;
        if (t == null)
          deleted = await col.deleteMany(ob);
        console.log(deleted);
        return deleted;
      } catch (err) {
        console.log(err.message);
      }
    };
    this.find = async ({ ob = void 0, t = null }) => {
      let cn = this.con();
      try {
        if (!ob)
          return console.log("object null");
        await cn.connect();
        let db = cn.db("db");
        const col = db.collection("col");
        let found;
        if (t == null)
          found = await col.findOne(ob);
        console.log(found);
        return found;
      } catch (error) {
        console.log(error.message);
      }
    };
  }
  con() {
    const uri = process.env.URI;
    if (!cons) {
      cons = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      cons.connect();
    }
    return cons;
  }
  close() {
    cons.close();
    return cons;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=con.js.map
