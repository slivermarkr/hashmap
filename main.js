import Hashmap from "./hash.js";

const h = new Hashmap();
h.set("hello world", 1);
h.set("hello", 12);
h.set("hell", 123);
h.set("lele", 123);
h.set("ll", 1234);
h.set("el", 12345);
console.log(h.length());
console.log(h.get("ll"));
h.remove("ll");
console.log(h.entries());
console.log(h.length());
console.log(h.get("ll"));
