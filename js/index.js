// Iteration 1: Names and Input
console.log("\nIteration 1: Names and Input");
console.log("----------------------------");

// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = "Waxillium";

//1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = "Jackie";

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log("\nIteration 2: Conditionals");
console.log("----------------------------");

// 2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
console.log("\nIteration 3: Loops");
console.log("----------------------------");

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals.
let nameInUpperCase = "";

for (let i = 0; i < hacker1.length; i++) {
  nameInUpperCase += `${hacker1[i].toUpperCase()} `;
}

console.log(nameInUpperCase);

// 3.2 Print all the characters of the navigator's name, in reverse order.
let nameInReverse = "";

for (let i = hacker2.length - 1; i > -1; i--) {
  nameInReverse += hacker2[i];
}

console.log(nameInReverse);

// 3.3 Depending on the lexicographic order of the strings, print:

// I don't get it

// Bonus Time!
// Bonus 1:
console.log("\nBonus 1");
console.log("----------------------------");

const chiquitoText = "Lorem fistrum te va a hasé pupitaa no te digo trigo por no llamarte Rodrigor qué dise usteer pecador a peich va usté muy cargadoo. Quietooor ese que llega pecador ese pedazo de al ataquerl. Pecador qué dise usteer llevame al sircoo sexuarl. Ese hombree tiene musho peligro de la pradera al ataquerl qué dise usteer papaar papaar diodenoo pupita condemor. De la pradera caballo blanco caballo negroorl jarl amatomaa diodeno pecador quietooor. Al ataquerl a wan hasta luego Lucas benemeritaar. Jarl se calle ustée qué dise usteer pecador al ataquerl me cago en tus muelas te va a hasé pupitaa pupita papaar papaar. La caidita a peich llevame al sircoo no puedor no te digo trigo por no llamarte Rodrigor. Diodeno a peich apetecan ese pedazo de de la pradera jarl. No te digo trigo por no llamarte Rodrigor la caidita a wan amatomaa por la gloria de mi madre te voy a borrar el cerito diodenoo torpedo apetecan apetecan. Diodenoo tiene musho peligro hasta luego Lucas a wan.";
let wordCount = 1;
let rlCount = 0;

for (let i = 0; i < chiquitoText.length; i++) {
    if(chiquitoText[i] == " ") {
        wordCount++;
    }
    
    if(chiquitoText.charAt(i) === "r" && chiquitoText.charAt(i+1) === "l") {
        rlCount++
    }
}

console.log(`There are ${wordCount} words in chiquitoText`)
console.log(`There are ${rlCount} rl's in chiquitoText`)

// Bonus 1:
console.log("\nBonus 2");
console.log("----------------------------");

const phraseToCheck = "A man, a plan, a canal, Panama"
let phraseToCheckInReverse = ""

for (let i = phraseToCheck.length - 1; i > -1; i--) {
    phraseToCheckInReverse += phraseToCheck[i];
}

if (phraseToCheckInReverse.toLowerCase().replace(/\s|,+/g, "") === phraseToCheck.toLowerCase().replace(/\s|,+/g, "")) {
    console.log("Yup! It's a palindrome!")        
} else {
    console.log("Nah, it isn't a palindrome...")
}
