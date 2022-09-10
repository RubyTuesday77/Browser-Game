Inspiration for Game:
Text Twist is a timed anagram solver game. In each round, the game displays six preselected letters in random order that can be rearranged to form at least one six-letter word. The player is given two minutes to spell out as many valid words as possible, one of which must be a six-letter word that uses all letters. It is an understatement to sayt that I love this game.

Controls/How To Play:
The goal is to form a four, five or six-letter word from the letters shown.

Instructions:
1. Click START GAME to display the letters. The letters will populate the six letter containers, the row of which I will refer to as letterball row. The row above it is referred to as the letterbox row.
2. Click on a LETTER to move it to first container in the letterbox row. Clicking on subsequent letters will move them the next empty container in the letterbox row.
3. Click ENTER to submit the word.
4. An ALERT will show confirming if your word is correct. (Note: The alert will return INVALID if the answer string is not at least four letters long)
6. Click ANSWERS to show all correct four, five and six-letter words.
7. These instructions can also be found by clicking 'HOW TO PLAY'.

Technologies Used:
VSCode - HTML, CSS, Javascript

Outstanding Bugs/Unfinished Functionality:
I changed the name of the game at the last minute, as it was too disimilar to the actual Text Twist, the most obvious being that there is no TWIST button functionality. The biggest bug at the time of presentation was the ANSWER button not triggering the reveal of the solutions. Along with that, additonal functionalities I hope and plan to implement in the future are:
1. Add click functionality to the containers in the letterbox row to return the letters to the letterball row. The goal would be to click on letters as needed to move them in and out of containers in both rows.
2. Reveal the word in the Solution box when entered. They start out all hidden.
3. Return the letters to the containers after submitting a word.
4. Submit subsequent words. Number 3 will be critical for this.
5. Add TWIST, LAST, and CLEAR buttons in the same row as the ENTER button.
    - TWIST will shuffle the letters.
    - CLEAR will clear the letterbox containers and return them to the letterball containers.
    - LAST will return the last word entered to the letterbox row.
6. Additional bells and whistles:
    - Add Sound.
    - Assign points to words and display a cumulative score.
    - Track the Rounds.
