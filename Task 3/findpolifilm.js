Array.prototype._find = function(callback){
    if (array === null) {
        throw new TypeError('_find() called on null or undefined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
    }

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            return this[i]
        }
    }
    return undefined    
}