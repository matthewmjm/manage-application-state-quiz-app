/*--- Step 1:  State Object ---*/
var state = {
    questionsArray: [
    //Question 1
        {
            questionText: 'Who said to who: You stuck-up, half-witted, scruffy-looking nerf herder!',
            questionChoices: ['Han to Obi-Wan-Kenobi', 'Luke to R2 unit with the bad motivator', 'Princess Leia to Han Solo', 'C3PO to Chewbacca'],
            questionCorrectChoice: 2,
            correctDetails: 'Princess Leia said this to Han Solo. A Nerf Herder is a redneck of the Star Wars Universe. He is skilled in many rustic activities and knowledgeable in the ways of farm work'
    },

    //Question 2
        {
            questionText: 'On which planet would you find Cloud City?',
            questionChoices: ['Bespin', 'Tatooine', 'Hoth', 'Dagobah'],
            questionCorrectChoice: 0,
            correctDetails: 'Bespin was a gas giant in the Bespin system. It was also a major source of tibanna gas, which was refined for production and transport in numerous mining operations including Cloud City and Tibannopolis.'
    },

    //Question 3
        {
            questionText: 'How is George Lucas said to have given R2-D2 his name?',
            questionChoices: ['From a film editing abbreviation - Reel 2, Dialogue 2', 'It was from his postcode', 'It was part of the number plate from his car of his grandfather ', 'Using a random number and letter generator'],
            questionCorrectChoice: 0,
            correctDetails: 'The name R2D2 originated from Walter Murch, the cutter of Lucas second movie American Graffiti.When cutting the movie together with Lucas,Walter Murch asked for R2,D2--meaning Reel 2, Dialog 2.'
    },

    //Question 4
        {
            questionText: 'In the earliest outlines for the sequel, what was Yoda originally called?',
            questionChoices: ['Mace', 'Buffy', 'Wally', 'Echo'],
            questionCorrectChoice: 1,
            correctDetails: 'In Lucas original draft for the film, the creature we lovingly know as Yoda was in fact named Buffy. Lucas describes the character as Buffy very old – three or four thousand years. Kiber crystal in sword? Buffy shows Luke? Buffy the guardian. Feel not think.'
    },

    //Question 5
        {
            questionText: 'Which character was originally written as a “green-skinned guy with no nose and large gills"?',
            questionChoices: ['Chewbacca', 'Gredo', 'Yoda', 'Han Solo'],
            questionCorrectChoice: 3,
            correctDetails: 'Han Solo was originally supposed to be a green-skinned alien with gills and no nose.'
    },

    //Question 6
        {
            questionText: 'How much does an average person drive in a year?',
            questionChoices: ['About', 'About', 'About', 'answer'],
            questionCorrectChoice: 0,
            correctDetails: 'About 13000 miles.'
    },

    //Question 7
        {
            questionText: 'What gives a lightsaber its color?',
            questionChoices: ['Crystals', 'The personality of the owner', 'The Force', 'The mood of the owner'],
            questionCorrectChoice: 0,
            correctDetails: 'As a rite of pass, young Jedi Knights are required to search for lightsaber crystal to build their first lightsabers. These crystals and how they tune with the Jedi, give the lightsaber its color.'
    },

    //Question 8
        {
            questionText: 'Which of the Star Wars films is longest?',
            questionChoices: ['Episode IV: A New Hope', 'Episode III: Revenge of the Sith', 'Episode II: Attack of the Clones', 'Episode VI: Return of the Jedi'],
            questionCorrectChoice: 3,
            correctDetails: 'Attack of the Clones is the fifth film to be released in the Star Wars saga and the second in terms of the seriess internal chronology. At 142 minutes, it is the longest film in the series.'
    },

    //Question 9
        {
            questionText: 'In the 1978 Star War Holiday Special. Why are Chewbacca and Han Solo trying to get home to the family of Chewbacca?',
            questionChoices: ['Christmas Day', 'Life Day', 'Thanksgiving', 'Wookie Day'],
            questionCorrectChoice: 1,
            correctDetails: 'The Star Wars Holiday Special consisted of a frame story in which Han and Chewbacca must prevent Darth Vader from spoiling Life Day, and get home to be with the family of Chewbacca. It aired only once.'
    },

    //Question 10
        {
            questionText: 'In The Empire Strikes Back, which creatures attach themselves to the Millennium Falcon?',
            questionChoices: ['Ewoks', 'Mynocks', 'Tusken raiders', 'Banthas'],
            questionCorrectChoice: 1,
            correctDetails: 'A mynock was a silicon-based parasitical organism found across the galaxy that was often seen leeching power from spacecraft. In addition, they could absorb matter from the hull of a ship hull causing it to breach, and if not caught in time, cause catastrophic failure.'
    }
],
    score: 0,
    currentQuestionIndex: 0,
    route: 'start',
    lastAnswerCorrect: false
};


/*--- Step 2:  State Modification functions ---*/
function setRoute(state, route) {
    state.route = route;
};

function resetGame(state, route) {
    state.score = 0;
    state.currentQuestionIndex = 0;
    setRoute(state, 'start');
};

function answerQuestion(state, answer) {
    var currentQuestion = state.questionsArray[state.currentQuestionIndex];
    state.lastAnswerCorrect = currentQuestion.questionCorrectChoice === answer;
    if (state.lastAnswerCorrect) {
        state.score++;
    }
    //    selectFeedback(state);
    setRoute(state, 'answer-feedback');
};

//function selectFeedback(state) {
//    state.feedbackRandom = Math.random();
//};

function advance(state) {
    state.currentQuestionIndex++;
    if (state.currentQuestionIndex === state.questionsArray.length) {
        setRoute(state, 'final-feedback');
    } else {
        setRoute(state, 'question');
    }
};


/*--- Step 3:  Using functions ---*/
function renderApp(state, elements) {
    Object.keys(elements).forEach(function (route) {
        elements[route].hide();
    });
    elements[state.route].show();

}




$(document).ready(function () {
    /*on click */
});
