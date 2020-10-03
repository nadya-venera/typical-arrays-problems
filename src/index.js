const returnZeroIfEmpty = (array, callback) => {
   if (typeof array === 'undefined' || array.length === 0) {
      return 0; 
    }
     return callback(array);
    };
    
const min = (array) => {
   return returnZeroIfEmpty(array, () => {
      let min = array[0]; // assuming the lowest number is the first element 
      for (let i = 1; i < array.length; i++) {
         if (array[i] < min) {
            // if the current element is lower than min, let min be current element
       min = array[i];
       }
       }
        return min; 
      });
    };
    
    
  const max = (array) => {
     return returnZeroIfEmpty(array, () => {
        let max = array[0]; // assuming the biggest number is the first element
         for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
               // if the current element is bigger than max, let max be current element 
      max = array[i];
     }
     } return max; 
    });
  }; 
  
  
  const avg = (array) => {
    
  return returnZeroIfEmpty(array, () => { 
    let sum = 0;
     for (let i = 0; i < array.length; i++) {
        sum += array[i];
       }
        return sum / array.length;
       });
      }; 
      exports.min = min;
      exports.max = max;
      exports.avg = avg;
