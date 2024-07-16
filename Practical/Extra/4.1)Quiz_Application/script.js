const quiz = [
    {
        question: "Who wrote the novel 1984 ?",
        ans1text: "George Orwell",
        ans2text: "J.K. Rowling",
        ans3text: "F. Scott Fitzgerald",
        ans4text: "Ernest Hemingway",
        answer: "George Orwell",
    },
    {
        question: "What is the capital city of Australia ?",
        ans1text: "Canberra",
        ans2text: "Melbourne",
        ans3text: "Brisbane",
        ans4text: "Sydney",
        answer: "Canberra",
    },
    {
        question: "What is the chemical symbol for Gold ?",
        ans1text: "Go",
        ans2text: "Gd",
        ans3text: "Au",
        ans4text: "Ag",
        answer: "Au",
    },
    {
        question: "In what year was the first iPhone released ?",
        ans1text: "2005",
        ans2text: "2006",
        ans3text: "2007",
        ans4text: "2008",
        answer: "2007",
    },
    {
        question: "What is the tallest mountain in the world ?",
        ans1text: "K2",
        ans2text: "Mount Everest",
        ans3text: "Mount Kilimanjaro",
        ans4text: "Denali",
        answer: "Mount Everest",
    },
    {
        question: "Who painted the Mona Lisa ?",
        ans1text: "Leonardo da Vinci",
        ans2text: "Michelangelo",
        ans3text: "Raphael",
        ans4text: "Caravaggio",
        answer: "Leonardo da Vinci",
    },
    {
        question: "Which planet is known as the Red Planet ?",
        ans1text: "Jupiter",
        ans2text: "Saturn",
        ans3text: "Mars",
        ans4text: "Venus",
        answer: "Mars",
    },
    {
        question: "Who discovered electricity ?",
        ans1text: "Isaac Newton",
        ans2text: "Nikola Tesla",
        ans3text: "Michael Faraday",
        ans4text: "Benjamin Franklin",
        answer: "Benjamin Franklin",
    },
    {
        question: "What is the world's largest ocean ?",
        ans1text: "Atlantic Ocean",
        ans2text: "Indian Ocean",
        ans3text: "Pacific Ocean",
        ans4text: "Southern Ocean",
        answer: "Pacific Ocean",
    },
    {
        question: "Who came up with the theory of relativity ?",
        ans1text: "Edgar Allan Poe",
        ans2text: "Albert Einstein",
        ans3text: "Galileo Galilei",
        ans4text: "Louis Pasteur",
        answer: "Albert Einstein",
    },
];
const quizWrapper = document.querySelector('.quiz-wrapper');
const quizContainer = document.querySelector('.quiz-container');
const quizcomplete = document.getElementById('quiz-complete');
const quizScoreDisplay = document.getElementById('quiz-score');
const quizTotalDisplay = document.getElementById('quiz-total');
const questionElement = document.getElementById("quiz-question");
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quiz[currentQuestion];
    questionElement.textContent = `Q-${currentQuestion + 1}. ${currentQuizData.question}`;
    option_a.textContent = currentQuizData.ans1text;
    option_b.textContent = currentQuizData.ans2text;
    option_c.textContent = currentQuizData.ans3text;
    option_d.textContent = currentQuizData.ans4text;
}

loadQuestion();

function toggleButton() {
    if (currentQuestion === quiz.length - 1) {
        submit.textContent = "Submit";
        submit.classList.add("submit-btn");
        submit.classList.remove("next-btn");
    } else {
        submit.textContent = "Next";
        submit.classList.add("next-btn");
        submit.classList.remove("submit-btn");
    }
}

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    if (checkedAns === null) {
        alert("Please select an answer");
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quiz.length) {
            loadQuestion();
            checkedAns.checked = false;
            toggleButton();
        } else {
            quizContainer.style.display = 'none';
            quizcomplete.style.display = 'block';

            quizScoreDisplay.textContent = score;
            quizTotalDisplay.textContent = quiz.length;
        }
    }
});

toggleButton();
