let gamePattern = [];

var started = false;
var buttonColors = ['red' , 'blue' , 'green' , 'yellow'];
let userClickedPattern = [];
var level = 0;

$(document).keypress(function(){
  if (!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    var started = true;
  }
});

$('.btn').click(function(){
  var userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log('success');
  if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function(){
      nextSequence();
    },1000);
  }
  }else {
    playSound('wrong');
    $('body').addClass('game-over');
    $('#level-title').text('Game Over, Press Any Key To Restart');
    setTimeout(function(){
      $('body').removeClass('game-over');
    },200);
    startOver();
    }
  }


function animatePress(currentColor){
    $('.' + currentColor).addClass('pressed');
  setTimeout(function(){
    $('.' + currentColor).removeClass('pressed');
  },100);
}

function playSound(name){
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function nextSequence(){
  userClickedPattern = [];
  level++;
  $('#level-title').text('Level ' + level);
  var randomNumber = Math.floor((Math.random() * 4) + 0);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio('sounds/' + randomChosenColor + '.mp3');
  audio.play();
}

function startOver(){
  var level = 0;
  var gamePattern = [];
  var started = false;
}
