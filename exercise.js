//Create an if statement that tells if a phone number is in international format (starts with a plus character)
let phoneNumber = "04567838999";
let result = phoneNumber.startsWith("+"); 
console.log(result)

//Create a function that takes a name and converts it to capitalized form (first letter uppercase, rest lowercase)
let Name = "thisIsMyUnitedStatesOfWhatever";
let lowerCase = Name.toLowerCase();
console.log(lowerCase)
let capitalizedFirst = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
console.log(capitalizedFirst)

//Create a function that takes a newspaper heading and converts it to capitalized form (first letter of each word in uppercase)
function capitalize(input) {
let words = input.split(' ');
let CapitalizedWords = [];
words.forEach(element => {CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));});
return CapitalizedWords.join(' ');}
console.log(capitalize("why does it always rain on me"))

const str = 'why does it always rain on me';
const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);}
const str2 = arr.join(" ");
console.log(str2);
