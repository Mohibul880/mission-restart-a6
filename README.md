## 1. What is the difference between null and undefined?
ans. null is an assigned value which means there is no value here. And undefined means the variable has been declared but no value has been assigned.

## 2. What is the use of the map() function in JavaScript? How is it different from forEach()?
ans.  The map() function creates a new array from an existing array. Without making any modification to the existing array. The map() function is used for data transformation, array of objects manipulation, and rendering data in the UI. Where map() returns a new array from the existing array without any modification, forEach() executes a function for each item and does not return an array.

## 3. What is the difference between == and ===?
ans.  In JavaScript, == is loosely understood as equal by two equal signs. Meaning 1 == "1" => will return TRUE. And === means Strictly Equal with 3 equal signs. Meaning 1 === "1" => will return FALSE.

## 4. What is the significance of async/await in fetching API data?
ans.  Async/await can be used to write asynchronous code but it looks like synchronous style. Async allows a function to work asynchronously and it returns a promise. The await part stops the code execution until the promise is resolved.

## 5. Explain the concept of Scope in JavaScript (Global, Function, Block).
ans.  Scope means which part of the code of a variable, function or object has access to it. Scope is generally of three types. Global Scope, Functional or Local Scope and Block Scope. In Global Scope, a variable can be accessed from anywhere in the code. In Functional or Local Scope, variables are declared within a function and can only be accessed within that function and cannot be accessed outside of it. In Block Scope, variables are declared using let or const. They are declared within { } and can be accessed within that block.