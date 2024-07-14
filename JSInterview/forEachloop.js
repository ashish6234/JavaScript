//= concept in forEach Loop

let takeOne = Array.prototype.customForEachOne = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

