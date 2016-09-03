$(function() {
//variable object with questions, answers, and the correct answer reflects index position on answer array

var triviaQuestions = [{
	question: "In which country is the bay of pigs?",
	answers: ["Greece", "Cuba", "Vietnam", "USA"],
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
	answers: ["The Friendship State", "The Chili State", "The Tex-Mex State", "The Lone Star State"],
	correct: 3
}, {
	question: "What is the highest mountain in the world?",
	answers: ["Mt Everest", "K2", "Cho Oyu", "Broad Peak"],
	correct: 0
}, {
	question: "Which is the longest river in the world?",
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
	outOfTime = 0,
    gameOver = false,
    intervalID = null;


var timer = {
//functions for timer and condition if timer runs out
	startTimer: function(start) {
		timeLeft = start;
		console.log(this);
		$('#timer').html('<h2>Time Left: ' + start + '</h2>');
		intervalID = setInterval(this.timerCount, 1000);
	},	

	timerReset: function() {
		clearInterval(intervalID);
	},

	timerCount: function() {
		if(timeLeft == 0) {
			timer.timerReset();
			outOfTime++;
			$('#messages').html('Too slow. I suppose you can try waiting for me to find you.');
			question.nextQuestion();
		} else {
			timeLeft--
			$('#timer').html('<h2>Time Left: '+ timeLeft + '</h2>');
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
			timer.startTimer(4);
	},
	//check answers for right or wrong
	checkAnswers: function(answer) {
		timer.timerReset();
		var rightAnswer = q.correct;
		if (q.correct == answer) {
			$('#messages').html('You are CORRECT!!!!');
				correctAns++;
				this.nextQuestion();
		} else {
			$('#messages').html('You will never catch me. <p> The right answer is ' + q.answers[rightAnswer] + '</p>');
				incorrectAns++;
				this.nextQuestion();
		  }
	},
	//goes to next question after times runs out or if right or wrong asnwer picked
	nextQuestion: function() {
		questionIndex++;
		if (questionIndex == triviaQuestions.length) {
			$('#messages').html('Lets see how you did. <p> You got ' + correctAns + ' answers right and ' + incorrectAns + ' wrong </p>');
			if (outOfTime > 0) {
				$('#messages').html('<p> You were sleeping for ' + outOfTime + ' of the questions. </p>')
			}
		} else {
			this.displayQuestion();
		}

	},
};


function resetDiv() {
	$('#questionHolder').empty();
	$('#timer').empty();
}

//click action for answers
	$('.btnVal0').on('click', function() {
		question.checkAnswers(0);
	}); 
	$('.btnVal1').on('click', function() {
		question.checkAnswers(1);
	}); 
	$('.btnVal2').on('click', function() {
		question.checkAnswers(2);
	});
	$('.btnVal3').on('click', function() {
		question.checkAnswers(3);
	});

	$('.startGame').click(function() {
		$('.button').css('visibility', 'visible');
		$(this).css('visibility', 'hidden');
		question.displayQuestion();

	});

});





