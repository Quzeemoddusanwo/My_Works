let questions = [
    {
        question:"1-What is the full form of html?",
        a: "Hypertext Markup Language",
        b: "Hypercool makeup life",
        c : "Hype mint language",
        d : "Hypertext mark language",
        ans:"ans1"
    },
    {
        question:"2-What is the full form of Css?",
        a: "Cascading Spreadsheet",
        b: "Hypercool makeup life",
        c : "Cascading Stylesheet",
        d : "Hypertext mark language",
        ans:"ans3"
    },
    {
        question:"3-Who is the father of C?",
        a: "Cascading Spreadsheet",
        b: "Hypercool makeup life",
        c : "Dennis Riche",
        d : "Hypertext mark language",
        ans:"ans3"
    },
    {
        question:"4-Javascript is an _______ language?",
        a: "Object Oriented",
        b: "object-based",
        c : "Cascading Stylesheet",
        d : "nothing",
        ans:"ans4"
    },
]

let answer = document.querySelectorAll('.answer');
let qname = document.querySelector('#quizquestion');
let ans1 = document.querySelector('.answer1');
let ans2 = document.querySelector('.answer2');
let ans3 = document.querySelector('.answer3');
let ans4 = document.querySelector('.answer4');
let submitbtn = document.querySelector('#submit');
let scorediv = document.querySelector('.score--div');
let scorecount = 0;
let questionindex = 0;

loadquestion=()=>{
    const questionlist = questions[questionindex];
    qname.textContent=questionlist.question;
    ans1.innerHTML=questionlist.a;
    ans2.innerHTML=questionlist.b;
    ans3.innerHTML=questionlist.c;
    ans4.innerHTML=questionlist.d;
}
loadquestion();

const getanswer=()=>
{
    let chkanswer;
    answer.forEach((curAnsEle)=> {
        if(curAnsEle.checked)
        chkanswer = curAnsEle.id;
    });
    return chkanswer;
}

submitbtn.addEventListener('click', ()=>{
    const checkanswer = getanswer();
    if(checkanswer==questions[questionindex].ans)
    {
        scorecount++;
    }
    questionindex++;
    if(questionindex < questions.length)
    {
        loadquestion();
    }
    else{
       scorediv.innerHTML ='<h1> your score is ${scorecount}/${questions.length}</h1>'
       '<button class="try--again" onclick="location.reload()">Play Again</button>';
       scorediv.style.display="block";
    };
})