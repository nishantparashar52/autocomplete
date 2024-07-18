class Cache {
    constructor() {
        this.cache = {}
    }
    get(key) {
        return this.cache[key]
    }
    set(key, value) {
        return this.cache[key] = value
    }
}

const C = new Cache()
export default C;
