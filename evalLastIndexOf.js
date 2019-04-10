
function lastIndexOf(myArray, myNumber){
  var indexNumber = -1;
  for (var i = 0; i < myArray.length; i++){
    //console.log(myArray[i]);
    if (myArray[i] === myNumber){
      //console.log("ici myNumber")
      indexNumber = i;

    }
  }
      //console.log(indexNumber);
  return indexNumber;
}

lastIndexOf([ 0, 1, 4, 1, 2 ], 1);
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);
lastIndexOf([ 0, 1, 4, 1, 2 ], 3);
lastIndexOf([ 5, 5, 5 ], 5);
lastIndexOf([], 3);