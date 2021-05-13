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
        answer: "2",
    },
    {
        question: "What colour is the Cornwall flag?",
        choice1: "",
        choice2: "Black and White",
        choice3: "",
        answer: "2",
    },
    {
        question: "The iconic Tate gallery is in which Cornish town?",
        choice1: "St Ives",
        choice2: "",
        choice3: "",
        answer: "1",
    },
    {
        question: "What is Cornwall famous for?",
        choice1: "",
        choice2: "Pasties",
        choice3: "",
        answer: "2",
    },
    {
        question: "Which beach can is it dangerous to swim in the sea?",
        choice1: "St Ives",
        choice2: "Praa Sands",
        choice3: "Loe Bar",
        answer: "3",
    },
    {
        question: "Name the only city in Cornwall?",
        choice1: "Truro",
        choice2: "",
        choice3: "",
        answer: "1",
    },
    {
        question: "How long is the Cornwall coastline?",
        choice1: "",
        choice2: "697km",
        choice3: "",
        answer: "1",
    },
    {
        question: "What is the most southerly point in Cornwall?",
        choice1: "",
        choice2: "",
        choice3: "Lizard Point",
        answer: "3",
    }
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 8

startGame = () => {
    questionCounter = 0 
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.getElementsByClassName.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedChoice = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText
}