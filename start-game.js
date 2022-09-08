// Click Start to start game - signals startRound function
let startButton = document.getElementById("start");
startButton.addEventListener("click", function startRound() {

    // #1: Pull random 6-lectter word from the dictionary (use fetch)
    let randomWord = "ABOARD";

    // #2: Split the word into an array whicg contains the six letters
    let wordLettersArray = randomWord.split("")

    // Verify via console log
    // console.log(wordLettersArray)  // Returns ["A", "B", "O", "A", "R", "D"]

    // Shuffle the letters using a function (at https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/)
    function shuffleArray(array) {
        for(var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));  // generate random number
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        }
        return array
    }

    // Assign a new variable to shuffled array
    let wordLettersShuffled = shuffleArray(wordLettersArray);

    // Verify shuffled letters via console log
    // console.log(wordLettersShuffled)  // Returned ['A', 'R', 'D', 'A', 'O', 'B']

    // Insert button into each letter-ball div and assign a letter from wordLettersShuffled array
    let letterBalls = document.getElementsByClassName("letter-ball");
    for(let i = 0; i < letterBalls.length; i++) {
        let letterButton = document.createElement("button");
        letterButton.innerHTML = wordLettersShuffled[i];
        letterButton.setAttribute("class", "letter-button");
        letterBalls[i].appendChild(letterButton);
        letterButton.addEventListener("click", function() {
            alert(letterButton.innerHTML);
            let letterBoxes = document.getElementsByClassName("letter-box");
            for(let i = 0; i < letterBoxes.length; i++) {
                if(letterBoxes[i] == null) {
                    
                }
           // } function moveLetter(newParent, oldParent) {
            //let oldParent = letterBalls[i];
            //function moveLetter(newParent, oldParent) {
               // newParent.appendChild(letterButton);
               // oldParent.removeChild(letterButton);
            //}
            }  
        })
    }
}, {once : true})


// Function to move letter-button to letter-box div
    // let clickedButton = 
    // let letterBoxes = document.getElementsByClassName('letter-box');
    //if(letterBox === null) {

 