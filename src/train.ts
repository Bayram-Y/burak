//H2-TASK:

function getDigits(argument: string) {
  let stringNumber: string[] = [];
  const arr = argument.split("");
  arr.forEach((ele) => {
    if (+ele) {
      stringNumber.push(ele);
    }
  });
  return stringNumber.join("").toString();
}

console.log(getDigits("m14i1t"));


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