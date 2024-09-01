// G -TASK:
/*
Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/
function getHighestIndex(arr) {
  const large = (ele) => ele > 5;
  const resultIndex = arr.findIndex(large);
  console.log(resultIndex);
}

getHighestIndex([5, 21, 12, 21, 8]);
