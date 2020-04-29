const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');




function playVideo(){

    if(video.paused){
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


function scrub(e){
    const scrubTime = (e.offsetX/progress.offsetWidth);
    video.currentTime = video.duration*scrubTime;
}

function fullscreen(){
        video.webkitRequestFullscreen();
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
    progressBar.style.flexBasis= `${temp}%`
}



toggle.addEventListener("click", playVideo);
video.addEventListener("click", playVideo);
video.addEventListener("timeupdate", fillProgressBar);
skipButtons.forEach(item=>
    item.addEventListener("click", skipVideo)
    );
ranges.forEach(item=>{
    item.addEventListener("mousemove", getSliders);
})

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e)=> mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown=true);
progress.addEventListener("mouseup", () => mousedown=false);
video.addEventListener("dblclick", fullscreen);
