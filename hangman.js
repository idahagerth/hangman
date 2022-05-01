const words = ["Programmering","Stockholm","Studenter","Javascript","Afterwork"];

function getRandomWord(){
const randomWord = Math.floor(Math.random() * words.length);
console.log("The word lenght is "+words.length);
console.log(randomWord);
return words[randomWord];
}

let randomGame = getRandomWord();

if(randomGame === "Programmering") {
    console.log("The word is Programmering");
    playProgrammering();
    false;
} else if(randomGame === "Stockholm") {
    console.log("The word is Stockholm");
    playStockholm();
    false;
} else if(randomGame === "Studenter") {
    console.log("The word is Studenter");
    playStudenter();
    false;
} else if(randomGame === "Javascript") {
    console.log("The word is Javascript");
    playJavascript();
    false;
} else if(randomGame === "Afterwork") {
    console.log("The word is Afterwork");
    playAfterwork();
    false;
}

function playProgrammering(){
    const c1 = "p";
    const c2 = "r";
    const c3 = "o";
    const c4 = "g";
    const c5 = "a";
    const c6 = "m";
    const c7 = "e";
    const c8 = "i";
    const c9 = "n";

    let lives = 4;
    let wordGuessProgrammering = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];
    let wordGuessProgrammeringComplete = ['P', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'e', 'r', 'i', 'n', 'g'];

    while(true){
        let liveScore = lives + 1;
        let guess = prompt(wordGuessProgrammering.join(" ") + "\nlives left:" + liveScore);

        console.log(wordGuessProgrammeringComplete.join(""));

        if(c1 === guess.toLowerCase()){
            wordGuessProgrammering.splice(0, 1, 'P');
        } else if(guess.toLowerCase() === c2){
            wordGuessProgrammering.splice(1, 1, 'r');
            wordGuessProgrammering.splice(4, 1, 'r');
            wordGuessProgrammering.splice(9, 1, 'r');
        } else if(guess.toLowerCase() === c3){
            wordGuessProgrammering.splice(2, 1, 'o');
        } else if(guess.toLowerCase() === c4){
            wordGuessProgrammering.splice(3, 1, 'g');
            wordGuessProgrammering.splice(12, 1, 'g');
        } else if(guess.toLowerCase() === c5){
            wordGuessProgrammering.splice(5, 1, 'a');
        } else if(guess.toLowerCase() === c6){
            wordGuessProgrammering.splice(6, 1, 'm');
            wordGuessProgrammering.splice(7, 1, 'm');
        } else if(guess.toLowerCase() === c7){
            wordGuessProgrammering.splice(8, 1, 'e');
        } else if(guess.toLowerCase() === c8){
            wordGuessProgrammering.splice(10, 1, 'i');
        } else if(guess.toLowerCase() === c9){
            wordGuessProgrammering.splice(11, 1, 'n');
        } else if(lives===0){
            alert("You have lost! The correct word was Programmering");
            break;
        } else if(wordGuessProgrammeringComplete.join("") === wordGuessProgrammering.join("")){
            alert("You have won, congratulations!");
            break;
        } else{
            lives--;
        }
    }
}

function playStockholm(){
    const c1 = "s";
    const c2 = "t";
    const c3 = "o";
    const c4 = "c";
    const c5 = "k";
    const c6 = "h";
    const c7 = "l";
    const c8 = "m";

    let lives = 4;
    let wordGuessProgrammering = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
    let wordGuessProgrammeringComplete = ['S', 't', 'o', 'c', 'k', 'h', 'o', 'l', 'm'];

    while(true){
        let liveScore = lives + 1;
        let guess = prompt(wordGuessProgrammering.join(" ") + "\nlives left:" + liveScore);

        console.log(wordGuessProgrammeringComplete.join(""));

        if(c1 === guess.toLowerCase()){
            wordGuessProgrammering.splice(0, 1, 'S');
        } else if(guess.toLowerCase() === c2){
            wordGuessProgrammering.splice(1, 1, 't');
        } else if(guess.toLowerCase() === c3){
            wordGuessProgrammering.splice(2, 1, 'o');
            wordGuessProgrammering.splice(6, 1, 'o');
        } else if(guess.toLowerCase() === c4){
            wordGuessProgrammering.splice(3, 1, 'c');
        } else if(guess.toLowerCase() === c5){
            wordGuessProgrammering.splice(4, 1, 'k');
        } else if(guess.toLowerCase() === c6){
            wordGuessProgrammering.splice(5, 1, 'h');
        } else if(guess.toLowerCase() === c7){
            wordGuessProgrammering.splice(7, 1, 'l');
        } else if(guess.toLowerCase() === c8){
            wordGuessProgrammering.splice(8, 1, 'm');
        }else if(lives===0){
            alert("You have lost! The correct word was Stockholm");
            break;
        } else if(wordGuessProgrammeringComplete.join("") === wordGuessProgrammering.join("")){
            alert("You have won, congratulations!");
            break;
        } else{
            lives--;
        }
    }
}

function playStudenter(){
    const c1 = "s";
    const c2 = "t";
    const c3 = "u";
    const c4 = "d";
    const c5 = "e";
    const c6 = "n";
    const c7 = "r";

    let lives = 4;
    let wordGuessProgrammering = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
    let wordGuessProgrammeringComplete = ['S', 't', 'u', 'd', 'e', 'n', 't', 'e', 'r'];

    while(true){
        let liveScore = lives + 1;
        let guess = prompt(wordGuessProgrammering.join(" ") + "\nlives left:" + liveScore);

        console.log(wordGuessProgrammeringComplete.join(""));

        if(c1 === guess.toLowerCase()){
            wordGuessProgrammering.splice(0, 1, 'S');
        } else if(guess.toLowerCase() === c2){
            wordGuessProgrammering.splice(1, 1, 't');
            wordGuessProgrammering.splice(6, 1, 't');
        } else if(guess.toLowerCase() === c3){
            wordGuessProgrammering.splice(2, 1, 'u');
        } else if(guess.toLowerCase() === c4){
            wordGuessProgrammering.splice(3, 1, 'd');
        } else if(guess.toLowerCase() === c5){
            wordGuessProgrammering.splice(4, 1, 'e');
            wordGuessProgrammering.splice(7, 1, 'e');
        } else if(guess.toLowerCase() === c6){
            wordGuessProgrammering.splice(5, 1, 'n');
        } else if(guess.toLowerCase() === c7){
            wordGuessProgrammering.splice(8, 1, 'r');
        }else if(lives===0){
            alert("You have lost! The correct word was Studenter");
            break;
        } else if(wordGuessProgrammeringComplete.join("") === wordGuessProgrammering.join("")){
            alert("You have won, congratulations!");
            break;
        } else{
            lives--;
        }
    }
}

function playJavascript(){
    const c1 = "j";
    const c2 = "a";
    const c3 = "v";
    const c4 = "s";
    const c5 = "c";
    const c6 = "r";
    const c7 = "i";
    const c8 = "p";
    const c9 = "t";

    let lives = 4;
    let wordGuessProgrammering = ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'];
    let wordGuessProgrammeringComplete = ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];

    while(true){
        let liveScore = lives + 1;
        let guess = prompt(wordGuessProgrammering.join(" ") + "\nlives left:" + liveScore);

        console.log(wordGuessProgrammeringComplete.join(""));

        if(c1 === guess.toLowerCase()){
            wordGuessProgrammering.splice(0, 1, 'J');
        } else if(guess.toLowerCase() === c2){
            wordGuessProgrammering.splice(1, 1, 'a');
            wordGuessProgrammering.splice(3, 1, 'a');
        } else if(guess.toLowerCase() === c3){
            wordGuessProgrammering.splice(2, 1, 'v');
        } else if(guess.toLowerCase() === c4){
            wordGuessProgrammering.splice(4, 1, 's');
        } else if(guess.toLowerCase() === c5){
            wordGuessProgrammering.splice(5, 1, 'c');
        } else if(guess.toLowerCase() === c6){
            wordGuessProgrammering.splice(6, 1, 'r');
        } else if(guess.toLowerCase() === c7){
            wordGuessProgrammering.splice(7, 1, 'i');
        } else if(guess.toLowerCase() === c8){
            wordGuessProgrammering.splice(8, 1, 'p');
        } else if(guess.toLowerCase() === c9){
            wordGuessProgrammering.splice(9, 1, 't');
        } else if(lives===0){
            alert("You have lost! The correct word was Javascript");
            break;
        } else if(wordGuessProgrammeringComplete.join("") === wordGuessProgrammering.join("")){
            alert("You have won, congratulations!");
            break;
        } else{
            lives--;
        }
    }
}

function playAfterwork(){
    const c1 = "a";
    const c2 = "f";
    const c3 = "t";
    const c4 = "e";
    const c5 = "r";
    const c6 = "w";
    const c7 = "o";
    const c8 = "k";

    let lives = 4;
    let wordGuessProgrammering = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
    let wordGuessProgrammeringComplete = ['A', 'f', 't', 'e', 'r', 'w', 'o', 'r', 'k'];

    while(true){
        let liveScore = lives + 1;
        let guess = prompt(wordGuessProgrammering.join(" ") + "\nlives left:" + liveScore);

        console.log(wordGuessProgrammeringComplete.join(""));

        if(c1 === guess.toLowerCase()){
            wordGuessProgrammering.splice(0, 1, 'A');
        } else if(guess.toLowerCase() === c2){
            wordGuessProgrammering.splice(1, 1, 'f');
        } else if(guess.toLowerCase() === c3){
            wordGuessProgrammering.splice(2, 1, 't');
        } else if(guess.toLowerCase() === c4){
            wordGuessProgrammering.splice(3, 1, 'e');
        } else if(guess.toLowerCase() === c5){
            wordGuessProgrammering.splice(4, 1, 'r');
            wordGuessProgrammering.splice(7, 1, 'r');
        } else if(guess.toLowerCase() === c6){
            wordGuessProgrammering.splice(5, 1, 'w');
        } else if(guess.toLowerCase() === c7){
            wordGuessProgrammering.splice(6, 1, 'o');
        } else if(guess.toLowerCase() === c8){
            wordGuessProgrammering.splice(8, 1, 'k');
        }else if(lives===0){
            alert("You have lost! The correct word was Afterwork");
            break;
        } else if(wordGuessProgrammeringComplete.join("") === wordGuessProgrammering.join("")){
            alert("You have won, congratulations!");
            break;
        } else{
            lives--;
        }
    }
}