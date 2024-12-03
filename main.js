import Hashmap from "./hash.js";

const test = new Hashmap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("get('apple')", test.get("apple")); // "red";
console.log("lenght before: ", test.length()); // 12;
// TEST: Ovewrite
test.set("apple", "cider");
console.log("get('apple')", test.get("apple")); // "cider";
console.log("lenght after: ", test.length()); // 12;
console.log(test.capacity / test.map.length); // 0.8;

// TEST: dynamic resizing
// before
console.log("number of keys: ", test.length()); // 12
console.log("load before resize: ", test.length() / test.map.length); // 0.75;
console.log("length of map before resize: ", test.map.length); // 16;

test.set("moon", "silver");
// after
console.log("number of keys: ", test.length()); // 13
console.log("length of map after resize: ", test.map.length); // 32;
console.log("load after resize: ", test.length() / test.map.length); // 0.406;

console.log(test.get("ice cream")); //"white"
console.log(test.has("kite")); // true
console.log(test.has("shite")); // false
console.log(test.remove("kite")); // removes key("kite") & returns true;
console.log(test.has("kite")); // false
console.log("KEYS: ", test.keys());
console.log("VALUES: ", test.values());
console.log("ENTRIES: ", test.entries());
