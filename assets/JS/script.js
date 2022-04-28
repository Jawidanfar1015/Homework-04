var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow= document.querySelectorAll('.qa_set .qa_ans_row input');
var gameOver = document.getElementById('game_over');
var start = document.getElementById('start');
var storeBtn = document.querySelector('#store_btn');
var initial = document.querySelector("#initials")
var count = 0;
var scoreCount = 0;
var duration = 75;

btn.addEventListener('click', function(event){
event.preventDefault();
start.style.display = 'none';
gameOver.style.display = 'flex';

qaAnsRow.forEach(function(qaAnsRowSingle){
    qaAnsRowSingle.addEventListener('click', function(){
        setTimeout(function(){
            step();
        },500)

        var valid = this.getAttribute('valid');
        if (valid == "valid"){
            scoreCount +=20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        } else {
           duration -=10;
           countdown.innerHTML = duration;
        }
    })
});
var durationTime = setInterval(function(){
    duration -=1;
    countdown.innerHTML = duration;
    if (duration <= 0)
    {
        clearInterval(durationTime);
        duration = 0;
     } 
 },1000);

})

function step(){
    count += 1;
    for (var i = 0; i < 5; i++){
       qaSet[i].className = 'qa_set'; 
    }
    
    if (duration <= 0){
        qaSet[5] = 'qa_set active';
    }else{
        qaSet[count].className = 'qa_set active';
    }
   
}


storeBtn.addEventListener('click', function(event){
    var name = initial.value;
    name.value = '';

    event.preventDefault();
    localStorage.setItem('initial', name);
    localStorage.setItem('score', scoreCount);
    
    initial.value = ' ';
});
