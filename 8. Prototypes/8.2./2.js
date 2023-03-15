//1
function Obj(num) {
  this.num = num;
}

let obj = new Obj(5);
let obj2 = new obj.constructor(6);

alert(obj2.num);

//2
function Arr(num) {
  this.num = num;
}
Arr.prototype = {};

let arr = new Arr(5);
let arr2 = new arr.constructor(6);

alert(arr2.num);
