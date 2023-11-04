function sumOfNaturalNumbers(n) {
    // Base case: If n is 1, return 1 (the sum of the first natural number).
    if (n === 1) {
      return 1;
    }
  
    // Recursive case: The sum of the first n natural numbers is n + the sum of the first (n-1) natural numbers.
    return n + sumOfNaturalNumbers(n - 1);
  }
  
  // Example usage:
  const n = 5; // Find the sum of the first 5 natural numbers
  
  const result = sumOfNaturalNumbers(n);
  console.log("Sum of the first", n, "natural numbers is", result); // Output: Sum of the first 5 natural numbers is 15
  