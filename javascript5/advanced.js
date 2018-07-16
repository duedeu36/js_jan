function multiply(a, b=1) {
    return a*b;
}

console.log(multiply(5, 2));
console.log(multiply(5));

// Task:
//          rewrite multiply with the same
//          return value under the rescritrion that
//          it does not use a default paramter


function multiply2(a, b) {
    if(!b){ // if(b is not defined)
       return a*1;
    }
    
    return a*b;
}

console.log(multiply2(5));

