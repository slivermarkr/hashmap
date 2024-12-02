export default class Hashmap {
  constructor() {
    this.list = [[], [], []];
    this.loadFactor = undefined;
    this.capacity = 0;
  }

  prehash(keyString) {
    let prehash = 0;
    const prime = 31;

    for (let i = 0; i < keyString.length; i++) {
      prehash = prehash * prime + keyString.charCodeAt(i);
    }
    return prehash;
  }

  bucket(key) {
    let pre = this.prehash(key);
    console.log("Pre", pre);
    let hash = pre % this.list.length;
    console.log("hash", hash);
    if (hash < 0 || hash > this.list.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      return this.list[hash];
    }
  }

  entry(bucketList, key) {
    for (let buck of bucketList) {
      if (buck.key === key) {
        return buck;
      }
    }
    return null;
  }

  set(key, value) {
    let b = this.bucket(key);
    let e = this.entry(b, key);
    if (e !== null) {
      e.value = value;
      return;
    }
    b.push({ key, value });
    this.capacity++;
    this.loadFactor = this.capacity / this.list.length;
    if (this.loadFactor > 0.8) {
      // TODO: increase the length of the list;
      this.list.length = this.list.length * 2;
    }
  }

  get(key) {
    let b = this.bucket(key);
    let e = this.entry(b, key);

    if (e) {
      return e;
    }
    return null;
  }
}
