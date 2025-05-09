
const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

//Variáveis de estado
const QUIZ_TIME_LIMIT = 60;
let correntTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "Javascript";
let numberOfQuestions = 5;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswersCount = 0;

//Mostra o resultado do quiz e omite o quiz container
const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `Você acertou <b>${correctAnswersCount}</b> de <b>${numberOfQuestions}</b> perguntas corretamente.
            Grande exforço!`;
    document.querySelector(".result-mensage").innerHTML = resultText;
};

//Limpa e reseta o Timer 
const resetTimer = () => {
    clearInterval(timer);
    correntTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${correntTime}s`;
}

//Inicializa de começa o timer para a questão atual 
const startTimer = () => {
    timer = setInterval(() => {
        correntTime--;
        timerDisplay.textContent = `${correntTime}s`;

        if (correntTime <= 0) {
            clearInterval(timer);
            higtlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "#d9376e";

            //Desabilita as opções de resposta depois da resposta ser selecionada
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    }, 1000);
}

//Puxa uma questão aleatória baseada ba categoria selecionada
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() ===
        quizCategory.toLowerCase()).questions || [];

    //Mostra o resultado se todas as questões foram respondidas
    if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
        return showQuizResult();
    }

    //Filtra as questões que ainda não foram respondidas e escolhe uma aleatória
    const availableQuastions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];

    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

//Destaca a opção de resposta correta e insere um icone
const higtlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

//Manipula a opção de resposta selecionada
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);

    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');
    !isCorrect ? higtlightCorrectAnswer() : correctAnswersCount++;

    //Insere um Icon baseado na correção
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    //Desabilita as opções de resposta depois da resposta ser selecionada
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    nextQuestionBtn.style.visibility = "visible";
}

//Renderiza a questão autual e as opções para o quiz 
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if (!currentQuestion) return;

    resetTimer();
    startTimer();

    //Upando a Interface de Usuário
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#94a1b2";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> de <b>${numberOfQuestions}</b> Questões`;

    //Cria as opções <li> elemendos, anexos, e adiciona um evento de clique 
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
}

//Inicia o quiz e puxa uma questão aleatória
const startQuiz = () => {
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    //Upando  a categoria e nmr de questões
    quizCategory = configContainer.querySelector(".category-option.selected").textContent; 
    numberOfQuestions = parseInt(configContainer.querySelector(".question-option.selected").textContent);

    renderQuestion();
}

//Destaca a opção selecionada ao clicar seja da categoria ou n. de questões
document.querySelectorAll(".category-option, .question-option").forEach(option => {
    option.addEventListener("click", () => {
        option.parentNode.querySelector(".selected").classList.remove("selected");
        option.classList.add("selected");
    });
});

//resetar o quiz e retorna para o config container 
const resetQuiz = () => {
    resetTimer();
    correctAnswersCount = 0;
    questionsIndexHistory.length = 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
}

renderQuestion();

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);