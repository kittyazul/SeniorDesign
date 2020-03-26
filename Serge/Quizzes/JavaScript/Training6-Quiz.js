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
        q: 'Which of these is NOT a phishing best practice?',
        options: [
            'Hovering over any links in an email to verify where you are being redirected to',
            'Look at the email address of the sender',
            'Look at the date when it was sent', 
            'Click on any links within the email'],
        answer:3
    },
    {
        q: 'If a Domain name within a URL does not match the intended destination, then it safe to say that...',
        options: [
            'The email received needs to be treated as malicious and deleted',
            'The email received is fine and the link can be clicked on',
            'The email received needs to be inspected further as it might just be an error in the system', 
            'All of the Above'],
        answer:0
    },
    {
        q: 'Which of these statements is TRUE',
        options: [
            'When you receive a suspicious email, always navigate to the website manually rather than clicking on the link within the email',
            'Never click on links in unsolicited email messages- ever!',
            'In general, when an email looks suspicious, it is always best to simply delete it without opening it', 
            'All of the above'],
        answer:3
    },
    {
        q: 'To avoid being Phished, you must always...',
        options: [
            'Do whatever is being asked by the sender',
            'Think after you click',
            'Think before you click', 
            'Skim through the message received'],
        answer:2
    },
    {
        q: 'Which of these is a technical method for improving Phishing Defense?',
        options: [
            'Installing anti-virus and anti-malware software on all devices',
            'Selectively creating separate administrator accounts only for users who need them',
            'Adding a firewall on the network', 
            'All of the Above'],
        answer:1
    },
    {
        q: 'How, if at all, have phishing tactics changed over the years?',
        options: [
            'They have not changed',
            'They have become more effective now',
            'They have entirely changed their approach', 
            'None of the Above'],
        answer:0
    },
    {
        q: 'Which of these are common types of phishing emails sent to people?',
        options: [
            'The contest winner',
            'The virus or compromised account scare',
            'The Tax communication', 
            'All of the Above'],
        answer:3
    },
    {
        q: 'When you receive a suspicious email that contains a link to an alleged website, how can you verify where the link will direct you to?',
        options: [
            'Copy and paste the link on your browser',
            'Ignore the email',
            'Hover your mouse over the link', 
            'Click on the link to find out'],
        answer:2
    },
    {
        q: 'What else can you do to confirm the legitimacy of a phishing email?',
        options: [
            'Look at the name at the end of the message',
            'If the email came from a deparment/company, verify if they actually exists',
            'If the email came from a person, look to see if their name can be found anywhere else in the email', 
            'All of the above'],
        answer:3
    },
    {
        q: 'When generic emails do not work on their intended target, criminals will begin to target a specific individual by using personal information obtained online or social media websites to make the emails look more credible. This type of phishing attack is called?',
        options: [
            'Individual Phishing',
            'Email Spamming',
            'Spear Phishing', 
            'Target Phishing'],
        answer:2
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
        q: 'Which of these is NOT a phishing best practice?',
        options: [
            'Hovering over any links in an email to verify where you are being redirected to',
            'Look at the email address of the sender',
            'Look at the date when it was sent', 
            'Click on any links within the email'],
        answer:3
    },
    {
        q: 'If a Domain name within a URL does not match the intended destination, then it safe to say that...',
        options: [
            'The email received needs to be treated as malicious and deleted',
            'The email received is fine and the link can be clicked on',
            'The email received needs to be inspected further as it might just be an error in the system', 
            'All of the Above'],
        answer:0
    },
    {
        q: 'Which of these statements is TRUE',
        options: [
            'When you receive a suspicious email, always navigate to the website manually rather than clicking on the link within the email',
            'Never click on links in unsolicited email messages- ever!',
            'In general, when an email looks suspicious, it is always best to simply delete it without opening it', 
            'All of the above'],
        answer:3
    },
    {
        q: 'To avoid being Phished, you must always...',
        options: [
            'Do whatever is being asked by the sender',
            'Think after you click',
            'Think before you click', 
            'Skim through the message received'],
        answer:2
    },
    {
        q: 'Which of these is a technical method for improving Phishing Defense?',
        options: [
            'Installing anti-virus and anti-malware software on all devices',
            'Selectively creating separate administrator accounts only for users who need them',
            'Adding a firewall on the network', 
            'All of the Above'],
        answer:1
    },
    {
        q: 'How, if at all, have phishing tactics changed over the years?',
        options: [
            'They have not changed',
            'They have become more effective now',
            'They have entirely changed their approach', 
            'None of the Above'],
        answer:0
    },
    {
        q: 'Which of these are common types of phishing emails sent to people?',
        options: [
            'The contest winner',
            'The virus or compromised account scare',
            'The Tax communication', 
            'All of the Above'],
        answer:3
    },
    {
        q: 'When you receive a suspicious email that contains a link to an alleged website, how can you verify where the link will direct you to?',
        options: [
            'Copy and paste the link on your browser',
            'Ignore the email',
            'Hover your mouse over the link', 
            'Click on the link to find out'],
        answer:2
    },
    {
        q: 'What else can you do to confirm the legitimacy of a phishing email?',
        options: [
            'Look at the name at the end of the message',
            'If the email came from a deparment/company, verify if they actually exists',
            'If the email came from a person, look to see if their name can be found anywhere else in the email', 
            'All of the above'],
        answer:3
    },
    {
        q: 'When generic emails do not work on their intended target, criminals will begin to target a specific individual by using personal information obtained online or social media websites to make the emails look more credible. This type of phishing attack is called?',
        options: [
            'Individual Phishing',
            'Email Spamming',
            'Spear Phishing', 
            'Target Phishing'],
        answer:2
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
