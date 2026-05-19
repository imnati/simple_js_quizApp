const questions = [
  "What is the capital of Ethiopia?",
  "What is the currency of Ethiopia?",
  "Who was Emperor Menelik II's wife?",
];
const options = [
  ["Addis Ababa", "Gondar", "Mekelle", "Bahir Dar"],
  ["Pounds", "US Dollar", "Euro", "Ethiopian Birr"],
  [
    "Empress Taytu Betul",
    "Empress Zewditu",
    "Empress Menen Asfaw",
    "Empress Wolete Giyorgis",
  ],
];
const correctAnswers = ["Addis Ababa", "Ethiopian Birr", "Empress Taytu Betul"];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById("question").innerHTML =
      questions[currentQuestionIndex];
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i + 1}`);
      btn.innerHTML = options[currentQuestionIndex][i];
      btn.value = options[currentQuestionIndex][i];
    }
  } else {
    document.getElementById("result").innerHTML =
      `You scored ${score} out of ${questions.length}!`;
    document.getElementById("question").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
  }
}

function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}
displayQuestion();
