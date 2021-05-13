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
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
    },
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
    },
]