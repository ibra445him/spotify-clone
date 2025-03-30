// console.log("welcome to spotify");

// let songindex = 0;
// let audioelement = new Audio("songs/1.mp3");
// let masterplay = document.getElementById("masterplay");
// let myprogressbar = document.getElementById("myprogressbar");
// let gif = document.getElementById("gif");
// let mastersongname = document.getElementById("mastersongname");
// let songitems = Array.from(document.getElementsByClassName("songitem"));

// let songs = [
//     {Songname : "Bad bunny dtmf", filepath : "songs/1.mp3" , coverPath : "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg"},
//     {Songname : "Gata only", filepath : "songs/2.mp3" , coverPath : "https://live.staticflickr.com/4077/4787717239_5c443b3acb_b.jpg"},
//     {Songname : "peligrosa", filepath : "songs/3.mp3" , coverPath : "https://i.ytimg.com/vi/NCd5JBdbW_Y/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgSig-MA8=&rs=AOn4CLB_tl_PV4Z08s_5tjRtIq9TpKoq5g"},
//     {Songname : "all the stars", filepath : "songs/4.mp3" , coverPath : "https://preview.redd.it/empty-streets-at-3am-v0-zabq09429te91.jpg?auto=webp&s=7497d536fee871ed8a4fb4ad4bfa74646134e170"},
//     {Songname : "metamorphosis", filepath : "songs/5.mp3" , coverPath : "https://preview.redd.it/empty-streets-at-3am-v0-zabq09429te91.jpg?auto=webp&s=7497d536fee871ed8a4fb4ad4bfa74646134e170"},
//     {Songname : "squid game funk", filepath : "songs/6.mp3" , coverPath : "https://preview.redd.it/empty-streets-at-3am-v0-zabq09429te91.jpg?auto=webp&s=7497d536fee871ed8a4fb4ad4bfa74646134e170"},
//     {Songname : "Mortals", filepath : "songs/7.mp3" , coverPath : "https://preview.redd.it/empty-streets-at-3am-v0-zabq09429te91.jpg?auto=webp&s=7497d536fee871ed8a4fb4ad4bfa74646134e170"},
// ]

// songitems.forEach((element , i) => {
//     console.log(element , i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("Songname")[0].innerText = songs[i].Songname;
// })

// // audioelement.play();

// masterplay.addEventListener("click" , () => {
//     if(audioelement.paused || audioelement.currentTime<=0){
//         audioelement.play();
//         masterplay.classList.remove("fa-play-circle");
//         masterplay.classList.add("fa-pause-circle");
//         gif.style.opacity = 1;
//     }
//     else {
//         audioelement.pause();
//         masterplay.classList.remove("fa-pause-circle");
//         masterplay.classList.add("fa-play-circle");
//         gif.style.opacity = 0;
//     }
// })

// audioelement.addEventListener("timeupdate" , () => {
//     progress = parseInt((audioelement.currentTime/audioelement.duration)* 100);
//     myprogressbar.value = progress;
// })

// myprogressbar.addEventListener("change" , () => {
//     audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
// })

// const makeAllplays = () => {
//     Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
//         element.classList.remove("fa-pause-circle");
//         element.classList.add("fa-play-circle");
//     })
// }

// Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
//     element.addEventListener("click" , (e) => {
//         makeAllplays();
//         songindex = parseInt(e.target.id)
//         e.target.classList.remove("fa-play-circle");
//         e.target.classList.add("fa-pause-circle");
//         audioelement.src = `songs/${songindex+1}.mp3`;
//         mastersongname.innerText = songs[songindex].Songname;
//         audioelement.currentTime = 0;
//         audioelement.play();
//         gif.style.opacity = 1;
//         masterplay.classList.remove("fa-play-circle");
//         masterplay.classList.add("fa-pause-circle");
//     })
// })

// document.getElementById("next").addEventListener("click" , () => {
//     if(songindex>=9){
//         songindex = 0;
//     }else {
//         songindex += 1;
//     }
//     audioelement.src = `songs/${songindex+1}.mp3`;
//     mastersongname.innerText = songs[songindex].Songname;
//     audioelement.currentTime = 0;
//     audioelement.play();
//     masterplay.classList.remove("fa-play-circle");
//     masterplay.classList.add("fa-pause-circle");

// })

// document.getElementById("previous").addEventListener("click" , () => {
//     if(songindex<=0){
//         songindex = 0;
//     }else {
//         songindex -= 1;
//     }
//     audioelement.src = `songs/${songindex+1}.mp3`;
//     mastersongname.innerText = songs[songindex].Songname;
//     audioelement.currentTime = 0;
//     audioelement.play();
//     masterplay.classList.remove("fa-play-circle");
//     masterplay.classList.add("fa-pause-circle");

// })

let songindex = 0;
let audioelement = new Audio(songs[songindex].filepath);
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");

// Assuming the cover image element has the id "songcover"
let songcover = document.getElementById("songcover");

let songs = [
    {Songname: "Bad bunny dtmf", filepath: "songs/1.mp3", coverPath: "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg"},
    {Songname: "Gata only", filepath: "songs/2.mp3", coverPath: "https://live.staticflickr.com/4077/4787717239_5c443b3acb_b.jpg"},
    {Songname: "peligrosa", filepath: "songs/3.mp3", coverPath: "https://i.ytimg.com/vi/NCd5JBdbW_Y/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgSig-MA8=&rs=AOn4CLB_tl_PV4Z08s_5tjRtIq9TpKoq5g"},
    {Songname: "all the stars", filepath: "songs/4.mp3", coverPath: "https://preview.redd.it/empty-streets-at-3am-v0-zabq09429te91.jpg?auto=webp&s=7497d536fee871ed8a4fb4ad4bfa74646134e170"},
    {Songname: "metamorphosis", filepath: "songs/5.mp3", coverPath: "https://preview.redd.it/empty-streets-at-3am-v0-zabq09429te91.jpg?auto=webp&s=7497d536fee871ed8a4fb4ad4bfa74646134e170"},
    {Songname: "squid game funk", filepath: "songs/6.mp3", coverPath: "https://preview.redd.it/empty-streets-at-3am-v0-zabq09429te91.jpg?auto=webp&s=7497d536fee871ed8a4fb4ad4bfa74646134e170"},
    {Songname: "Mortals", filepath: "songs/7.mp3", coverPath: "https://preview.redd.it/empty-streets-at-3am-v0-zabq09429te91.jpg?auto=webp&s=7497d536fee871ed8a4fb4ad4bfa74646134e170"},
];

songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("Songname")[0].innerText = songs[i].Songname;
});

// Play/Pause functionality for the main control button
masterplay.addEventListener("click", () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioelement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

// Update progress bar
audioelement.addEventListener("timeupdate", () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
});

// Set progress on change
myprogressbar.addEventListener("change", () => {
    audioelement.currentTime = (myprogressbar.value * audioelement.duration) / 100;
});

// Update all play icons
const makeAllplays = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
};

// Song item play button functionality
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioelement.src = songs[songindex].filepath;
        mastersongname.innerText = songs[songindex].Songname;

        // Update cover image
        songcover.src = songs[songindex].coverPath;

        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
    });
});

// Next song functionality
document.getElementById("next").addEventListener("click", () => {
    songindex = (songindex + 1) % songs.length;  // This will loop back to the first song after the last
    audioelement.src = songs[songindex].filepath;
    mastersongname.innerText = songs[songindex].Songname;

    // Update cover image
    songcover.src = songs[songindex].coverPath;

    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
});

// Previous song functionality
document.getElementById("previous").addEventListener("click", () => {
    songindex = (songindex - 1 + songs.length) % songs.length;  // This will loop back to the last song when the first song is clicked
    audioelement.src = songs[songindex].filepath;
    mastersongname.innerText = songs[songindex].Songname;

    // Update cover image
    songcover.src = songs[songindex].coverPath;

    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
});

