const assert=require('assert');
const {add}=require('./index');

assert.StrictEqual(add(2,3),5);
assert.StrictEqual(add(0,0),0);
assert.StrictEqual(add(-1,1),0);

console.log(;All Assers Passes!');
