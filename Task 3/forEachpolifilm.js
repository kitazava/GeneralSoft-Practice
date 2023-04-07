Array.prototype._forEach = function (callback){
  if (array === null) {
    throw new TypeError('_forEach() called on null or undefined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}   
