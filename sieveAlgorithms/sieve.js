const findTrueIndices = (arr) => {
  const newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === true){
      newArray.push(i);
    }
  }
  return newArray;
}

const sieveOfEratosthenes = (max) => {
  const output = new Array(max + 1).fill(true);

  output[0] = false;

  output[1] = false;

  for(let i = 2; i <= max; i++){
      if(output[i] === true){
        for(let j = i * 2; j <= max; j = j + i){
            output[j] = false;
        }
      }
  }

  return findTrueIndices(output);
}


const test = sieveOfEratosthenes(13);
// should return [2, 3, 5, 7, 11, 13]
console.log(test);

// Leave this line for testing:
module.exports = sieveOfEratosthenes;

const sieveOfEratosthenes = (limit) => {
  // Handle edge cases
  if (limit <= 1) {
    return [];
  }
  // Create the output
  const output = new Array(limit + 1).fill(true);
  // Mark 0 and 1 as non-prime
  output[0] = false;
  output[1] = false;
 
  // Iterate up to the square root of the limit
  for (let i = 2; i < Math.pow(limit, 0.5); i++) {
    if (output[i] === true) {
      // Mark all multiples of i as non-prime
      for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
        output[j] = false;
      }
    }
  }
 
  // Remove non-prime numbers
  return output.reduce((primes, current, index) => {
    if (current) {
      primes.push(index);
    }
    return primes
  }, []);
}