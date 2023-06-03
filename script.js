//your JS code here. If required.
 const questions = [
      {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
      },
      {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
      },
      {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
      },
      {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
      }
    ];

    let currentQuestion = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz');
    const questionElement = document.getElementById('question');
    const aText = document.getElementById('a_text');
    const bText = document.getElementById('b_text');
    const cText = document.getElementById('c_text');
    const dText = document.getElementById('d_text');
    const submitButton = document.getElementById('submit');

    function showQuestion() {
      const currentQuiz = questions[currentQuestion];
      questionElement.textContent = currentQuiz.question;
      aText.textContent = currentQuiz.a;
      bText.textContent = currentQuiz.b;
      cText.textContent = currentQuiz.c;
      dText.textContent = currentQuiz.d;
    }

    function selectAnswer() {
      const answers = document.getElementsByName('answer');
      let selectedOption = "";

      answers.forEach((answer) => {
        if (answer.checked) {
          selectedOption = answer.id;
        }
      });

      return selectedOption;
    }

    function checkAnswer(answer) {
      const currentQuiz = questions[currentQuestion];
      if (answer === currentQuiz.correct) {
        score++;
      }
    }

     function resetQuiz() {
      currentQuestion = 0;
      score = 0;
      showQuestion();
      submitButton.disabled = false;
    }

    submitButton.addEventListener('click', () => {
      const selectedAnswer = selectAnswer();
      if (selectedAnswer) {
        checkAnswer(selectedAnswer);
        currentQuestion++;

        if (currentQuestion < questions.length) {
          showQuestion();
        } else {
          quizContainer.innerHTML = `
            <h2>You scored ${score}/${questions.length} correct answers!</h2>
            <button onclick="resetQuiz()">Restart Quiz</button>
          `;
        }
      } else {
        alert('Please select an answer!');
      }
    });

    showQuestion();