var question = "Which one of these is Roberts freind";
var answers = ['forrest M.','Bill gates','elon musk','lary page'];
var answerButtons = document.getElementsByClassName('quizButton');
var correct = 0;


for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot];
    answerButtons[spot].addEventListener('click',function(){
        disableAll();
        if(this.innerHTML == answers[correct]){
            this.setAttribute('style','background-color:rgb(76,175,80);');
        } else {
            this.setAttribute('style','background-color:rgb(210,50,35);');
        }
    });
    
}

document.getElementById('question').innerHTML = question;



function changeColor(){
document.getElementById('demo2').setAttribute('style','background-color:rgb(210,50,35);')
}
function disableAll(){
    for(var num=0;num<answerButtons.length; num++){
        answerButtons[num].setAttribute('disabled',true);
    }
}