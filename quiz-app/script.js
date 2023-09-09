const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      {text: "Shark", correct: false},
      {text: "Blue Whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false}
    ]
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      {text: "Vatican City", correct: true},
      {text: "Bhutan", correct: false},
      {text: "Nepal", correct: false},
      {text: "Shri Lanka", correct: false}
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      {text: "Gobi", correct: false},
      {text: "Sahara", correct: false},
      {text: "Kalahari", correct: false},
      {text: "Antarctica", correct: true}
    ]
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      {text: "Asia", correct: false},
      {text: "Australlia", correct: true},
      {text: "Arctic", correct: false},
      {text: "Africa", correct: false}
    ]
  }
];

const questionElement = document.getElementById('quiz-question');
const answerButtons = document.querySelector('.answer-buttons');
const nextButton = document.querySelector('.next-button');

let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  resetQuiz();
  showQuestions();
}

function showQuestions() {
  let currentquestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentquestion.question;

  currentquestion.answers.forEach((answer) => {
    let button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
};

function selectAnswer(e) {
 let selectedButton = e.target;
 if (selectedButton.dataset.correct === "true") {
  selectedButton.classList.add("correct");
  score++;
 } else {
  selectedButton.classList.add("incorrect");
 }

 document.querySelectorAll('.btn').forEach((button) => {
  if (button.dataset.correct === "true") {
    button.classList.add('correct');
  }
  button.disabled = true;
  nextButton.style.display = "block";
 });
};

function handleNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    resetQuiz();
    showQuestions();
  } else {
    showScore();
  }
}

function showScore() {
  resetQuiz();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.style.display = 'block';
  nextButton.innerHTML = 'Play Again';
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextQuestion();
  } else {
    startQuiz();
  }
});

function resetQuiz() {
 nextButton.innerHTML = 'Next';
 nextButton.style.display = 'none';
 while(answerButtons.firstChild) {
  answerButtons.removeChild(answerButtons.firstChild);
 }
}

startQuiz();