
///                                   TASK_1

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function formatUser(user: User): string {
  return `${user.name} (${user.age} yosh) - ${
    user.isAdmin ? "Administrator" : "Oddiy foydalanuvchi"
  }`;
}

const user: User = { name: "Ali", age: 25, isAdmin: true };
console.log(formatUser(user)); 


//  TASK   2

function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3])); 
console.log(reverseArray(["a", "b", "c"])); 

//  TASK   3

function fibonacci(n: number): number[] {
  if (n <= 0) return [];
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
}

console.log(fibonacci(5));

//      TASK 4

function countWords(text: string): number {
  return text.trim().split(/\s+/).length;
}

console.log(countWords("Salom dunyo! Bu sinov matni."));

//      TASK 5

function findMax(arr: number[]): number | null {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

console.log(findMax([1, 2, 3, 4])); 
console.log(findMax([])); 

//      TASK 6

function transformArray<T>(arr: T[]): T[] {
  return arr.map((item) =>
    typeof item === "number"
      ? (item as number) * 2
      : typeof item === "string"
      ? (item as string).toUpperCase()
      : item
  );
}

console.log(transformArray([1, 2, 3])); // [2, 4, 6]
console.log(transformArray(["a", "b"])); // ["A", "B"]




