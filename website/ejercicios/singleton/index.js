"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Singletion_1 = require("./Singletion");
const singleton1 = Singletion_1.Singleton.getInstance();
const singleton2 = Singletion_1.Singleton.getInstance();
console.log("son iguales ", singleton1 === singleton2);
