//recursion process

const factorial = (n) => {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(3))


//iterative process with recursion
const factorial_i = (n) =>{
    const iter = (counter, accumulator) =>{
        if (counter === 1){
            return accumulator;
        }
        return iter(counter - 1, counter * accumulator);
    }
    return iter(n, 1);
}

console.log(factorial_i(4))


//iterative process without recursion (with variable)
function factorial_v(n){
    let counter = 1;
    let result = 1;

    while (counter <= n){
        result = result * counter;
        counter = counter + 1;
    }
    return result
}

console.log(factorial_v(5))