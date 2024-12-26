"use strict";
///                                   TASK_1
function formatUser(user) {
    return `${user.name} (${user.age} yosh) - ${user.isAdmin ? "Administrator" : "Oddiy foydalanuvchi"}`;
}
const user = { name: "Ali", age: 25, isAdmin: true };
console.log(formatUser(user));
//  TASK   2
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray(["a", "b", "c"]));
//  TASK   3
function fibonacci(n) {
    if (n <= 0)
        return [];
    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result.slice(0, n);
}
console.log(fibonacci(5));
//      TASK 4
function countWords(text) {
    return text.trim().split(/\s+/).length;
}
console.log(countWords("Salom dunyo! Bu sinov matni."));
//      TASK 5
function findMax(arr) {
    if (arr.length === 0)
        return null;
    return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4]));
console.log(findMax([]));
//      TASK 6
function transformArray(arr) {
    return arr.map((item) => typeof item === "number"
        ? item * 2
        : typeof item === "string"
            ? item.toUpperCase()
            : item);
}
console.log(transformArray([1, 2, 3])); // [2, 4, 6]
console.log(transformArray(["a", "b"])); // ["A", "B"]
