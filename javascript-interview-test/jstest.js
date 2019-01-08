// console.log (2 + '2'); 
// 22 because it combine string and number

// console.log (2 - '2'); 
// 0 because it only with numbers

// // Remove number inside query with a single line
// let nums = [1,2,2,3];
// //set doesnt allow any duplicate values
// console.log([...new Set(nums)]);

//fix this --NOT SOLVED--
// let func = function() {
//     {
//         let l = 'let';
//         let v = 'var';
//     }
//     console.log(v);
//     console.log(l);
// }
// func();

// Find The Answer
// console.log(5<6<7); //true
//SOLVE: Its true because the operator is convert into 1
// console.log(7>6>5); //false
//SOLVE: Its false because the operator is conver into 1.

// //solve this --NOT SOLVED--
// let a =() => arguments;
// console.log(a('hi'));

//why is it undefined 
// let x = function() {
//     return
//    {
//        message: 'hi'
//    } 
// }

// console.log(x());
//SOLVE CHECK BELOW!
// REMEMBER TO ALWAYS CHECK SYNTAX, javascript doesn't mind comma
// let x = function() {
//     return {
//        message: 'hi'
//    } 
// }

// console.log(x());

//prevent user from editing new properties
// let profile = {
//     name: 'tiger'
// };
// //SOLVE check below code
// Object.freeze(profile);

// //CHECK ABOVE
// profile.age = 3;

// console.log(profile);



// let profile = {
//     name: 'tiger'
// };
// // Object.freeze(profile);
// //SOLVE check below code
// //Seal lets you change the same properties only 
// Object.seal(profile);

// //CHECK ABOVE
// profile.name = 'interview';
// profile.age=3;

// console.log(profile);

//modify name but not be able to modify age
// let profile = {
//     name: 'tiger',
//     age: 3
// };
// //SOLVE BELOW
// Object.defineProperty(profile, 'age',{
//     value: 3,
//     writable : false
// })
// //SOLVE ABOVE
// profile.name = 'fox';
// profile.age = 5;

// console.log(profile);


// what does this output you? 

console.log(Math.max()); // minus infinite