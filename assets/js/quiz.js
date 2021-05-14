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
        a: "St Ives",	
        b: "Porthleven",	
        c: "Newquay",	
        answer: 1,	
    },	
    {	
        question: "What is Cornwall famous for?",	
        a: "Ice Cream",	
        b: "Pasties",	
        c: "Cakes",	
        canswer: 2,	
    },	
    {	
        question: "Which beach can is it dangerous to swim in the sea?",
        a: "St Ives",	
        b: "Praa Sands",	
        c: "Loe Bar",	
        answer: 3,	
    },	
    {	
        question: "Name the only city in Cornwall?",		
        a: "Truro",	
        b: "St Ives",	
        c: "Penzance",	
        answer: 1
    },	
    {	
        question: "How long is the Cornwall coastline?",	
        a: "348",	
        b: "697km",	
        c: "964",	
        correctAnswer: 1	
    },	
    {	
        question: "What is the most southerly point in Cornwall?",	
        a: "Sennen Cove",	
        b: "Land's End",	
        c: "Lizard Point",	
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
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
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
        console.log(selectedAnswer);
        getNewQuestion();
    });
})

startGame();