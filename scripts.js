const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



function playVideo(){
    if(video.paused){
        setInterval(fillProgressBar, 500);
        video.play();
        toggle.textContent="ll";
    } else {
        video.pause();
        toggle.textContent="►";
    }
}

function skipVideo(){
    video.currentTime+=parseInt(this.dataset.skip);
}

function getSliders(){
    if(this.name==="volume"){
    video.volume=parseFloat(this.value);
    } else if (this.name="playbackRate"){
    video.playbackRate=parseFloat(this.value);
    }
}

function fillProgressBar(){
    let videoLength = video.duration;
    let currentMoment = video.currentTime;
    let temp = Math.round(1000*currentMoment/videoLength)/10;
    console.log(temp);
    progressBar.style.flexBasis= `${temp}%`
    console.log(videoLength);
}


toggle.addEventListener("click", playVideo);
video.addEventListener("click", playVideo);
skipButtons.forEach(item=>
    item.addEventListener("click", skipVideo)
    );
ranges.forEach(item=>{
    item.addEventListener("mousemove", getSliders);
})
