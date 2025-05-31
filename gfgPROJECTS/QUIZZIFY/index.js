const { readlink } = require("fs"); // Importing readlink from fs module
let readlineSync = require("readline-sync"); // Correcting package name
const kleur = require("kleur"); // Importing kleur for colors
const { log } = require("console");

let score = 0;

// Get username with color styling
let username = readlineSync.question(kleur.cyan("What is your name? "));
console.log(kleur.green(`Hello ${username}! Welcome to ${kleur.bold().yellow("Quizzyfy")}`));

const database = {
  data: [
    {
      questions: `let a = {}, b = {}
            console.log(a == b)
            console.log(a === b)`,
      options: {
        a: "false false",
        b: "false true",
        c: "true true",
        d: "true false",
      },
      correctAnswer: "a",
    },
    {
      questions: `Is method chaining possible with forEach?`,
      options: {
        a: "Yes",
        b: "No",
      },
      correctAnswer: "b",
    },
    {
      questions: `What will be the output of console.log(typeof NaN)?`,
      options: {
        a: "undefined",
        b: "number",
        c: "string",
        d: "NaN",
      },
      correctAnswer: "b",
    },
    {
      questions: `What does 'use strict' do in JavaScript?`,
      options: {
        a: "Enforces strict variable declarations",
        b: "Prevents undeclared variables",
        c: "Enables ES6 features",
        d: "Both A and B",
      },
      correctAnswer: "d",
    },
    {
      questions: `What is the output of console.log(0.1 + 0.2 === 0.3)?`,
      options: {
        a: "true",
        b: "false",
      },
      correctAnswer: "b",
    },
    {
      questions: `Which of these is not a primitive data type in JavaScript?`,
      options: {
        a: "String",
        b: "Boolean",
        c: "Object",
        d: "Number",
      },
      correctAnswer: "c",
    },
    {
      questions: `Which function converts a string into an integer in JavaScript?`,
      options: {
        a: "parseInt()",
        b: "parseFloat()",
        c: "Number()",
        d: "toFixed()",
      },
      correctAnswer: "a",
    },
    {
      questions: `Which keyword is used to define a constant in JavaScript?`,
      options: {
        a: "var",
        b: "let",
        c: "const",
        d: "define",
      },
      correctAnswer: "c",
    },
    {
      questions: `What is the result of console.log([] + [])?`,
      options: {
        a: "0",
        b: "undefined",
        c: "empty string",
        d: "NaN",
      },
      correctAnswer: "c",
    },
    {
      questions: `Which method is used to remove the last element from an array?`,
      options: {
        a: "pop()",
        b: "shift()",
        c: "splice()",
        d: "slice()",
      },
      correctAnswer: "a",
    }
  ]
};

// Function to display questions
function showQuestionAndAnswers(database) {
  for (let i = 0; i < database.data.length; i++) {
    console.log(kleur.bold().blue(`\nQ${i + 1} - ${database.data[i].questions}\n`));

    for (let key in database.data[i].options) {
      console.log(kleur.yellow(`${key} - ${database.data[i].options[key]}`));
    }

    let userAnswer = readlineSync.question(kleur.magenta("Enter your answer (a/b/c/d): "));

    if (userAnswer.toLowerCase() === database.data[i].correctAnswer) {
      console.log(kleur.green("✅ Correct!"));
      score++;
    } else {
      console.log(kleur.red(`❌ Incorrect. The correct answer is '${database.data[i].correctAnswer}'.`));
    }
  }
}

// Leaderboard logic
const leaderBoard = {
  data: [
    { name: "jayram", score: 1 },
    { name: "om", score: 2 },
    { name: "ketan", score: 2 },
    { name: "dinesh", score: 4 },
  ],
};

function highscore(leaderBoard) {
  leaderBoard.data.push({ name: username, score: score });
  let sortedScorelist = leaderBoard.data.sort((a, b) => b.score - a.score);

  console.log(kleur.bold().underline().cyan("\nLeaderboard Rankings:"));
  for (let leader of sortedScorelist) {
    console.log(`${kleur.green(leader.name)} - ${kleur.yellow("Score: " + leader.score)}`);
  }
}

// Call the function
showQuestionAndAnswers(database);
console.log(kleur.bold().magenta(`\nTotal score: ${score}`));
highscore(leaderBoard);
