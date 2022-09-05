import { Singleton } from "./Singletion";

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log("son iguales ", singleton1 === singleton2);
