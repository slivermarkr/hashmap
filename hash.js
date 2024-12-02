export default class HashMap {
  constructor() {
    this.list = new Array(21);
  }
  // TODO:if access out-of-bound return an ERROR
  prehash(keyString) {
    let prehash = 0;
    const prime = 31;
    for (let i = 0; i < keyString.length; i++) {
      prehash = prehash * prime + keyString.charCodeAt(i);
    }
    return prehash;
  }

  bucket(key) {
    const h = this.prehash(key);

    if (h < 0 || h > this.list.length) {
      throw new Error("Trying to access index out of bound");
    } else {
      return this.list[h % this.list.length];
    }
  }
}
