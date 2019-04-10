
function range(start, end, step){
  var some_array = [];
  if (start === undefined || end === undefined || step === undefined){
    //console.log("NON definie");
    return some_array;
  } else if (start > end){
    //console.log("NON start plus grand que end");
    return some_array;
  } else if (step < 0 ){
    //console.log("NON step est negatif");
    return some_array;
  } else {
    for (var i = start; i <= end; i +=step){
      some_array.push(i);
    }

    return some_array;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));