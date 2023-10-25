const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

// Accessing all the Elements
const nextEl = document.getElementById('next');
const previousEl = document.getElementById('previous');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');

let score = 0;
let currentQuestion = 0;
let totalScore = quesJSON.length;

nextEl.addEventListener('click', ()=>{
  scoreEl.textContent = `Score: ${score} / ${totalScore}`;
  nextQuestions();
});
previousEl.addEventListener('click', ()=>{
  scoreEl.textContent = `Score: ${score} / ${totalScore}`;
  previousQuestions();
});

showQuestions();

function showQuestions(){
  const {correctAnswer, options, question} = quesJSON[currentQuestion];
  // Set the question text content
  questionEl.textContent = question;
  const shuffleOption = shuffleOptions(options);

  // Populating the Options div with the buttons
  shuffleOption.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    optionsEl.appendChild(btn);

    // Event handling on the button
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) { 
        score++;
      }
      else {
        score -= 0.25;
      }
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestions();
    });
  });
}

function nextQuestions(){
  currentQuestion++;
  optionsEl.textContent = '';
  if(currentQuestion>=quesJSON.length){
    questionEl.textContent = 'Quiz Completed!!';
    optionsEl.textContent = '';
    previousEl.style.display = 'none';
    nextEl.style.display = 'none';
  }
  else{
    showQuestions();
  }
}

function previousQuestions(){
  currentQuestion--;
  optionsEl.textContent = '';
  if(currentQuestion>=0){
    showQuestions();
  }
  else{
    alert('This is the first Question');
    nextQuestions();
  }
}

// Shuffling the Options
function shuffleOptions(options){
  for(let i=options.length-1;i>=0;i--){
    const j = Math.floor(Math.random()*i+1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

