import Hashmap from "./hash.js";

const h = new Hashmap();

h.set("hello", { name: "Mario" });
console.log(h.list);
console.log(h.get("hello"));
