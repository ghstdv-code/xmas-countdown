const timerFields = document.querySelectorAll('.timer-item p'),
    music = document.querySelector('audio'),
    playBtn = document.querySelector('.container button');

// window.onload = () => {
//     randMusic();
// }

playBtn.addEventListener("click", () => {
    let pText = playBtn.querySelector('p');
    if (pText.innerText === 'Enable Music') {
        randMusic();
        pText.innerText = "Disable Music";
    }
    else {
        music.pause();
        pText.innerText = "Enable Music";
    }

});


setInterval(() => {

    var lxDate = luxon.DateTime.now().setZone('Asia/Singapore'),
        tdiff = luxon.DateTime.local(parseInt(luxon.DateTime.now().toFormat('yyyy')), 12, 25).diff(lxDate).milliseconds;

    days = Math.floor(tdiff / (1000 * 60 * 60 * 24)),
        hours = Math.floor((tdiff / 1000 / 60 / 60) % 24),
        minutes = Math.floor((tdiff / 1000 / 60) % 60),
        seconds = Math.floor((tdiff / 1000) % 60);

    // .toLocaleDateString('En-us', {timeZone: 'Asia/Singapore'})

    timerFields[0].innerHTML = days;
    timerFields[1].innerHTML = hours < 10 ? '0' + hours : hours;
    timerFields[2].innerHTML = minutes < 10 ? '0' + minutes : minutes;
    timerFields[3].innerHTML = seconds < 10 ? '0' + seconds : seconds;



    //console.log(days.toLocaleString('En-us', {timeZone: 'Asia/Singapore'}), hours.toLocaleString('En-us', {timeZone: 'Asia/Singapore'}), minutes.toLocaleString('En-us', {timeZone: 'Asia/Singapore'}), seconds);
}, 1000)



function randMusic() {
    music.pause();
    let randIndex = Math.floor(Math.random() * 30);
    music.src = `./assets/audio(${randIndex}).mp3`;
    music.play();
}


music.addEventListener("ended", () => {
    randMusic();
});