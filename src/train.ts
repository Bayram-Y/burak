// TASK L:
/*
So'zlarni ketma - ketligini buzmasdan har bir so'zni
alohida teskarisiga o'girib beradigan fucntion tuzing.
Funtion yagona string qabul qilsin

MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda
*/

function reverseSentence(input: string) {
  const word = input.split("");
  console.log(word);
}

reverseSentence("we like coding!");

// TASK K:
/*
Berilayotgan parametr tarkibida nechta unli harf bor
ekanligini aniqlovchi function tuzing

MASALAN: countVowels("string"); return 1

Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
bo'lganligi uchun '1'ni qaytarmoqda
*/
// function countVowels(input: string) {
//   let k = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === "i" || input[i] === "I") {
//       k++;
//     } else if (input[i] === "u" || input[i] === "U") {
//       k++;
//     } else if (input[i] === "e" || input[i] === "E") {
//       k++;
//     } else if (input[i] === "a" || input[i] === "A") {
//       k++;
//     } else if (input[i] === "y" || input[i] === "Y") {
//       k++;
//     } else if (input[i] === "o" || input[i] === "O") {
//       k++;
//     }
//   }
//   return k;
// }
// console.log(countVowels("string"));

// TASK J:
/*
Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.
MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"
Yuqoridagi text tarkibida 'Uzbekistan'
eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda */

// function getLongest(word: string) {
//   const arr = word.split(" ");
//   console.log(arr);
//   // let current1 = 0;
//   let longest1 = "";
//   arr.forEach((ele) => {
//     if (ele.length > longest1.length) {
//       // let current1 = ele.length;
//       let longest1 = ele;
//     }
//   });
// }
// console.log(getLongest("I came from Uzbekistan!"));

// function findLongestWord(word: string) {
//   const arr = word.split(" ");
//   return word.split(" ").reduce((longest, current) => {
//     return current.length > longest.length ? current : longest;
//   });
// }

// console.log(findLongestWord("I came from Uzbekistan!"));

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

/* 
 request join 
 self destroy 

 */

/* Validation:
 Frontend validation 
 Backend Validation 
 Database Validation

 
  
 ( Pipe validation)
 
 
 */
