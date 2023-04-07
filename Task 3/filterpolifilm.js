
Array.prototype._filter = function (callback) {
    if (array === null) {
        throw new TypeError('_filter() called on null or undefined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
    }

    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) 
        newArray.push(this[i]);
    }
    
    return newArray;
}



