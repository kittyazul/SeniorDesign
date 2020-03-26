<<<<<<< HEAD
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
        q: 'If you receive an email that you believe to be a phishing or extortion scam, one designed to trick you into giving up your login information or pay a ransom, what should you do?',
        options: [
            'You must give into that pressure',
            'You must do whatever is being asked by the sender',
            'You can safely delete it', 
            'None of the Above'],
        answer:2
    },
    {
        q: 'What can you do to "stick it to the bad guys"?',
        options: [
            'Report the email to the proper authorities',
            'Reply with a strongly worded email',
            'Click on the link they sent and enter false information', 
            'Forward their email back to them'],
        answer:0
    },
    {
        q: 'What is the most effective way to report scam/phishing emails?',
        options: [
            'Copy and paste the malicious link received in a new email, and send it to the proper authorities',
            'Pass along the full email, including the complete headers',
            'There is no need to report. Once an email is deleted, everything is fine', 
            'None of the above'],
        answer:1
    },
    {
        q: 'When reporting a phishing email, including the headers is crucial. Why are they so important?',
        options: [
            'They include all the "behind-the-scenes" details about an email',
            'They contain important details such as where the email came from and how it got to you',
            'The information they contain can be used to track down or build a stronger case against the attacker', 
            'All of the Above'],
        answer:3
    },
    {
        q: 'Which of these organizations can you report Phishing emails to?',
        options: [
            'The Office of Information Security at the University of Cincinnati (abuse@uc.edu)',
            'The Anti-Phishing Working Group (reportphishing@apwg.org)',
            'The US Federal Government (spam@uce.gov) or Tax Fraud office (phishing@irs.gov)', 
            'All of the Above'],
        answer:3
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
=======
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
        q: 'If you receive an email that you believe to be a phishing or extortion scam, one designed to trick you into giving up your login information or pay a ransom, what should you do?',
        options: [
            'You must give into that pressure',
            'You must do whatever is being asked by the sender',
            'You can safely delete it', 
            'None of the Above'],
        answer:2
    },
    {
        q: 'What can you do to "stick it to the bad guys"?',
        options: [
            'Report the email to the proper authorities',
            'Reply with a strongly worded email',
            'Click on the link they sent and enter false information', 
            'Forward their email back to them'],
        answer:0
    },
    {
        q: 'What is the most effective way to report scam/phishing emails?',
        options: [
            'Copy and paste the malicious link received in a new email, and send it to the proper authorities',
            'Pass along the full email, including the complete headers',
            'There is no need to report. Once an email is deleted, everything is fine', 
            'None of the above'],
        answer:1
    },
    {
        q: 'When reporting a phishing email, including the headers is crucial. Why are they so important?',
        options: [
            'They include all the "behind-the-scenes" details about an email',
            'They contain important details such as where the email came from and how it got to you',
            'The information they contain can be used to track down or build a stronger case against the attacker', 
            'All of the Above'],
        answer:3
    },
    {
        q: 'Which of these organizations can you report Phishing emails to?',
        options: [
            'The Office of Information Security at the University of Cincinnati (abuse@uc.edu)',
            'The Anti-Phishing Working Group (reportphishing@apwg.org)',
            'The US Federal Government (spam@uce.gov) or Tax Fraud office (phishing@irs.gov)', 
            'All of the Above'],
        answer:3
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
>>>>>>> db618d58f190e5453f1e96599d9f410cbebbead5
