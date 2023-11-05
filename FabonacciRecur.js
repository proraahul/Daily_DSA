function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function displayFibonacciSequence(count) {
    if (count <= 0) {
      console.log("Invalid input. Please enter a positive number.");
      return;
    }
  
    console.log("Fibonacci Sequence:");
    for (let i = 0; i < count; i++) {
      console.log(fibonacci(i));
    }
  }
  
  // Change the value of 'count' to display a different number of Fibonacci sequence elements
  const count = 10;
  displayFibonacciSequence(count);
  