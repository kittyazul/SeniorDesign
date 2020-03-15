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
        q: 'When you receive a suspicious email that contains a link to an alleged website, how can you verify where the link will direct you to?',
        options: [
            'Copy and paste the link on your browser',
            'Ignore the email',
            'Click on the link to find out', 
            'Hover your mouse over the link'],
        answer:3
    },
    {
        q: 'What type of phishing attacks need to be ran on a user’s computer?',
        options: [
            'Malware',
            'Content Injection',
            'Spear Phishing', 
            'Smishing'],
        answer:0
    },
    {
        q: 'What is Smishing?',
        options: [
            'A Phishing attack conducted via text message',
            'A Phishing attack conducted via the Phone',
            'A Phishing attack conducted via email', 
            'A Phishing attack conducted via malware'],
        answer:0
    },
    {
        q: 'What is Vishing?',
        options: [
            'A Phishing attack conducted via text message',
            'A Phishing attack conducted via the Phone',
            'A Phishing attack conducted via email', 
            'A Phishing attack conducted via malware'],
        answer:1
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
