// TASK W
/*
Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti
*/
function chunkArray(arr: number[], size: number) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  console.log(result);
}

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

// TASK V
/*
Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda.
*/

// function countChars(input: string): { [key: string]: number } {
//   let charCount: { [key: string]: number } = {};

//   for (let char of input) {
//     if (charCount[char]) {
//       charCount[char] += 1;
//     } else {
//       charCount[char] = 1;
//     }
//   }

//   return charCount;
// }

// console.log(countChars("hello"));

// TASK: U
/*
Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.
*/

// function sumOdds(input: number) {
//   let count: number = 0;
//   for (let i = 1; i < input; i++) {
//     if (i % 2 != 0) {
//       count += 1;
//     }
//   }
//   console.log(count);
// }

// sumOdds(9);

// TASK T
/*
Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.
*/
/*
function mergeSortedArrays(input: number[], input2: number[]) {
  let arr1 = input.sort();
  let arr2 = input2.sort();
  const newArray = arr1.concat(arr2).sort((a: number, b: number) => a - b);;
  console.log(newArray);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30,32]);
*/
// TASK S
/*
Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

MASALAN: missingNumber([3, 0, 1]); return 2

Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
'2' soni tushib qolgan
*/

// function missingNumber(input: number[]) {
//   let missingNumber = 0;
//   const sortNumber = input.sort();

//   for (let i = 0; i < sortNumber.length; i++) {
//     if (sortNumber[i + 1] - sortNumber[i] > 1) {
//       missingNumber = sortNumber[i] + 1;
//       console.log(missingNumber);
//     }
//   }
// }

// missingNumber([3, 0, 1]);

// TASK R
/*
Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.
*/
/*
function calculate(input: string) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    if (Number(input[i])) {
      let currentNumber = +input[i];
      result += currentNumber;
    }
  }
  console.log(result);
}

calculate("1 + 3");
*/
// TASK Q:
/*
Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "year"); return false;
Ushbu misolda, ikkinchi argument sifatida berilayotgan 'year' objectning
propertysida mavjud bo'lmaganligi uchun 'false' natijani qaytarmoqda.
*/
/*
function hasProperty(input: object, word: string) {
  const result = Object.keys(input);
  console.log(result);
  const found = result.includes(word);
  if (found) {
    console.log(found);
  } else console.log(false);
}

hasProperty({ name: "BMW", model: "M3" }, "model");
*/
// TASK P:
/*
Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/
// function objectToArray(input: any) {
//   let newArray = [];
//   for (let key in input) {
//     newArray.push(key, input[key]);
//   }
//   console.log(newArray);
// }

// objectToArray({ a: 10, b: 20 });

// TASK O:
/*

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.

*/
// function calculateSumOfNumbers(input: (number | object | boolean | string)[]) {
//   let allNumbers: number = 0;
//   const onlyNumber = input.forEach((ele) => {
//     if (typeof ele === "number") {
//       allNumbers += ele;
//     }
//   });
//   console.log(allNumbers);
// }

// calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);

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

// function palindromCheck(input: string) {
//   let newWord = "";
//   const arr = input.split("").reverse();
//   for (let i = 0; i < arr.length; i++) {
//     newWord += arr[i];
//   }
//   if (newWord === input) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// palindromCheck("dad");

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
