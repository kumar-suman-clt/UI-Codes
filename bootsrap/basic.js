alert("kindly Register your details");
var fName=prompt("Enter your first name: ");
console.log(fName);
var lName=prompt("Enter your second name: ");
console.log(lName);
if(fName[1] !== lName[1]) {
  alert("As per your details you cannot register");
}
var age=prompt("Enter Your Age from date of birth:");
console.log(age);
/*
var report = 'blank'
if(age >  20 && age < 30){
    report = "Strong sales of both items"
    console.log(report)
}
*/

var urHeight=prompt("Enter your height in cm:");
console.log(urHeight);

if(urHeight < "170"){
  alert("As per your details your is less");
}

var petName=prompt("Enter your Pet Name");
console.log(petName);


if (petName[petName.length-1] === "y"){
  alert("As per your details your is less");
}
