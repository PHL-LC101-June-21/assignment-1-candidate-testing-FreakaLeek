const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer // 
let question = "Who was the first American woman in space?"; 
let correctAnswer = "Sally Ride"; 
let candidateAnswer = "";

let questions = ["Who was the first American woman in space?","True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];

let correctAnswers = ["Sally Ride","True", "40", "Trajectory", "3"]

let candidateAnswers = [];
let score = 0



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');
const answer = input.question("What is your name?");

let candidateName = answer;
console.log("Welcome " +  candidateName);

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question (question);
for (let i= 0; i<questions.length; i++){
  let candidateAnswer = input.question(questions[i], 'Enter Answer: ')
  
  candidateAnswers.push  (candidateAnswer.toLowerCase())

  
} 

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

console.log(candidateAnswers);
console.log(correctAnswers);

for (let i=0; i<candidateAnswers.length; i++){

if (candidateAnswers[i] == correctAnswers[i].toLowerCase()){ console.log("You're Right!")
score = score +20}
else { console.log("Sorry! Try Again!")}
}
//let grade = score/100

  
  let grade = score
  console.log(`Your overall grade is ${grade}%`)
if (score >=80){ console.log( "You Pass!");}
else {console.log ("Try Again!");}
  return grade;
}

function runProgram() {
  const input = require('readline-sync');
const answer = input.question("What is your name?");
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};