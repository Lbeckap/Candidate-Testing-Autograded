const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let q1 = 'Who was the first American woman in space? ';
let a1 = 'Sally Ride';

let q2 = 'True or false: 5 kilometer == 5000 meters? ';
let a2 = 'true';

let q3 = '(5 + 3)/2 * 10 = ? ';
let a3 = '40';

let q4 = `Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? `;
let a4 = 'Trajectory';

let q5 = 'What is the minimum crew size for the ISS? ';
let a5 = '3';

const questions = [q1, q2, q3, q4, q5];
const correctAnswers = [a1, a2, a3, a4, a5];
const candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const userName = require('readline-sync');
  candidateName = userName.question("Enter your first and last name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    question = questions[i]
    const userAnswer = require('readline-sync');
    candidateAnswer= userAnswer.question(question);
    candidateAnswers.push(candidateAnswer);
  }
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly// 
  for (let i = 0; i < questions.length; i++){
    console.log(`Your Answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}`);
  }


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Candidate Name: ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
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