let quizdata = [
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "Both the <head> section and the <body> section are correct  ",
    b: "The <head> section",
    c: "The <body> section",
    d: "none",
    coreect: "a",
  },
  {
    question: "which is not a framework",
    a: "react",
    b: "javascript",
    c: "Angular",
    d: "django",
    correct: "b",
  },
  {
    question: "How do you write  in an alert box?",
    a: "alertBox(Hello World)",
    b: "msgBox(Hello World)",
    c: "alert(Hello World);  ",
    d: "none",
    correct: "c",
  },
  {
    question: "How do you call a function named myFunction?",
    a: "myFunction()",
    b: "call function myFunction()",
    c: "call myFunction()",
    d: "none",
    correct: "a",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    a: "if (i == 5)",
    b: "if i = 5",
    c: "if i == 5 then",
    d: "none",
    correct: "a",
  },
  {
    question: "How does a FOR loop start?",
    a: "for (i = 0; i <= 5)",
    b: "for i = 1 to 5",
    c: "for (i = 0; i <= 5; i++)",
    d: "none",
    correct: "c",
  },

  {
    question: "How do you round the number 7.25, to the nearest integer?",
    a: "rnd(7.25)",
    b: "Math.round(7.25)  ",
    c: "round(7.25)",
    d: "none",
    correct: "b",
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    a: "Math.max(x, y)",
    b: "top(x, y)",
    c: "Math.ceil(x, y)",
    d: "none",
    correct: "a",
  },
];

let quiz = document.getElementById("quiz");
let answer = document.querySelectorAll(".answer");
let question = document.getElementById("question");
let option_a = document.getElementById("a_value");
let option_b = document.getElementById("b_value");
let option_c = document.getElementById("c_value");
let option_d = document.getElementById("d_value");
let submitbtn = document.getElementById("submit");

// for load this data we have to write function .

let currentQuestion = 0;
let quizScore = 0;
loadQuiz();

function loadQuiz() {
  deselect();

  question.innerHTML = quizdata[currentQuestion].question;
  option_a.innerHTML = quizdata[currentQuestion].a;
  option_b.innerHTML = quizdata[currentQuestion].b;
  option_c.innerHTML = quizdata[currentQuestion].c;
  option_d.innerHTML = quizdata[currentQuestion].d;
}

function deselect() {
  answer.forEach((answer) => (answer.checked = false));
}

// Now we will write function for 2th question  after click button .

submitbtn.addEventListener("click", () => {
  let selectedoption;
  answer.forEach((answer) => {
    if (answer.checked) {
      selectedoption = answer.id;
    }
  });
  if (selectedoption == quizdata[currentQuestion].correct) {
    quizScore = quizScore + 1;
  }
  currentQuestion = currentQuestion + 1;

  if (currentQuestion == quizdata.length) {
    document.getElementById("quizdiv").innerHTML = ` 
        you have answered ${quizScore} correcty out of ${quizdata.length}
      ;`;
  } else {
    loadQuiz();
  }
});
