// TASK N:
/*
Parametr sifatida yagona string qabul qiladigan function tuzing.
Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
'true' yokida 'false' qaytarsin.

MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)

*Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
bir xil ma'noni beradigan so'zga aytiladi
*/

function palindromCheck(input: string) {
  let newWord = "";
  const arr = input.split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    newWord += arr[i];
  }
  if (newWord === input) {
    console.log(true);
  } else {
    console.log(false);
  }
}

palindromCheck("dad");

// MIT TASK: M
/*
Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin

MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }];

*/

// function getSquareNumbers(input: number[]) {
//   let newArray: { number: number; square: number }[] = [];
//   for (let i = 0; i < input.length; i++) {
//     let arr = {
//       number: input[i],
//       square: Math.pow(input[i], 2),
//     };

//     newArray.push(arr);
//   }
//   console.log(newArray);
// }

// getSquareNumbers([1, 2, 3]);

// TASK L:
/*
So'zlarni ketma - ketligini buzmasdan har bir so'zni
alohida teskarisiga o'girib beradigan fucntion tuzing.
Funtion yagona string qabul qilsin

MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda
*/

// function reverseSentence(input: string) {
//   let NewArray = [];
//   const word = input.split(" ");
//   word.forEach((ele) => {
//     const newString = ele.split("");
//     console.log(newString.reverse().toString());
//   });
// }

// reverseSentence("we like coding!");

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
