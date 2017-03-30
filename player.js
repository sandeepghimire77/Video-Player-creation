/**
 * Created by Akshar on 3/28/2017.
 */
/*window.addEventListener('load' ,function() {
    alert('linked');
}, false ); */


window.addEventListener('load', function() {
    video = document.getElementById('video');
    playbutton =  document.getElementById('play-button');
    //progress bar container
    pbar = document.getElementById('pbar');
    pbarContainer = document.getElementById('pbar-container');
    video.load();
    video.addEventListener('canplay', function() {
        playbutton.addEventListener('click',PlayorPause,false);
        pbarContainer.addEventListener('click', skip ,false);
    } , false);





} , false);

function PlayorPause () {
    // we gonna play the video if its only currently paused by using the paused attribute
    if (video.paused) {
        video.play();
        playbutton.src="images/pause.png";
        update =setInterval(updatePlayer,30);
    }
    else {
        video.pause();
        playbutton.src="images/play.png";
        window.clearInterval(update);// use to clear the update
    }
}


function updatePlayer () {
    var percentage = (video.currentTime / video.duration) *100;
    pbar.style.width= percentage+'%';
    if (video.ended){
        window.clearInterval(update);
        playbutton.src='images/replay.png';
    }
}

function skip(ev) {
    var mouseX= ev.pageX - pbarContainer.offsetLeft;
    var width = window.getComputedStyle(pbarContainer).getPropertyValue('width');
    width= parseFloat(width.substr(0,width.length - 2));
    video.currentTime  = (mouseX/width)*video.duration;
}
