function fibonacci(n) {
  let primaryValues = [0, 1]; 
  let result = 0;

  if (n === 1) {
    console.log(primaryValues[0]);
  } else if (n >= 2) {
    console.log(primaryValues[0]); 
    console.log(primaryValues[1]);
  }

  for (let i = 2; i < n; i++) { 
    result = primaryValues[0] + primaryValues[1]; 
    primaryValues[0] = primaryValues[1];
    primaryValues[1] = result;
    console.log(result);
  }
}


fibonacci(10);


//Recursive Solution

// function FibonacciRecursiveVersion(n) {
//   if (n === 1) {
    
//   }
// }