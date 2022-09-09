// Declare startButton variable:
const startButton = document.getElementById("start");

// Declare ballArray to represent divs in ball-container:
let ballsArray = document.getElementsByClassName("letter-ball");

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

//IMPORTANT!!!!
// Assign a new variable to shuffled array
let letters = shuffleArray(letterArray);
console.log(letters)

// Add event listener to start button to start round
startButton.addEventListener("click", startRound);


function startRound(event) {
    for (let i = 0; i < letters.length; i++) {
        let letterButton = document.createElement("button");
        letterButton.innerHTML = letters[i];
        letterButton.classList.add("letter-button");
        letterButton.addEventListener("click", moveLetter);
        // letterButton.addEventListener("click", moveButton);
        ballsArray[i].append(letterButton);
        letterButtonArray.push(letterButton);
    }
    this.disabled = true;
}

function moveLetter(event) {
    console.log(event.currentTarget.innerHTML);
    /* Alternative 1 *///  console.log(event.target.innerHTML);
    /* Alternative 2 */// console.log(this.innerHTML);
}

/*function moveButton(event) {
    if (this.parentElement.matches('.letter-ball')) {   
    ballsArray.append(this);
    } else {
    boxArray.append(this);
    }
  }
*/