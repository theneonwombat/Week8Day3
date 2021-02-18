Array.prototype.bubbleSort = function(){
   let sorted = false;
   
   while (!sorted) {
      sorted = true;

      for (let i = 0; i < (this.length - 1); i++) {
         if( this[i] > this[i+1]) {
            sorted = false;
            [this[i], this[i + 1]] = [this[i + 1], this[i]];
         }
         
      }
   }
   return this;
}

console.log([4,6,1,8,3,6,2].bubbleSort())