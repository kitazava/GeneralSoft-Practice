Array.prototype._reduce = function(callback, acc){
    if (array === null) {
        throw new TypeError('_reduce() called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError('callback must be a function');
    }

    if(arguments.length < 2){
        i = 1
        acc = this[0]
    }

    for(let i=0; i < this.length; i++){
        acc = callback(acc,this[i], i, this)
    }
    return acc
}