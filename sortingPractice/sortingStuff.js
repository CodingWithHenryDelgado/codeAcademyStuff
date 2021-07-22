const sortByLength = (a, b) => {
    if(a.length === b.length){
      return ascendingOrder(a, b);
    }
    return a.length - b.length;
}

const ascendingOrder = (a, b) => {
    if(a < b){
      return -1;
    }else if(a > b){
      return 1;
    }else {
      return 0;
    }
  }

  //OR do this one

const ascendingOrder2 = (a, b) => {
    return a - b;
}

const explicitSortWithComparator = (inputArray, order) => {
  
    const explicitComparator = (a, b) => {
      let indexA = order.length;
      let indexB = order.length;
      if (order.includes(a)) {
        indexA = order.indexOf(a);
      }
      if (order.includes(b)) {
        indexB = order.indexOf(b);
      }
      return indexA - indexB;
    }
    
    return inputArray.sort(explicitComparator).slice();
  }
  
  // Use this array to test your code:
  const testArray = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
  testArray.sort(ascendingOrder);
  console.log(testArray);
  
  module.exports = ascendingOrder;