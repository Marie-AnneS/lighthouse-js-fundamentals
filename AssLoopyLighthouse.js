/* Ma solution mais ne passe pas

for (var i = 100; i <= 200; i++){
  var number = i;
  if (number %3 === 0){
    if (number %4 === 0){
      console.log("LoopyLighthouse");
    }
    console.log("Loopy");
  } else if (number %4 === 0){
    console.log("Lighthouse");
  } else {
    console.log(number);
  }
};
*/
for (var i = 100; i <= 200; i++){
  var num = i;
  if (num % 12 === 0) {
    console.log("LoopyLighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(num);
  }
};