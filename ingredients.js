var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i = 0;

console.log("---------------------------------------");
// Write a while loop that prints out the contents of ingredients:
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++;
}
console.log("---------------------------------------");

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
console.log("---------------------------------------");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length-1; i >= 0; i--){
  console.log(ingredients[i]);
}
console.log("---------------------------------------");
