const questions = [

{
    question: "Which language is used for web development?",
    options: [
        "Python",
        "HTML",
        "C++",
        "Java"
    ],
    answer: 1
},


{
    question: "Which company developed Java?",
    options: [
        "Microsoft",
        "Google",
        "Sun Microsystems",
        "Apple"
    ],
    answer: 2
},


{
    question: "What does CPU stand for?",
    options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Utility",
        "Control Processing Unit"
    ],
    answer: 0
},


{
    question: "Which database language is used to manage data?",
    options:[
        "HTML",
        "SQL",
        "CSS",
        "XML"
    ],
    answer:1
},


{
    question:"Which data structure follows FIFO?",
    options:[
        "Stack",
        "Queue",
        "Tree",
        "Graph"
    ],
    answer:1
},


{
    question:"Which symbol is used for comments in JavaScript?",
    options:[
        "//",
        "##",
        "<!-- -->",
        "**"
    ],
    answer:0
},


{
    question:"Which operating system is open source?",
    options:[
        "Windows",
        "Linux",
        "iOS",
        "DOS"
    ],
    answer:1
},


{
    question:"Which protocol is used for websites?",
    options:[
        "HTTP",
        "FTP",
        "SMTP",
        "TCP"
    ],
    answer:0
},


{
    question:"Which one is a programming language?",
    options:[
        "Photoshop",
        "Python",
        "Chrome",
        "Windows"
    ],
    answer:1
},


{
    question:"RAM is a type of:",
    options:[
        "Permanent Memory",
        "Secondary Storage",
        "Volatile Memory",
        "Software"
    ],
    answer:2
},


{
    question:"Which company created Android?",
    options:[
        "Google",
        "IBM",
        "Intel",
        "Nokia"
    ],
    answer:0
},


{
    question:"CSS is used for:",
    options:[
        "Database",
        "Styling Web Pages",
        "Programming",
        "Networking"
    ],
    answer:1
},


{
    question:"Which is not a programming language?",
    options:[
        "Java",
        "Python",
        "HTML",
        "C"
    ],
    answer:2
},


{
    question:"Which algorithm is used for searching?",
    options:[
        "Binary Search",
        "Bubble Sort",
        "Merge Sort",
        "Insertion Sort"
    ],
    answer:0
},


{
    question:"Which device connects networks?",
    options:[
        "Monitor",
        "Router",
        "Keyboard",
        "Printer"
    ],
    answer:1
},


{
    question:"Full form of URL is:",
    options:[
        "Uniform Resource Locator",
        "Universal Record Link",
        "Unique Resource Line",
        "Uniform Read Language"
    ],
    answer:0
},


{
    question:"Which is a NoSQL database?",
    options:[
        "MySQL",
        "MongoDB",
        "Oracle",
        "SQL Server"
    ],
    answer:1
},


{
    question:"Which tag is used for heading in HTML?",
    options:[
        "<p>",
        "<h1>",
        "<div>",
        "<body>"
    ],
    answer:1
},


{
    question:"Which company owns GitHub?",
    options:[
        "Microsoft",
        "Google",
        "Amazon",
        "Meta"
    ],
    answer:0
},

{
    question:"Which method adds element at the end of JavaScript array?",
    options:[
        "push()",
        "pop()",
        "shift()",
        "slice()"
    ],
    answer:0
}

];

let currentQuestion=0;
let score=0;
let userAnswers=new Array(questions.length).fill(null);

document.getElementById("total").innerText=questions.length;

function loadQuestion(){

let q=questions[currentQuestion];

document.getElementById("current").innerText=currentQuestion+1;

document.getElementById("question").innerText=q.question;

document.getElementById("progress").style.width=((currentQuestion+1)/questions.length)*100+"%";

let html="";

q.options.forEach((option,index)=>{

html += `
<label class="option">
<input type="radio"
name="option"
value="${index}"
${userAnswers[currentQuestion]==index ? "checked" : ""}>

<span>${option}</span>

</label>
`;

});

document.getElementById("options").innerHTML=html;

if(currentQuestion==questions.length-1)
document.getElementById("nextBtn").innerText="Submit";
else
document.getElementById("nextBtn").innerText="Next ➜";

}

document.getElementById("nextBtn").addEventListener("click",()=>{

let selected=document.querySelector('input[name="option"]:checked');

if(selected)
userAnswers[currentQuestion]=Number(selected.value);

if(currentQuestion<questions.length-1){

currentQuestion++;
loadQuestion();

}
else{

calculateScore();

}

});

function calculateScore(){

score=0;

questions.forEach((q,index)=>{

if(userAnswers[index]==q.answer)
score++;

});

let percent=((score/questions.length)*100).toFixed(0);

let grade="F";

if(percent>=90) grade="A+";
else if(percent>=80) grade="A";
else if(percent>=70) grade="B";
else if(percent>=60) grade="C";
else if(percent>=50) grade="D";

document.querySelector(".quiz-box").innerHTML=`

<div class="result">

<h2>🎉 Quiz Completed!</h2>

<p><strong>Score:</strong> ${score} / ${questions.length}</p>

<p><strong>Percentage:</strong> ${percent}%</p>

<p><strong>Grade:</strong> ${grade}</p>

<br>

<button onclick="location.reload()">Restart Quiz</button>

</div>

`;

}

loadQuestion();