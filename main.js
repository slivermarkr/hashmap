import Hashmap from "./hash.js";

const h = new Hashmap();
h.set("hello world", 69);
console.log(h.has("hello world"));
console.log(h.remove("hello world"));
console.log(h.has("hello world"));
console.log(h.list);
