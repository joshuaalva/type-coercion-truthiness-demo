// 01 How Equal 

// function howEqual(arg1, arg2) {
//     if(arg1 === arg2){
//       return 'strictly';
//     }
    
//     else if(arg1 == arg2){
//       return 'loosely';
//     }
    
//     else {
//       return 'not equal';
//     }
//   }
  
//   describe('howEqual', () => {
  
//     it('is a function', () => {
//       expect(typeof howEqual).toEqual('function');
//     });
  
//     it('returns a string', () => {
//       let returnedValue = howEqual(10, 5 + 5);
//       expect(typeof returnedValue).toEqual('string');
//     });
  
//     it('returns the string \'loosely\' if the values are loosely equal', () => {
//       let returnedValue = howEqual(0, false);
//       expect(returnedValue).toEqual('loosely');
//     });
  
//     it('returns the string \'strictly\' if the values are strictly equal', () => {
//       let returnedValue = howEqual(0 === -1, false);
//       expect(returnedValue).toEqual('strictly');
//     });
  
//     it('returns the string \'not equal\' if the values are not equal', () => {
//       let returnedValue = howEqual(0, -1);
//       expect(returnedValue).toEqual('not equal');
//     });
  
//   });

// 02 Is Truthy

// function isTruthy(param) {
//     if(!!param){
//       return true;
//     }
    
//     if (param === false) {
//       return 'The boolean value false is falsey';
//     }
  
//     if (param === null) {
//       return 'The null value is falsey';
//     }
  
//     if (param === 0) {
//       return 'The number 0 is falsey (the only falsey number)';
//     }
  
//     if (param === '') {
//       return 'The empty string is falsey (the only falsey string)';
//     }
  
//     return 'undefined is falsey';
//   }
  
//   describe('isTruthy', () => {
  
//     it('is a function', () => {
//       expect(typeof isTruthy).toEqual('function');
//     });
  
//     it('returns true if given the boolean true', () => {
//       let returnedValue = isTruthy(true);
//       expect(returnedValue).toEqual(true);
//     });
  
//     it('returns true if given a truthy number', () => {
//       let returnedValue = isTruthy(1);
//       expect(returnedValue).toEqual(true);
//     });
  
//     it('returns true if given a truthy string', () => {
//       let returnedValue = isTruthy('Honesty is the best policy');
//       expect(returnedValue).toEqual(true);
//     });
  
//     it('returns the expected string if given the boolean false', () => {
//       let returnedValue = isTruthy(false);
//       expect(returnedValue).toEqual('The boolean value false is falsey');
//     });
  
//     it('returns the expected string if given null', () => {
//       let returnedValue = isTruthy(null);
//       expect(returnedValue).toEqual('The null value is falsey');
//     });
  
//     it('returns the expected string if given undefined', () => {
//       let returnedValue = isTruthy();
//       expect(returnedValue).toEqual('undefined is falsey');
//     });
  
//     it('returns the expected string if given the number 0', () => {
//       let returnedValue = isTruthy(0);
//       expect(returnedValue).toEqual('The number 0 is falsey (the only falsey number)');
//     });
  
//     it('returns the expected string if given an empty string', () => {
//       let returnedValue = isTruthy('');
//       expect(returnedValue).toEqual('The empty string is falsey (the only falsey string)');
//     });
  
//   });

// 03 my or my and

// function myOr(param1, param2, param3) {
    // first thought 
    // if(param1 === true && param2 || param3 === false)
    // not optimizied at all ran in to trouble with remaining 
    // do more research on !! operator
//     if(!!param1){ //if truthy, return!
//       return param1;
//     }
    
//     if(!!param2){
//       return param2;
//     }
    
//     if(!!param3){
//       return param3;
//     }
    
//     return param3; //else, all of the values are falsey. return the last value
//   }
  
//   function myAnd(param1, param2, param3) {
//     if(!param1){
//       return param1;
//     }
    
//     if(!param2){
//       return param2;
//     }
    
//     if(!param3){
//       return param3;
//     }
    
//     return param3;
//   }
  
//   describe('myOr', () => {
  
//     it('is a function', () => {
//       expect(typeof myOr).toEqual('function');
//     });
  
//     it('returns the first value if it is the first truthy value', () => {
//       let returnedValue = myOr('apples', 1, false);
//       expect(returnedValue).toEqual('apples');
//     });
  
//     it('returns the second value if it is the first truthy value', () => {
//       let returnedValue = myOr(null, 'i am truthy', 'also true');
//       expect(returnedValue).toEqual('i am truthy');
//     });
  
//     it('returns the third value if it is the first truthy value', () => {
//       let returnedValue = myOr(false, false, true);
//       expect(returnedValue).toEqual(true);
//     });
  
//     it('returns the third value if none of the values are truthy', () => {
//       let returnedValue = myOr('', 0, null);
//       expect(returnedValue).toEqual(null);
//     });
  
//   });
  
//   describe('myAnd', () => {
  
//     it('is a function', () => {
//       expect(typeof myAnd).toEqual('function');
//     });
  
//     it('returns the first value if it is the first falsey value', () => {
//       let returnedValue = myAnd(0, 1, false);
//       expect(returnedValue).toEqual(0);
//     });
  
//     it('returns the second value if it is the first falsey value', () => {
//       let returnedValue = myAnd(20, '', 'i am truthy');
//       expect(returnedValue).toEqual('');
//     });
  
//     it('returns the third value if it is the first falsey value', () => {
//       let returnedValue = myAnd(true, 'happy', 0);
//       expect(returnedValue).toEqual(0);
//     });
  
//     it('returns the third value if all of the values are truthy', () => {
//       let returnedValue = myAnd('finally', 'we did it!', 'yay!');
//       expect(returnedValue).toEqual('yay!');
//     });
  
//   });

// 04 Only One

// function onlyOne(param1, param2, param3){
//     // if only the first value is truthy return true;
//     if(!!param1 && !param2 && !param3){
//       return true;
//     }
//     // if only the second value is truthy return true;
//     if(!param1 && !!param2 && !param3){
//       return true;
//     }
//     // if only the third value is truthy
//     if(!param1 && !param2 && !!param3){
//       return true;
//     }
    
//     return false;
//   }
  
//   describe('onlyOne', () => {
  
//     it('is a function', () => {
//       expect(typeof onlyOne).toEqual('function');
//     });
  
//     it('returns a boolean', () => {
//       let returnedValue = onlyOne(1, 1, 1);
//       expect(typeof returnedValue).toEqual('boolean');
//     });
  
//     it('returns true if only the first value is truthy', () => {
//       let returnedValue = onlyOne(1, 0, false);
//       expect(returnedValue).toEqual(true);
//     });
  
//     it('returns true if only the second value is truthy', () => {
//       let returnedValue = onlyOne(null, 'hi!', undefined);
//       expect(returnedValue).toEqual(true);
//     });
  
//     it('returns true if only the third value is truthy', () => {
//       let returnedValue = onlyOne(0, '', true);
//       expect(returnedValue).toEqual(true);
//     });
  
//     it('returns false if all of the values are falsey', () => {
//       let returnedValue = onlyOne(false, null, undefined);
//       expect(returnedValue).toEqual(false);
//     });
  
//     it('returns false if only the first value is falsey', () => {
//       let returnedValue = onlyOne('', -20, true);
//       expect(returnedValue).toEqual(false);
//     });
  
//     it('returns false if only the second value is falsey', () => {
//       let returnedValue = onlyOne(true, null, 'i am truthy');
//       expect(returnedValue).toEqual(false);
//     });
  
//     it('returns false if only the third value is falsey', () => {
//       let returnedValue = onlyOne(true, 'pumpkin', 0);
//       expect(returnedValue).toEqual(false);
//     });
  
  
// 05 Zero Dark Thirty

// function zeroDarkThirty(originalValue){
//     if(originalValue === 0){
//       return NaN;
//     }
//     // explicitly coerce the originalValue to a string
//     originalValue = String(originalValue);
//     // create a new value
//     let newValue = '';
//     // loop throught the original value
//     for(let i = 0; i < originalValue.length; i++){
//       let currentChar = originalValue[i];
//     // store the current character from the string in a variable
//       if(currentChar !== '0'){
//         // as long as the char isn't a zero, concat it onto the newValue string
//         newValue += currentChar;
//       }
//     }
//     // explicity coerce the newvalue to a number as its returned
//     return Number(newValue);
//   }
  
  
//   describe('zeroDarkThirty', () => {
  
//     it('is a function', () => {
//       expect(typeof zeroDarkThirty).toEqual('function');
//     });
  
//     it('returns a number', () => {
//       let returnedValue = zeroDarkThirty(10);
//       expect(typeof returnedValue).toEqual('number');
//     });
  
//     it('returns the original number after stripping out the zeros', () => {
//       let returnedValue = zeroDarkThirty(10000000000);
//       expect(returnedValue).toEqual(1);
//     });
  
//     it('returns NaN if given an 0', () => {
//       let returnedValue = zeroDarkThirty(0);
//       expect(returnedValue).toEqual(NaN);
//     });
  
//   });
  
  