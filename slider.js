//variable declarations
var current = 1;        //current image shown
var num = 1;            //number of images - assume at least 1 image present
var set;                //variable for setTimeout
var prevImg = false;    //variables to go to user-selected previous and next image
var nextImg = false;

$(document).ready(function(){
  //find number of img elements to shown
  num = $("#photos>img").length;

  //if more than one image prepare to advance to next image
  if(num > 1){
    pause();
  }
});

function slide(){
  //advance to the next image automatically
  document.getElementById(current).className = "hide";

  if(current === num){
    current = 1;
  }
  else{
    current++;
  }

  document.getElementById(current).className = "show";
  pause();
}

function previous(){
  prevImg = true;
  stop();
}

function next(){
  nextImg = true;
  stop();
}

function userChoice(){
  //advance to either the previous or next image based on user choice
  document.getElementById(current).className = "hide";
  if(prevImg){
    prevImg = false;
    if(current === 1){
      current = num;
    }
    else{
      current--;
    }
  }
  else if(nextImg){
    nextImg = false;
    if(current === num){
      current = 1;
    }
    else{
      current++;
    }
  }

  document.getElementById(current).className = "show";
  pause();
}

function pause(){
  set = setTimeout(function(){slide();}, 2500);
}

function stop(){
  clearTimeout(set);
  userChoice();
}
