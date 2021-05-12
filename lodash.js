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
  },
  invert(object){
    let invertedObject = {};
    for(let key in object){
      const originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, funcboo){
    for(let key in object){
      let stuff = funcboo(object[key]);
      if(stuff){ 
        return key;
      };
    };
    return undefined;
  },
  drop(array, number){
    if(number === undefined){
      number = 1;
    }
    const copyArray = array.slice(number, array.length);
    return copyArray;
  },
  dropWhile(array,funcboo){
    let cb = (element, index) => {
      return !funcboo(element, index, array);
    };

    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size=1){
      let arrayChunks = [];
      for(let i = 0; i < array.length; i += size){
          let arrayChunk = array.slice(i, i+size);
          arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
  }
};

// Do not write or modify code below this line.
// module.exports = _;