//Code taken from youtube video and amended to fit project 

const question = document.querySelector('#question');
const choices = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progress-bar-full');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What is Porthleven famous for",
        choice1: "",
        choice2: "Harbour",
        choice3: "",
    },
    {
        question: "What colour is the Cornwall flag?",
        choice1: "",
        choice2: "Black and White",
        choice3: "",
    },
    {
        question: "The iconic Tate gallery is in which Cornish town?",
        choice1: "St Ives",
        choice2: "",
        choice3: "",
    },
    {
        question: "What is Cornwall famous for?",
        choice1: "",
        choice2: "Pasties",
        choice3: "",
    },
    {
        question: "Which beach can is it dangerous to swim in the sea?",
        choice1: "St Ives",
        choice2: "Praa Sands",
        choice3: "Loe Bar",
    },
    {
        question: "Name the only city in Cornwall?",
        choice1: "Truro",
        choice2: "",
        choice3: "",
    },
    {
        question: "How long is the Cornwall coastline?",
        choice1: "",
        choice2: "697km",
        choice3: "",
    },
    {
        question: "What is the most southerly point in Cornwall?",
        choice1: "",
        choice2: "",
        choice3: "Lizard Point",
    },
]