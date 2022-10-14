const arr =[11,22,99,66,55,33];
console.log(arr.length);


// * unshift method ::
// insert element at beginning | also returns new array's length
console.log('\n:: unshift method ::\n')
const example = [1,2,3,4,5,6,7,8,9];
example.unshift('yash','jivani');  // console.log -> return new array's length
console.log(example);

// * push method ::
// insert element at end | also returns new array's length
console.log('\n:: push method ::\n')
const example2 = [1,2,3,4];
example2.push('value1','value2');    // console.log -> return new array's length
console.log(example2);

// * shift method ::
// remove first element of array | returns removed element
console.log('\n:: shift method ::\n')
const example3 = [1,2,3,4];
let deletedItem = example3.shift();    
console.log(example3,deletedItem);
