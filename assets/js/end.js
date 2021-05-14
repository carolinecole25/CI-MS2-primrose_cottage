
// ----------- final score JS for end page 

// code for the below taken from video, linked in README.md

const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore + " out of 8!";