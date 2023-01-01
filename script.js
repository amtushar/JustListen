// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
// audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let rangeBar = document.getElementById('rangeBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// array of songs with key value pairs
let songs =[
  {songName:'Just a Dream - Prem Dhillon', filePath:'songs/dream.mp3', cover:'cover/cover1.jpg', time:'03:36'},
  {songName:'Dil Nu - Ap Dhillon', filePath:'songs/Dil-nu.mp3', cover:'cover/Ap.jpg', time:'05:37'},
  {songName:'US - Sidhu Moose Wala', filePath:'songs/US.mp3', cover:'cover/us.jpg', time:'03:36'},
  {songName:'2 am - Karan Aujla', filePath:'songs/2am.mp3', cover:'cover/2am.jpg', time:'03:36'},
  {songName:'Bekhayali - Arijit Singh', filePath:'songs/bekhyali.mp3', cover:'cover/min.jpg', time:'03:36'},
  {songName:'kabira - Tochi Raina', filePath:'songs/kabira.mp3', cover:'cover/Kabira.jpg', time:'03:36'},
  {songName:'Brown Rang - Yo Yo Honey Singh', filePath:'songs/brown.mp3', cover:'cover/honey.jpg', time:'03:36'}

]
// proving name, cover and audio to song through js
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].cover; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("time")[0].innerText = songs[i].time; 

})


// //Handling play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})



// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update rangebar or seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    rangeBar.value = progress;
    if(progress == 100)
    {
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }

})

rangeBar.addEventListener('change', ()=>{
    audioElement.currentTime = rangeBar.value * audioElement.duration/100;
})

// play buttons of each song

// makeAllPlays function

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        if(audioElement.paused || audioElement.currentTime<=0){
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName; 
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
            }
            else{
                e.target.classList.remove('fa-pause-circle');
                e.target.classList.add('fa-play-circle');
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                gif.style.opacity = 0;
        
            }

    })

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else
    {
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName; 
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 6;

    }
    else
    {
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName; 
    audioElement.time = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

})

// function getDuration(src, cb) {
//     var audio = new Audio();
//     $(audio).on("loadedmetadata", function(){
//         cb(audio.duration);
//     });
//     audio.src = src;
// }
// getDuration("./audio/2.mp3", function(length) {
//     console.log('I got length ' + length);
//     document.getElementById("duration").textContent = length;
// });




