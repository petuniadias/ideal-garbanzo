function isPalindrome(s) {
    s = s.toLowerCase()
    let reverse = ''

    for (let i = s.length - 1; i >= 0; i--) {
        reverse += s[i]
    }

    return reverse === s
}

console.log(isPalindrome('racecar') === true)
console.log(isPalindrome('hello') === false)
console.log(isPalindrome('Ana') === true)
console.log(isPalindrome('a') === true)
