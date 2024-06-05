var letter = prompt("Enter a letter:");

letter = letter.toLocaleLowerCase();

if(letter=="a" || letter == "e" || letter == "o" || letter == "u" )
    console.log("vowel");

else 
    console.log("consonant");