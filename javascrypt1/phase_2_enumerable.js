function callback(ele){
    console.log(ele * 2)
}

Array.prototype.myEach = function(banana) {
    for (let i = 0; i < this.length; i++) {
        banana(this[i]);
    }
};

[1,1,2,3,3].myEach(callback)

function callback2(ele){
    return (ele * 2)
}

Array.prototype.myMap = function(callback2) {
    let array = [] ;
    for (let i = 0; i < this.length; i++) {
        array.push(callback2(this[i]));
    }
    return array
};

console.log([1,1,2,3,3].myMap(callback2))

// ////////////////////
function callback3(acc,ele){
    return (acc + ele)
}

Array.prototype.myReduce = function(callback3,acc) {
    let array = this
   
    if (acc === undefined){
        acc = this[0]
        array = array.slice(1)
    };

    array.myEach(reduceCallBack)
    return acc
};
function reduceCallBack(ele){
    acc = callback3(acc, ele)
}

console.log([1, 2, 3].myReduce(callback3,25))
console.log([1, 2, 3].myReduce(callback3))

