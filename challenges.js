//Create an if statement that tells if a phone number is in international format (starts with a plus character)
let phoneNumber = "04567838999";
console.log(phoneNumber.startsWith("+"))

//Create a function that takes a name and converts it to capitalized form (first letter uppercase, rest lowercase)
let Name = "thisIsMyUnitedStatesOfWhatever";
let lowerCase = Name.toLowerCase();
console.log(lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1))

//Create a function that takes a newspaper heading and converts it to capitalized form (first letter of each word in uppercase)
let heading = 'why does it always rain on me';
let words = heading.split(" ");
for (var i = 0; i < words.length; i++){words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);}
console.log(words.join(" "))

//Create a function that takes a text message and returns it reversed (from end to start)
function reverseString(str) {return str.split("").reverse().join("");}
console.log(reverseString("And this is my United States of Whatever!"));
