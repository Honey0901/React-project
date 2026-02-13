/* Working with Functions
Your task is to write a new function that should be named combine and have the following characteristics:
Accept three input values
Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)
Return the calculated result*/

//Solution:
function combine (a,b,c){
    const result = (a * b) / c;
    return result;
    
}
console.log(combine(10, 20, 3));

/*Question
    Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.
In the newly returned array, every object must have a val key and the input array's number as a value.
For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].
*/

//Solution:
 
// let numberArray=[1,2,3,4];

// const value = numberArray.map(transformToObjects);

// function transformToObjects(numberArray){
//     return {val:numberArray};

// }

// console.log(value);

function transformToObjects(numbers) {
  return numbers.map(num => ({ val: num }));
}


console.log(transformToObjects([1, 2, 3]));

function handleTimeout(){
    console.log("Time Out!");
}

const handleTimeout2 = () => {
    console.log("Time out .... again !");
}

setTimeout(handleTimeout,2000);
console.log(handleTimeout2());


const hobbies=["Sports","Cooking"];
hobbies.push("Working");
console.log(hobbies);