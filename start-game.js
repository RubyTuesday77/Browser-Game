// Click Start to start game - signals startRound function
let startButton = document.getElementById("start");
let letterButtonArray = [];
startButton.addEventListener("click", function startRound() {

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

    // Verify word split into letter array via console log
    // console.log(wordLetterArray)  // Returns ["A", "B", "O", "A", "R", "D"]

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
    let letterShuffle = shuffleArray(letterArray);

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

    // Call function for each answer group parameters
    addAnswerColumn(fourLetterList, fourLetterAnswers);
    addAnswerColumn(fiveLetterList, fiveLetterAnswers);
    addAnswerColumn(sixLetterList, sixLetterAnswers);

    /* Verify shuffled letters array and solutions via console log
    console.log(letterShuffle);
    console.log(sixLetterAnswers);
    console.log(fiveLetterAnswers);
    console.log(fourLetterAnswers);
    */

    // Insert button into each letter-ball div and assign a letter from wordLettersShuffled array
    let letterBalls = document.getElementsByClassName("letter-ball");
        for(let i = 0; i < letterBalls.length; i++) {
            let letterButton = document.createElement("button");
            letterButton.innerHTML = letterShuffle[i];  // Grab letters from shuffled letter above
            letterButton.setAttribute("class", "letter-button");
            letterButton.addEventListener("click", moveLetter);
            letterBalls[i].appendChild(letterButton);
            letterButtonArray.push(letterButton);
        }
        return letterButtonArray

}, {once : true})

console.log(letterButtonArray)

// Function to move letter-button from letter-ball div to letter-box div
function moveLetter(letterButton) {
    alert(letterButton.innerHTML)
}
