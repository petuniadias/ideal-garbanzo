function fizzBuzz(n) {
    const array = []

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("FizzBuzz");
        } else if (i % 5 === 0) {
            array.push("Buzz")
        } else if (i % 3 === 0) {
            array.push("Fizz")
        } else {
            array.push(i);
        }
    }

    return array
}

console.log(fizzBuzz(3)[2] === "Fizz");
console.log(fizzBuzz(5)[4] === "Buzz");
console.log(fizzBuzz(15)[14] === "FizzBuzz");
console.log(fizzBuzz(1)[0] === 1);