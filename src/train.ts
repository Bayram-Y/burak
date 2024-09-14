function majorityElement(input: number[]): {
  maxNum: number;
  maxCount: number;
} {
  let maxNum = 0;
  let maxCount = 0;

  for (let i = 0; i < input.length; i++) {
    let count = 0;

    for (let k = 0; k < input.length; k++) {
      if (input[i] === input[k]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      maxNum = input[i];
    }

    console.log(count);
    
  }

  return { maxNum, maxCount };
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4, 5]));
// TASK I:

// function majorityElement(input: number[]) {
//   let maxNum: number = 0;
//   let major: number | null = null;

//   input.forEach((ele) => {
//     const count = input.filter((x) => x === ele).length;
//     if (count > maxNum) {
//       maxNum = count;
//       major = ele;
//     }
//   });
//   return major;
// }
// const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
// console.log(result);

// //H2-TASK:

// function getDigits(argument: string) {
//   let stringNumber: string[] = [];
//   const arr = argument.split("");
//   arr.forEach((ele) => {
//     if (+ele) {
//       stringNumber.push(ele);
//     }
//   });
//   return stringNumber.join("").toString();
// }

// console.log(getDigits("m14i1t"));

// H-TASK:

// function getPositive(arraylist: number[]) {
//   arraylist.filter((ele) => {
//     if (ele > 0) {
//       console.log(ele);
//     }
//   });
// }

// getPositive([1, -4, 2]);

/* Project Standarts: 
 -Logging   standarts
 -Naming standarts 
 function, method, variable => CAMEL   
 class   => PASCAL                  
 folder  => KEBAB
 css   => SNAKE      
 
 - Error handling

 */
