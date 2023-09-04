console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("covers/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songitem"));
let song = [
  {
    songName: "dfdcvsalam-e-ishq",
    filePath: "covers/1.mp3",
    coverPath: "cover/1.jpeg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "covers/2.mp3",
    coverPath: "cover/2.jpg",
  },
  {
    songName: "dafcv salam-e-ishq",
    filePath: "covers/3.mp3",
    coverPath: "cover/3.jpg",
  },
  {
    songName: "adcfs salam-e-ishq",
    filePath: "covers/4.mp3",
    coverPath: "cover/4.jpg",
  },
  {
    songName: "aBshdbhdc salam-e-ishq",
    filePath: "covers/5.mp3",
    coverPath: "cover/5.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = song[i].coverPath;
  // element.getElementsByClassName("songName")[0].innerText = song[i].songName;
});

// Handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.add("fa-circle-pause");
    masterplay.classList.remove("fa-circle-play");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.add("fa-circle-play");
    masterplay.classList.remove("fa-circle-pause");
    gif.style.opacity = 0;
  }
});


// masterplay.addEventListener("click", () => {
//   if (audioElement.paused || audioElement.currentTime <= 0) {
//     audioElement.play();
//     masterplay.classList.add("fa-circle-pause");
//     masterplay.classList.remove("fa-circle-play");
//     gif.style.opacity = 1;
//   } else {
//     audioElement.pause();
//     masterplay.classList.add("fa-circle-play");
//     masterplay.classList.remove("fa-circle-pause");
//     gif.style.opacity = 0;
//   }
// });



// Listen to event
audioElement.addEventListener("timeupdate", () => {
  // Update seekbar
  const progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myprogressbar.value = progress;
});
//
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    myprogressbar.value * audioElement.duration / 100;
});
const makeallplay = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  )
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // console.log(e.target);
      makeallplay();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `covers/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >=9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `covers/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <=0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `covers/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
});

// -------------------------------------------
