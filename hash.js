export default class Hashmap {
  constructor() {
    this.initLen = 3;
    this.map = Array.from({ length: this.initLen }, () => []);
    this.loadFactor = 0.8;
    this.capacity = this.loadFactor * this.map.length;
    this.mapSize = 0;
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
    let hash = pre % this.map.length;

    if (hash < 0 || hash >= this.map.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      return this.map[hash];
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
    this.mapSize++;

    if (this.mapSize > this.capacity) {
      // TODO: increase the length of the list;
      this.resize();
    }
  }

  get(key) {
    let b = this.bucket(key);
    let e = this.entry(b, key);

    if (e) {
      return e.value;
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  length() {
    return this.mapSize;
  }

  remove(key) {
    let b = this.bucket(key);
    if (!b) {
      return false;
    }
    for (let i = 0; i < b.length; i++) {
      if (b[i].key === key) {
        b.splice(i, 1);
        this.mapSize--;
        return true;
      }
    }
  }

  clear() {
    for (const bucket of this.map) {
      if (bucket.length) {
        bucket.splice(0, bucket.length);
      }
    }
    // Reset to initial values
    this.map = Array.from({ length: this.initLen }, () => []);
    this.mapSize = 0;
  }

  keys() {
    const arrOfKeys = [];
    for (const bucket of this.map) {
      if (bucket.length) {
        for (const buck of bucket) {
          if (buck) {
            arrOfKeys.push(buck.key);
          }
        }
      }
    }
    return arrOfKeys;
  }

  values() {
    const arrOfValues = [];
    const keys = this.keys();

    for (let i = 0; i < keys.length; i++) {
      arrOfValues.push(this.get(keys[i]));
    }

    return arrOfValues;
  }

  entries() {
    const arrOfEnt = [];
    const keys = this.keys();

    for (let i = 0; i < keys.length; i++) {
      let b = this.bucket(keys[i]);
      if (b) {
        arrOfEnt.push(this.entry(b, keys[i]));
      }
    }

    return arrOfEnt;
  }
  resize() {
    let oldList = this.map;
    this.map = Array.from({ length: this.map.length * 2 }, () => []);
    this.capacity = this.loadFactor * this.map.length;
    this.mapSize = 0;

    for (const bucket of oldList) {
      for (const { key, value } of bucket) {
        this.set(key, value);
      }
    }
  }
}
