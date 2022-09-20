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
let heading = 'why does it always rain on me';
let words = heading.split(" ");
for (var i = 0; i < words.length; i++){words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);}
console.log(words.join(" "));
