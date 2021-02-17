Array.prototype.uniq = function() {
  let array = [];
  // debugger
  this.forEach(function(element){ //forEach takes in a function as an argument
    if (!array.includes(element)){
      // debugger
      // if (element === 2) debugger
      array.push(element)
    }
  });
  return array
};

console.log([1,1,2,3,3].uniq());

Array.prototype.twoSum = function() {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length; j++) {
      if (this[i]+this[j]===0) {
        array.push([i,j])
      };
    };
  };
  return array
}

console.log([-1,2,1,0,-2].twoSum());

Array.prototype.transpose = function() {
  let array1 = [];
  for (let i = 0; i < this[0].length; i++) {
    let array2 = [];
    for (let j = 0; j < this.length; j++) {
      array2.push(this[j][i])
    }
    array1.push(array2)
  }
  return array1
}

// console.log([[-1, 2], [1, 0]].transpose());
console.log([[-1, 2, 6], [1, 0, 7]].transpose()); // => [[-1,1],[2,0],[6,7]]