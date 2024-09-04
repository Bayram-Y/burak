// H-TASK: 

function getPositive(arraylist: number[]) {
  arraylist.filter((ele) => {
    if (ele > 0) {
      console.log(ele);
    }
  });
}

getPositive([1, -4, 2]);
