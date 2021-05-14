// code for the below taken from youtube video and amended to fit project. Linked in README.md

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {	
        question: "What is Porthleven famous for?",		
        choice1: "Harbour",	
        choice2: "Surfing",	
        choice3: "Fishing",		
        answer: 1	
    },	
    {	
        question: "What colour is the Cornwall flag?",		
        choice1: "Red and White",	
        choice2: "Black and White",	
        choice3: "Blue and White",		
        answer: 2	
    },	
    {	
        question: "The iconic Tate gallery is in which Cornish town?",		
        choice1: "St Ives",	
        choice2: "Porthleven",	
        choice3: "Newquay",	
        answer: 1
    },	
    {	
        question: "What is Cornwall famous for?",	
        choice1: "Ice Cream",	
        choice2: "Pasties",	
        choice3: "Cakes",	
        answer: 2
    },	
    {	
        question: "Which beach can is it dangerous to swim in the sea?",
        choice1: "St Ives",	
        choice2: "Praa Sands",	
        choice3: "Loe Bar",	
        answer: 3	
    },	
    {	
        question: "Name the only city in Cornwall?",		
        choice1: "Truro",	
        choice2: "St Ives",	
        choice3: "Penzance",	
        answer: 1
    },	
    {	
        question: "How long is the Cornwall coastline?",	
        choice1: "348",	
        choice2: "697km",	
        choice3: "964",	
        answer: 1	
    },	
    {	
        question: "What is the most southerly point in Cornwall?",	
        choice1: "Sennen Cove",	
        choice2: "Land's End",	
        choice3: "Lizard Point",	
        answer: 3	
    }	
];

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 8;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        return window.location.assign("/end.HTML");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log(`INDEX: ${questionIndex}`);
    currentQuestion = availableQuestions[questionIndex];
    console.log(`QUESTION: ${Object.values(currentQuestion)}`);
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        let number = choice.dataset['number'];
        console.log(`NUMBER: ${number}`);
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers)return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        selectedChoice.parentElement.classList.add(classToApply);
        getNewQuestion();
    });
})

startGame();