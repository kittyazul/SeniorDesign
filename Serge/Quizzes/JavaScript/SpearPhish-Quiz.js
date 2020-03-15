const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[]; //For testing quizIndex value
let score=0;

// Questions, Options, and Answers
const questions=[
    {
        q: 'Which type of phishing attack targets a specific individual or organization?',
        options: [
            'Content Injection',
            'Spear Phishing',
            'Email Spamming', 
            'Malware attacks'],
        answer:1
    },
    {
        q: 'How do scammers learn about you before they conduct their attack?',
        options: [
            'They ask your friends to tell them about you',
            'They talk to you in person or online',
            'They dig through your social media accounts or any public traces you may leave', 
            'None of the Above'],
        answer:2
    },
    {
        q: 'How can you protect yourself against spear phishing attacks?',
        options: [
            'Scrutinize all contact from people you do not know',
            'Never download unfamiliar attachments',
            'Never send personal information based on an email request', 
            'All of the above'],
        answer:3
    },
    {
        q: 'When an attacker has enough information on you, how do they conduct their spear phishing attack?',
        options: [
            'They create targeted email messages, phone calls or social media contacts',
            'They create a regular phishing email but put your name on it to make it personal',
            'They create a general phishing email, send it to you and test to see how good you are at spotting phishing attacks', 
            'They create content that will make you feel sad and depressed'],
        answer:0
    },
]

//Set questions and options and question number

totalQuestionSpan.innerHTML=questions.length;
function load(){
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;
}

function check(element){
    if(element.id==questions[questionIndex].answer){
        element.classList.add("correct");
        updateAnswerTracker("correct")
        score++;
        //console.log("score: "+score)
    }
    else{
        element.classList.add("wrong");
        updateAnswerTracker("wrong")
    }

    disabledOptions()
}

function disabledOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.add("disabled");
        if(options[i].id==questions[questionIndex].answer) {
            options[i].classList.add("correct");
        }
    }
}

function enableOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong");
    }
}

function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please select one option before moving on.")
    }
    
    else{
        enableOptions();
        randomQuestion();
    }
}

function next(){
    validate();
}

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;
        if (index==questions.length){
            //console.log("Quiz Over!")
            quizOver();
        }
        else{
            if (myArray.length>0){
                for (let i=0; i<myArray.length; i++) {
                    if(myArray[i]==randomNumber){
                        hitDuplicate=1;
                        break;
                    }
                }
                if (hitDuplicate==1){
                    randomQuestion();
                }
                else {
                    questionIndex=randomNumber;
                    load();
                    myArr.push(questionIndex);
                }

            }

            if (myArray.length==0){
                questionIndex=randomNumber;
                load();
            }

            //console.log("myArr:"+ myArr); //Testing
            myArray.push(randomNumber);
        }
 }
 
function answerTracker(){
     for(let i=0; i<questions.length; i++){
         const div=document.createElement("div")
         answerTrackerContainer.appendChild(div);
     }
}

function updateAnswerTracker(classNam){
    answerTrackerContainer.children[index-1].classList.add(classNam); 
}

function quizOver(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=questions.length;
    percentage.innerHTML=(score/questions.length)*100 + "%";
}

function tryAgain(){
    window.location.reload();
}

window.onload=function(){
    randomQuestion();
    answerTracker();
}
