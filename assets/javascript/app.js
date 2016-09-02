//variable object with questions, answers, and the index of correct answer

var triviaQuestions = [{
	question: "In which country is the bay of pigs?",
	answers: ["Greece", "Cuba", "Vietnam", "United States of America"],
	correct: 2
}, {
	question: "Of the ten largest islands in the world, three are in which country?",
	answers: ["Canada", "Brazil", "Phillipines", "Indonesia"],
	correct: 1
}, {
	question: "What is the largest sea body in the world, excluding the oceans?",
	answers: ["Mediterranian Sea", "The Caribbean Sea", "The Sea of Okhotsk", "The South China Sea"],
	correct: 4
}, {
	question: "What is the largest country in the world without permanent rivers?",
	answers: ["Iraq", "Pakistan", "Saudi Arabia", "Iran"],
	correct: 3
}, {
	question: "The river Rhine flows through eight countries, which one of the following does it NOT flow through?",
	answers: ["Germany", "Luxembourg", "Poland", "Italy"],
	correct: 3
}, {
	question: "What is the official nickname of the state of Texas?",
	answers: ["The Friendship State", "The Chili State", "The Home of Tex-Mex State", "The Lone Star State"],
	correct: 3
}, {
	question: "What is the highest mountain in the world?",
	answers: ["Mt Everest", "K2", "Cho Oyu", "Broad Peak"],
	correct: 1
}, {
	question: "Which is the longest river in the world?,",
	answers: ["Mississippi River", "Nile River", "Amazon River", "Yangtze River"],
	correct: 2
}, {
	question: "What is the smallest nation in Africa?",
	answers: ["Cape Verde", "Rwanda", "Burundi", "The Gambia"],
	correct: 4
}];

//variables for recording values during game, timer, and game ending 
var questionIndex = 0,
    correctAns = 0,
	incorrectAns = 0,
    gameOver = false,
    intervalID = null;


var timer = {
//functions for timer and condition if timer runs out
	startTimer: function(start) {
		timeLeft = start;
		$('#timer').html('<h2>' + timeLeft + '</h2>');
		intervalID = setInterval(timerCount, 1000);
	},	

	timerCount: function() {
		if(timeLeft == 0) {
			timerReset();
		} else {
			timeLeft--
			$('#timer').html('<h2>' + timeLeft + '</h2>');
		}
	},
	//stop timer
	timerReset: function() {
		clearInterval(intervalID);
	},
};

var question = {
	displayQuestion: function() {
		q = triviaQuestions[questionIndex]
		$('#question').html(q.question);
		for (var i = 0; i < q.answers.length; i++) {
				$('.buttonValue' + i).html(q.answers[i]); 
				console.log(q.answers[i])
			};
	},
};


question.displayQuestion();






