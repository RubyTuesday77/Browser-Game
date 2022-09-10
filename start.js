// Declare startButton variable:
const startButton = document.getElementById("start");

// Declare ballArray to represent divs in ball-container:
let ballArray = document.getElementsByClassName("letter-ball");

// Declare boxArray to represent divs in box-container:
let boxArray = document.getElementsByClassName("letter-box");

// Declare startButton variable:
let letterButtonArray = [];

// Create array of words to use in game
/* Each item contains the following in the array:
            [word, sixLetterAnswers, fiveLetterAnswers, fourLetterAnswers] */
let wordsForGame = [
    [ "ABOARD", ["ABOARD", "ABROAD"], ["BOARD", "BROAD"], ["BARD", "BOAR", "BRAD", "DRAB", "ROAD"] ],
    [ "BLAZES", ["BLAZES"], ["BALES", "BLAZE", "LAZES", "SABLE"], ["ABLE", "ALES", "BALE", "BASE", "LABS", "LAZE", "LEAS", "SALE", "SEAL", "SLAB", "ZEAL"] ],
    [ "COUSIN", ["COUSIN"],["COINS", "ICONS", "SCION", "SONIC"], ["COIN", "CONS", "ICON", "IONS", "ONUS"]],
    [ "DONKEY", ["DONKEY"], ["DOYEN", "YOKED"],["DENY", "DONE", "NODE", "YOKE"] ],
    [ "EXPERT", ["EXPERT"], ["EXERT", "PETER"], ["PEER", "PERT", "TREE"] ],
    [ "FLOWER", ["FLOWER", "FOWLER"], ["LOWER", "OWLER"], ["FLEW", "FLOE", "FLOW", "FORE", "FOWL", "LORE", "ROLE", "WOLF", "WORE"] ],
    [ "GLANCE", ["GLANCE"], ["ANGEL", "ANGLE", "CLANG", "CLEAN", "GLEAN", "LANCE"], ["ACNE", "CAGE", "CANE", "CLAN", "ELAN", "GALE", "GLEN", "LACE", "LANE", "LEAN"] ],
    [ "HAWKER", ["HAWKER"], ["WREAK"], ["HARE", "HARK", "HAWK", "HEAR", "RAKE", "WAKE", "WARE", "WEAK", "WEAR"] ],
    [ "IMPELS", ["IMPELS", "SIMPLE"], ["IMPEL", "LIMES", "LIMPS", "MILES", "PILES", "PLIES", "SLIME", "SMILE", "SPIEL"], ["ELMS", "IMPS", "ISLE", "LEIS", "LIES", "LIME", "LIMP", "LIPS", "LISP", "MILE", "PIES", "PILE", "SEMI", "SLIM", "SLIP"] ],
    [ "JUNGLE", ["JUNGLE"], ["LUNGE"], ["GLEN", "GLUE", "LUGE", "LUNG"] ],
    [ "KNIGHT", ["KNIGHT"], ["NIGHT", "THING", "THINK"], ["HINT", "KING", "KNIT", "NIGH", "THIN"] ],
    [ "LEAVES", ["LEAVES"], ["EASEL", "EAVES", "ELVES", "LAVES", "LEASE", "LEAVE", "SALVE", "SLAVE", "VALES"], ["ALES", "EASE", "EAVE", "EELS", "ELSE", "EVES", "LAVE", "LEAS", "SALE", "SAVE", "SEAL", "VALE", "VASE", "VEAL"] ],
    [ "MOUNTS", ["MOUNTS"], ["MOUNT", "SNOUT"], ["MOST", "MUST", "NUTS", "ONUS", "OUST", "OUTS", "SMUT", "SNOT", "STUN", "TONS", "TUNS", "UNTO"] ],
    [ "NEARLY", ["NEARLY"], ["EARLY", "LAYER", "LEARN", "RELAY", "YEARN"], ["EARL", "EARN", "ELAN", "LANE", "LEAN", "LYRE", "NARY", "NEAR", "REAL", "RELY", "YARN", "YEAR"] ],
    [ "OWNERS", ["OWNERS", "WORSEN"], ["OWNER", "SNORE", "SWORE", "SWORN", "WORSE", "WRENS"], ["EONS", "NEWS", "NOSE", "ONES", "ORES", "OWES", "OWNS", "ROES", "ROSE", "ROWS", "SEWN", "SNOW", "SORE", "WENS", "WOES", "WORE", "WORN", "WREN"] ]
]

// Grab a random item from above above array to use in the game
let gameWordArray = wordsForGame[Math.floor(Math.random() * wordsForGame.length)];

// Grab gameWord from array
let gameWord = gameWordArray[0];

// Split the word,  into an array whicg contains the six letters
let letterArray = gameWord.split("");

// Shuffle the letters using a function (at https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/)
function shuffleArray(array) {
    for(var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));  // generate random number
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array
};

// Assign a new variable to shuffled array
let letters = shuffleArray(letterArray);

// Assign variables to the last three items (which are arrays) returned in the gameWordArray:
let sixLetterAnswers = gameWordArray[1];
let fiveLetterAnswers = gameWordArray[2];
let fourLetterAnswers = gameWordArray[3];

// Assign a variable for each answer group above to add to word-box-container:
let fourLetterList = document.getElementById('four-letter-answers');
let fiveLetterList = document.getElementById('five-letter-answers');
let sixLetterList = document.getElementById('six-letter-answers');

// Function passes two paramenters to create a column for each group of answers
function addAnswerColumn(list, answers) {
    for(let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(answer));
        list.appendChild(li)
    }
}

// Add event listener to start button to start round
startButton.addEventListener("click", startRound);


function startRound(event) {
    for (let i = 0; i < letters.length; i++) {
        let letterButton = document.createElement("button");
        letterButton.innerHTML = letters[i];
        letterButton.classList.add("letter-button");
        letterButton.addEventListener("click", moveLetter);
        ballArray[i].append(letterButton);
        letterButtonArray.push(letterButton);
    }
    addAnswerColumn(fourLetterList, fourLetterAnswers);
    addAnswerColumn(fiveLetterList, fiveLetterAnswers);
    addAnswerColumn(sixLetterList, sixLetterAnswers);

    this.disabled = true;
}

function moveLetter(event) {
    const div1 = document.getElementById('letter-1');
    const div2 = document.getElementById('letter-2');
    const div3 = document.getElementById('letter-3');
    const div4 = document.getElementById('letter-4');
    const div5 = document.getElementById('letter-5');
    const div6 = document.getElementById('letter-6');
    if(div1.innerHTML.trim() == "") {
        div1.innerHTML = this.innerHTML;
        this.innerHTML = "";
    } else if(div2.innerHTML.trim() == "") {
        div2.innerHTML = this.innerHTML;
       this.innerHTML =  "";
    } else if(div3.innerHTML.trim() == "") {
        div3.innerHTML = this.innerHTML;
        this.innerHTML = "";
    }  else if(div4.innerHTML.trim() == "") {
        div4.innerHTML = this.innerHTML;
        this.innerHTML = "";
    }  else if(div5.innerHTML.trim() == "") {
        div5.innerHTML = this.innerHTML;
        this.innerHTML = "";
    }  else if(div6.innerHTML.trim() == "") {
        div6.innerHTML = this.innerHTML;
        this.innerHTML = "";
    }
}

// Shuffle letters
function shuffleLetters() {

}

// Clear board

function matchWord(wordResult) {
    if(wordResult.length === 4) {
        // Check if word matches any in <ol id="four-letter-answers"></ol>
        // Grab elements from ordered list containing the same word
        const answers = document.getElementById("four-letter-answers").getElementsByTagName("li");
        for(let i = 0; i< answers.length; i++) {
            if(answers[i].innerHTML == wordResult) {
                answers[i].style.visibilty = "visible";
                alert('You Are Right!!')
            }
        }
    } else if(wordResult.length == 5) {
        // check if word matches any in <ol id="five-letter-answers"></ol>
        // Grab elements from ordered list containing the same word
        const answers = document.getElementById("five-letter-answers").getElementsByTagName("li");
        for(let i = 0; i< answers.length; i++) {
            if(answers[i].innerHTML == wordResult) {
                answers[i].style.visibilty = "visible";
                alert('You Are Right!!')
            }
        }
    } else if(wordResult.length  == 6) { 
        // check if word matches any in <ol id="six-letter-answers"></ol>
        // Grab elements from ordered list containing the same word
        const answers = document.getElementById("six-letter-answers").getElementsByTagName("li");
        for(let i = 0; i< answers.length; i++) {
            if(answers[i].innerHTML == wordResult) {
                answers[i].style.visibilty = "visible";
                alert('You Are Right!!')
            }
        }
    } else {
        alert('WRONG')
    }
}

// Submit word as answer
let submitWord = document.getElementById("control-enter");
submitWord.addEventListener("click", function getAnswer() {
    let div1 = document.getElementsByClassName("letter-box")[0];
    let text1 = div1.textContent;
    let div2 = document.getElementsByClassName("letter-box")[1];
    let text2 = div2.textContent;
    let div3 = document.getElementsByClassName("letter-box")[2];
    let text3 = div3.textContent;
    let div4 = document.getElementsByClassName("letter-box")[3];
    let text4 = div4.textContent;
    let div5 = document.getElementsByClassName("letter-box")[4];
    let text5 = div5.textContent;
    let div6 = document.getElementsByClassName("letter-box")[5];
    let text6 = div6.textContent;
    let wordResult = [text1, text2, text3, text4, text5, text6].join("");
    matchWord(wordResult);
    // return wordResult;
    console.log(wordResult); // this returns 'NARY'
})