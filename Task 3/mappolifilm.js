Array.prototype._map = function(callback){
    if (array === null) {
        throw new TypeError('_map() called on null or undefined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
    }

    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray[i].push(callback(this[i], i, this))
    }

    return newArray
}

