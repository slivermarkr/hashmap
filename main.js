import Hashmap from "./hash.js";

const h = new Hashmap();
h.set("hello world", 1);
h.set("hello", 12);
h.set("hell", 123);
console.log(h.map);
console.log(h.values());
