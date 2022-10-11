function superIncreasing(arr) {
    let sum = arr[0];
    console.log(sum)
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= sum) {
        console.log(arr[i])
        return false;
      }
      sum = sum + arr[i];
    }
    return true;
  }
  



let output = superIncreasing( [979, 1737, -2146, -337, 1316]);
console.log(output); // --> true

// output = superIncreasing([1, 3, 5, 9]);
// console.log(output); // --> false