const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text");

let currentQuestion =0;
let score = 0;

let questions = [
    {
        question:"sun rise in _____ ?",
        answers : [
            {option:"morning",answer:true},
            {option:"evening",answer:false},
            
        ]
    },

    {
        question:"What is better if you wish to achieve success ?",
        answers: [
            
            {option:"Hard work",answer:false},
            {option:"Smart work",answer:true},
            

        ]
    },

    {
        question:"complete the phrase: Time and ____ wait for none",
        answers: [
            {option:"Tide",answer:true},
            {option:"Batman",answer:false}
            
            

        ]
    },
]


restartBtn.addEventListener("click",restart);
prevBtn.addEventListener("click",prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);




function beginQuiz(){
    currentQuestion=0;
    totalScore.innerHTML=questions.length;
    questionText.innerHTML=questions[currentQuestion].question;
    trueBtn.innerHTML=questions[currentQuestion].answers[0].option;
    trueBtn.onclick=()=>{
        if(questions[currentQuestion].answers[0].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML=score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML=questions[currentQuestion].answers[1].option;
    falseBtn.onclick=()=>{
        if(questions[currentQuestion].answers[1].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML=score;
        if(currentQuestion<2){
            next();
        }
    }
    prevBtn.classList.add("hide");
}
beginQuiz();


function restart(){
    currentQuestion=0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score=0;
    userScore.innerHTML=score;
    beginQuiz();
}


function next(){
    currentQuestion++;
    if(currentQuestion>2){
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML=questions[currentQuestion].question;
    trueBtn.innerHTML=questions[currentQuestion].answers[0].option;
    trueBtn.onclick=()=>{
        if(questions[currentQuestion].answers[0].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML=score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML=questions[currentQuestion].answers[1].option;
    falseBtn.onclick=()=>{
        if(questions[currentQuestion].answers[1].answer){
            if(score<=3){
                score++;
            }
        }
        userScore.innerHTML=score;
        if(currentQuestion<2){
            next();
        }
    }
prevBtn.classList.remove("hide");


}


function prev(){
    currentQuestion--;
    if(currentQuestion<=0){
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML=questions[currentQuestion].question;
    trueBtn.innerHTML=questions[currentQuestion].answers[0].option;
    trueBtn.onclick=()=>{
        if(questions[currentQuestion].answers[0].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML=score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML=questions[currentQuestion].answers[1].option;
    falseBtn.onclick=()=>{
        if(questions[currentQuestion].answers[1].answer){
            if(score<3){
                score++;
            }
        }
        userScore.innerHTML=score;
        if(currentQuestion<2){
            next();
        }
    }
prevBtn.classList.remove("hide");


}

function submit(){
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");
    questionText.innerHTML="Congratulations on submitting the quiz"
}