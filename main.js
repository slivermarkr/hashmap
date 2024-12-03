import Hashmap from "./hash.js";

const h = new Hashmap();
h.set("hello world", 69);
h.set("hello", 69);
h.set("hell", 69);
console.log(h.map);
console.log(h.keys());
