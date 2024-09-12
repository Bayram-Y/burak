// TASK I:
/*
Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

*/
// function majorityElement(numberArr: number[]) {
//   const sortedNum: number[] = numberArr.sort((a, b) => a - b);
//   let mostFrequentNum: number = sortedNum[0];
//   let maxCount: number = 1;
//   let currentCount: number = 1;

//   for (let i = 1; i < sortedNum.length; i++) {
//     if (sortedNum[i] === sortedNum[i - 1]) {
//       currentCount++;
//     } else {
//       currentCount = 1;
//     }

//     if (currentCount > maxCount) {
//       maxCount = currentCount;
//       mostFrequentNum = sortedNum[i];
//     }
//   }

//   return mostFrequentNum;
// }

// const numbers: number[] = [1, 2, 3, 4, 5, 4, 3, 4];
// console.log(majorityElement(numbers));

function majorityElement(input: number[]) {
  let maxNum: number = 0;
  let major: number | null = null;

  input.forEach((ele) => {
    const count = input.filter((x) => x === ele).length;
    if (count > maxNum) {
      maxNum = count;
      major = ele;
    }
  });
  return major;
}
const result = majorityElement([1, 2, 3, 4, 5, 4, 3, 4]);
console.log(result);

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
