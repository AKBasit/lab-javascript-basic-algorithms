// Iteration 1: Names and Input
let hacker1 = "Dinah"
console.log("The driver's name is", hacker1);

let hacker2 = "Abdul";
console.log("The navigator's name is", hacker2)

// Iteration 2: Conditionals
count1 = hacker1.length;
count2 = hacker2.length;
if(hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${count1} characters!`)
}
else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${count1} characters.`)
}
else (console.log(`It seems that the navigator has the longest name, it has ${count2} characters.`));

// Iteration 3: Loops
let str = ""
for(let i = 0; i < hacker1.length; i++){
  str += hacker1[i].toUpperCase() +" "
}

console.log(str)

let str2 = "";
for(let i = hacker2.length - 1; i >= 0; i--){
  str2 += hacker2[i];
}

console.log(str2)

if(hacker1.charAt(0) < hacker2.charAt(0)){
  console.log("The driver's name goes first.");
}
else if(hacker1.charAt(0) > hacker2[0].charAt(0)){
  console.log("Yo, the navigator goes fisrt, definetly.")
} 
else{
  console.log("What?! You both have the same name?")
};