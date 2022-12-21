// explicit coercion/implicit coercion 
    // concatentaiton 
    // loosely-equal operator (==)

// coercion to boolean (truthiness)
    // which values are truthy/falsey 
    // conditional expressions 
    // - ! operator 
    // logical operators 

// explicit coercion 
    // when we explicity change the type of a variable into a new type 

// example
// let num = 10; 
// console.log(typeof num);
// this is explicit coercion. made it a string.  
// console.log(typeof 'num');

// string to number -----

// let str = '1000';
// console.log(typeof str);
// str = 1000; 
// let strNum = Number(str);
// console.log(typeof str);
// console.log(strNum);

// implicit coercion -----

// let sum = 10+20; 
// let concatSum = '10' + '20';
// console.log(sum);
// console.log(concatSum);

// let notSure = 10 + '20';
// console.log(typeof notSure);

// when you + a string with a number it implicitly makes them both strings 
// also outputs a string 

// double equals -----
// recommended using triple equals whenever possible. first option. 

// double equals only checks for values equal to each other not types
// console.log(10 == 10);
// console.log('10' == 10);
// equals false
// console.log(true == 'true');
// equals true
// console.log('' == false);
// js coerced true to 1. moral of the story dont use double equals. 
// console.log('1' == true);

// let newBool = Boolean(`i'm a string`);
// console.log(newBool);

// truthy and falsey --- example of truthy -----

console.log(typeof Boolean('normal string')); // defines a variable of the boolean type
console.log(Boolean([2, 3, 4])); // all arrays are considered truthy
console.log(Boolean({name:'josh'})); // objects also true

// examples of falsey --- 

console.log(Boolean('')); // empty string is false 
console.log(Boolean(0)); // zero is falsey every other number is truthy even negative numbers
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// will be used in conditionals examples 

if (5 > 1) { // truthy
    console.log('all is well in the world');
} else { // falsey
    console.log('watch out')
}


