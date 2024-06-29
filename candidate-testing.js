const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2

const questions = [
  'Who was the first American woman in space? ', 
  'True or false: 5 kilometer == 5000 meters? ', 
  '(5 + 3)/2 * 10 = ? ', 
  `Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? `, 
  'What is the minimum crew size for the ISS? '
]; 

const correctAnswers = [
  'Sally Ride',
  'true',
  '40',
  'Trajectory',
  '3'
];
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
    candidateAnswer = userAnswer.question(formatedQuestion);
    candidateAnswers.push(candidateAnswer); //adding user's answer to the END of the array

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

  console.log(`\nCandidate Name: ${candidateName}`);

  for (let i = 0; i < questions.length; i++) {
  let  recap = `${i + 1}) ${questions[i]}
Your Answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}
`;
console.log(recap);
  }

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