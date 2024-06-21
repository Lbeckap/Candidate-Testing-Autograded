const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let q1 = 'Who was the first American woman in space? '; //declare and initialize with question value
let a1 = 'Sally Ride';

let q2 = 'True or false: 5 kilometer == 5000 meters? ';
let a2 = 'true';

let q3 = '(5 + 3)/2 * 10 = ? ';
let a3 = '40';

let q4 = `Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? `;
let a4 = 'Trajectory';

let q5 = 'What is the minimum crew size for the ISS? ';
let a5 = '3';

const questions = [q1, q2, q3, q4, q5]; //declare and initialize array by evalutaing the variables. Maybe should have lsited the questions in the array instead?
const correctAnswers = [a1, a2, a3, a4, a5];
const candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const userName = require('readline-sync');
  candidateName = userName.question("Enter your first and last name: "); //userName is Object, . is access modifier, question() is method. candidateName is being assigned the value of the userName input.
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) { //let i = 0 is the initial expression, i < questions.length is the condition, and i++ is the update expression
    const formatedQuestion = `${i + 1}) ${questions[i]}`; //i is the counter and in the bracket refers to the array index. so it will display as 1) What...
    const userAnswer = require('readline-sync');
    candidateAnswer= userAnswer.question(formatedQuestion);
    candidateAnswers.push(candidateAnswer); //adding user's answer to the END of the array
    console.log(`Your Answer: ${candidateAnswers[i]} 
Correct Answer: ${correctAnswers[i]}\n`); //Display items at current index
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly// 
  let numberOfCorrectAnswers = 0;
  let numberOfQuestions = questions.length;

  for (let i = 0; i < questions.length; i++){
      if(candidateAnswers[i].toLowerCase().trim() === correctAnswers[i].toLowerCase()) { //toLowerCase() for case insensitive and trim() to get rid of leading white space
        numberOfCorrectAnswers++; //adds 1 
      }
  }

  let passOrFail = "";
  if (numberOfCorrectAnswers >= 4) { //if 80% or more
    passOrFail = "PASSED";
  } else {
    passOrFail = "FAILED";
  }

  let grade = numberOfCorrectAnswers / numberOfQuestions * 100;  //TODO 3.2 use this variable to calculate the candidates score.

  let gradeMsg = `>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of ${numberOfQuestions} responses correct) <<<
>>> Status: ${passOrFail} <<<`;
console.log(gradeMsg);

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