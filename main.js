import Hashmap from "./hash.js";

const h = new Hashmap();
h.set("hello world", 69);
h.set("hello", 69);
h.set("hell", 69);
console.log(h.get("hello"));
console.log(h.map);
console.log(h.mapSize);
h.clear();
console.log(h.map);
console.log(h.mapSize);
console.log(h.map.length);
