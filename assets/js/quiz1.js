const quizcontainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    const output = []

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value${letter}>
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')}</div>`
            )
        }
    );
    quizContainer.innerHTML = output.join('')
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainer[questionNumber];
        const selector = `input[name=questions${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
            }
        else {
            answerContainer[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}


submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        question: "What is Porthleven famous for",
        answers: {
        a: "",
        b: "Harbour",
        c: "",
        },
        correctAnswer: "B",
    },
    {
        question: "What colour is the Cornwall flag?",
        answers:{
        a: "",
        b: "Black and White",
        c: "",
        },
        correctAnswer: "B",
    },
    {
        question: "The iconic Tate gallery is in which Cornish town?",
        answers:{
        a: "St Ives",
        b: "",
        c: "",
        },
        correctAnswer: "1",
    },
    {
        question: "What is Cornwall famous for?",
        answers: {
        a: "",
        b: "Pasties",
        c: "",
        },
        correctAnswer: "2",
    },
    {
        question: "Which beach can is it dangerous to swim in the sea?",
        answers: {
        a: "St Ives",
        b: "Praa Sands",
        c: "Loe Bar",
        },
        correctAnswer: "3",
    },
    {
        question: "Name the only city in Cornwall?",
        answers: {
        a: "Truro",
        b: "",
        c: "",
        },
        correctAnswer: "1",
    },
    {
        question: "How long is the Cornwall coastline?",
        answers: {
        a: "",
        b: "697km",
        c: "",
        },
        correctAnswer: "1",
    },
    {
        question: "What is the most southerly point in Cornwall?",
        answers: {
        a: "",
        b: "",
        c: "Lizard Point",
        },
        correctAnswer: "3",
    }
]

