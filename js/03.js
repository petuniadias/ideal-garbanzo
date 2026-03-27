function maxOf(a, b) {
    if (a > b) {
        return a
    } else if (a < b) {
        return b
    } else {
        if (Math.random() < 0.5) {
            return a
        } else {
            return b
        }
    }
}

console.log(maxOf(3, 7) === 7);
console.log(maxOf(10, 2) === 10);
console.log(maxOf(-1, -5) === -1);
console.log(maxOf(5, 5) === 5);