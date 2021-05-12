const _= {
  clamp(number,lower,upper){
    const lowerClampedValue = Math.max(number,lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  // inRange(number,starter,end){
  //   end === starter;
  //   const temp = end;
  //   starter = 0;
  //   if(starter > end){
  //     starter = end;
  //     end = temp;
  //   }

  //   if(starter < number && number > end){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  inRange(number,start,end){
    if(end === undefined){
      end = start;
      start = 0;
    }
    if(start > end){
      const temp = end;
      end = start;
      start = temp;
    }
    const isInRange = start <= number && number < end;
    return isInRange;
  },
  words(string){
    const words = string.split(' ');
    return words;
  },
  pad(string, length){
    if(string.length <= length){
      const differenceLength = Math.floor((length - string.length) / 2);
      const paddingLength = length - string.length - differenceLength;
      const paddedString = ' '.repeat(differenceLength) + string + ' '.repeat(paddingLength);
      return paddedString;
    }else{
      return string;
    }
  },
  has(object, key){
    const hasValue = object[key];
      if(hasValue != undefined){
        return true;
      }else{
        return false;
      }
  }
};

// Do not write or modify code below this line.
// module.exports = _;