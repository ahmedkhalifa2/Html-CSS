let vedio = document.querySelector("video")
let range = document.querySelector(".range")
let Audio = document.querySelector("audio")

function play(){
    vedio.play()
}
function pause(){
    vedio.pause()
}
function stop(){
    vedio.currentTime=0
    vedio.pause()
}

function changRange(){
    vedio.currentTime = range.value *18
}


function playAudio(){
    Audio.play()
}
function pauseAudio(){
    Audio.pause()
}
function stopAudio(){
    Audio.currentTime=0
    Audio.pause()
}

function changRangeAudio(){
    Audio.currentTime = range.value *42
}


  //////////// task 2 ///////////////////////

  let sortableList = document.querySelector("#unList")
  





