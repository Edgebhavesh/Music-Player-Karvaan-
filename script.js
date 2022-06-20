const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");

let isPlaying = false;

const playMusic = () => {
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
    isPlaying = true;
};

const pauseMusic = () => {
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
    isPlaying = false;
};

play.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
})


const artist = document.getElementById("artist");
const title = document.getElementById("title");
const next = document.getElementById("next");
const prev = document.getElementById("prev");


const songs = [
    {
        name: "Drag Me Down ",
        title: "Drag Me Down",
        artist: "One-direction",
        img:"img1"
    },
    {
        name: "Meri Maa ",
        title: "Meri Maa",
        artist: "Shanker Mahadeven",
        img:"img2"
    }
]

const loadSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="music/"+songs.name+".mp3";
    img.src="img/"+songs.img+".jpg";
}

songIndex=0;
const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);