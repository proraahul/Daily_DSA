function factorial(n) {
    // Base case: if n is 0 or 1, the factorial is 1
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // Recursive case: factorial(n) = n * factorial(n-1)
      return n * factorial(n - 1);
    }
  }
  
  // Example usage:
  const number = 5; // You can change this to any non-negative integer
  const result = factorial(number);
  console.log(`Factorial of ${number} is: ${result}`);
  