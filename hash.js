export default class Hashmap {
  constructor() {
    this.list = new Array(21);
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
    const pre = this.prehash(key);
    let hash = pre % this.list.length;

    if (hash < 0 || hash > this.list.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      return this.list[hash];
    }
  }

  entry(bucket, key) {
    for (const buck of bucket) {
      if (buck.key === key) {
        return buck;
      }
    }
    return null;
  }

  set(key, value) {
    // look if value is present ? overwrite : set
    let b = this.bucket(key);
    let e = this.entry(b, key);
    if (e) {
      e.value = value;
      return;
    } else {
      b.push({ key, value });

      this.capacity++;
      this.loadFactor = this.capacity / this.list.length;
      if (this.loadFactor > 0.8) {
        // TODO: increase the length of the list;
        this.list.length = this.list.length * 2;
      }
    }
  }
}
