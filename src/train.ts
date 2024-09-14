// TASK J:
/*
Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.
MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"
Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda */

function findLongestWord(word: string) {
  const arr = word.split(" ");
  return word.split(" ").reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  });
}

console.log(findLongestWord("I came from Uzbekistan!"));

/*
let uzunligi = 0;
  let enUzun = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > uzunligi) {
      let uzunligi = arr[i].length;
      let uzun = arr[i];
    }
  }
*/

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
