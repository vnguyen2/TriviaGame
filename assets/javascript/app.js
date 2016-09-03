$(function() {
//variable object with questions, answers, and the correct answer reflects index position on answer array

var triviaQuestions = [{
	question: "In which country is the bay of pigs?",
	answers: ["Greece", "Cuba", "Vietnam", "United States of America"],
	correct: 1
}, {
	question: "Of the ten largest islands in the world, three are in which country?",
	answers: ["Canada", "Brazil", "Phillipines", "Indonesia"],
	correct: 0
}, {
	question: "What is the largest sea body in the world, excluding the oceans?",
	answers: ["Mediterranian Sea", "The Caribbean Sea", "The Sea of Okhotsk", "The South China Sea"],
	correct: 3
}, {
	question: "What is the largest country in the world without permanent rivers?",
	answers: ["Iraq", "Pakistan", "Saudi Arabia", "Iran"],
	correct: 2
}, {
	question: "The river Rhine flows through eight countries, which one of the following does it NOT flow through?",
	answers: ["Germany", "Luxembourg", "Poland", "Italy"],
	correct: 2
}, {
	question: "What is the official nickname of the state of Texas?",
	answers: ["The Friendship State", "The Chili State", "The Home of Tex-Mex State", "The Lone Star State"],
	correct: 3
}, {
	question: "What is the highest mountain in the world?",
	answers: ["Mt Everest", "K2", "Cho Oyu", "Broad Peak"],
	correct: 0
}, {
	question: "Which is the longest river in the world?,",
	answers: ["Mississippi River", "Nile River", "Amazon River", "Yangtze River"],
	correct: 1
}, {
	question: "What is the smallest nation in Africa?",
	answers: ["Cape Verde", "Rwanda", "Burundi", "The Gambia"],
	correct: 3
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
		intervalID = setInterval(this.timerCount, 1000);
	},	

	timerReset: function() {
		clearInterval(intervalID);
	},

	timerCount: function() {
		if(timeLeft == 0) {
			timer.timerReset();
		} else {
			timeLeft--
			$('#timer').html('<h2>' + timeLeft + '</h2>');
		}
	},
};

var question = {

	//display question and answers
	displayQuestion: function() {
		 q = triviaQuestions[questionIndex];
			$('#question').html(q.question);
		for (var i = 0; i < q.answers.length; i++) {
				$('.btnVal' + i).html(q.answers[i]); 
				console.log(q.answers[i])
			}
			timer.startTimer(2);
	},
	//check answers for right or wrong
	checkAnswers: function(answer) {
		timer.timerReset();
		var rightAnswer = q.correct;
		if (q.correct == answer) {
			$('#messages').html('You are CORRECT!!!!');
				correctAns++;
		} else {
			$('#messages').html('You will never catch me. The right answer is ' + q.answers[rightAnswer]);
				incorrectAns++;
		  }
	}
	//goes to next question after times runs out or if right or wrong asnwer picked

};

//click action for answers
	$('.btnVal0').click(function() {
		question.checkAnswers(0);
	}); 
	$('.btnVal1').click(function() {
		question.checkAnswers(1);
	}); 
	$('.btnVal2').click(function() {
		question.checkAnswers(2);
	});
	$('.btnVal2').click(function() {
		question.checkAnswers(3);
	});


question.displayQuestion();
});





