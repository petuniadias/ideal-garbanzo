function unique(arr) {
    const unique  = [...new Set(arr)];

    return unique;
}

console.log(JSON.stringify(unique([1, 2, 2, 3, 1])) === JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(unique([])) === JSON.stringify([]));
console.log(unique([1, 1, 1]).length === 1);