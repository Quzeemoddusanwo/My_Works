function onSubmit(){
    var score=0;
    var numOfQuestions = 6;
    var ansArr = ['a', 'c', 'c', 'c', 'b', 'b'];

    q1 = document.forms['quiz']['q1'].value;
    q2 = document.forms['quiz']['q2'].value;
    q3 = document.forms['quiz']['q3'].value;
    q4 = document.forms['quiz']['q4'].value;
    q5 = document.forms['quiz']['q5'].value;
    q6 = document.forms['quiz']['q6'].value;

    for(var i = 1; i <= numOfQuestions; i++){
        if(eval('q' + i) == ''){
            alert('You missed question number ' + i);
        }
    }

    for(var i = 1; i <= numOfQuestions; i++){
        if(eval('q' + i) == ansArr[i - 1]){
            score++;
        }
    }

    var results = document.getElementById('results');
    results.innerHTML = "<h2>You Scored " + score + "points out of " + numOfQuestions + "</h2>"
    alert('You scored ' + score + ' out of ' + numOfQuestions);
    return false;
}