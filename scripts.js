const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



function togglePlay(){
    if(video.paused){
        video.play();
        toggle.textContent = "ll";
    } else {
        video.pause();
        toggle.textContent = "►";
    }
}

function skip (){
    video.currentTime+=parseInt(this.dataset.skip);
}


skipButtons.forEach(item=>{
    item.addEventListener("click", skip);
})
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);