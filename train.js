// G -TASK:
/*
Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/
// function getHighestIndex(arr) {
//   const large = (ele) => ele > 5;
//   const resultIndex = arr.findIndex(large);
//   console.log(resultIndex);
// }

// getHighestIndex([5, 21, 12, 21, 8]);

/* H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12" */

function getPositive(arrlist) {
  for (let i = 0; i < arrlist.length; i++) {
    if (arrlist[i] > 0) {
      console.log(arrlist[i]);
    }
  }
}

getPositive([1, -4, 2]);
