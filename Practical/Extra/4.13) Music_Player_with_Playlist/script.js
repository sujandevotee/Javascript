const audio = document.getElementById("audio");
const playBtn = document.querySelector(".btn-toggle-play");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const songTitle = document.getElementById("song-title");
const songImage = document.getElementById("song-image");
const shuffleToggle = document.getElementById("shuffle-toggle");
const playlist = document.getElementById("playlist");
const songs = [
  {
    title: "Warriyo - Mortals",
    image: "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg",
    path: "songs/1.mp3",
  },
  {
    title: "Cielo - Huma-Huma",
    image:
      "https://static-cse.canva.com/blob/825905/ComposeStunningImages16.jpg",
    path: "songs/2.mp3",
  },
  {
    title: "DEAF KEV - Invincible",
    image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    path: "songs/3.mp3",
  },
  {
    title: "Different Heaven & EH!DE",
    image:
      "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/03/GettyImages-126375144.jpg",
    path: "songs/4.mp3",
  },
  {
    title: "Janji-Heroes-Tonight-feat",
    image:
      "https://img.freepik.com/free-photo/beautiful-lake-landscape_23-2150725023.jpg",
    path: "songs/5.mp3",
  },
  {
    title: "Rabba - Salam-e-Ishq",
    image:
      "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
    path: "songs/6.mp3",
  },
  {
    title: "Sakhiyaan - Salam-e-Ishq",
    image:
      "https://i.pinimg.com/736x/a3/f3/21/a3f3211768b43934c367489af7675c80.jpg",
    path: "songs/7.mp3",
  },
  {
    title: "Bhula Dena - Salam-e-Ishq",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdiS1K2WtTm6qumJ-KpIqVmOZkOdDu-myaQ&s",
    path: "songs/8.mp3",
  },
  {
    title: "Tumhari Kasam - Salam-e-Ishq",
    image:
      "https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_640.jpg",
    path: "songs/9.mp3",
  },
  {
    title: "Na Jaana - Salam-e-Ishq",
    image:
      "https://cdn.pixabay.com/photo/2022/05/23/11/26/tree-7215935_1280.jpg",
    path: "songs/10.mp3",
  },
];
let currentSongIndex = 0;
let shuffleMode = false;
let shuffledIndexes = [];

function loadSong(index) {
  const song = songs[index];
  audio.src = song.path;
  // audio.play();
  songTitle.textContent = song.title;
  songImage.src = song.image;
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
  } else {
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
  }
}
function nextSong() {
  if (shuffleMode) {
    currentSongIndex = shuffledIndexes.pop();
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(currentSongIndex);
}

function prevSong() {
  if (shuffleMode) {
    shuffledIndexes.pop(); 
    if (shuffledIndexes.length > 0) {
      currentSongIndex = shuffledIndexes[shuffledIndexes.length - 1];
    } else {
      currentSongIndex = Math.floor(Math.random() * songs.length);
    }
  } else {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  }
  loadSong(currentSongIndex);
}

function toggleShuffle() {
  shuffleMode = !shuffleMode;
  if (shuffleMode) {
    shuffleToggle.classList.remove("inactive");
    shuffleToggle.classList.add("active");
    shuffledIndexes = generateShuffledIndexes();
  } else {
    shuffleToggle.classList.remove("active");
    shuffleToggle.classList.add("inactive");
  }
}

function generateShuffledIndexes() {
  let indexes = Array.from({ length: songs.length }, (_, index) => index);
  for (let i = indexes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }
  return indexes;
}

function togglePlaylist() {
  playlist.classList.toggle("active");
}

function createPlaylist() {
  const playlist = document.getElementById("playlist");

  const playlistItems = songs.map((song, index) => {
    const playlistItem = document.createElement("div");
    playlistItem.classList.add("playlist-item");
    playlistItem.innerHTML = `
      <img src="${song.image}" alt="${song.title}" class="playlist-item-image">
      <div class="playlist-item-info">
        <div class="playlist-item-title">${song.title}</div>
        <div class="delete-icon" title="Delete song">
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    `;

    const deleteIcon = playlistItem.querySelector(".delete-icon");
    deleteIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteSong(index);
    });

    playlistItem.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(currentSongIndex);
      togglePlaylist();
    });

    return playlistItem;
  });

  playlist.append(...playlistItems);
}

function addSong() {
  const titleInput = document.getElementById("song-title-input").value.trim();
  const imageInput = document.getElementById("song-image-input").value.trim();
  const pathInput = document.getElementById("song-path-input").value.trim();

  if (!titleInput || !imageInput || !pathInput) {
    alert("Please fill in all fields.");
    return;
  }

  // Create new 
  const newSong = {
    title: titleInput,
    image: imageInput,
    path: pathInput,
  };

  // Add song 
  songs.push(newSong);

  // Clear input fields
  document.getElementById("song-title-input").value = "";
  document.getElementById("song-image-input").value = "";
  document.getElementById("song-path-input").value = "";

  const playlist = document.getElementById("playlist");
  playlist.innerHTML = "";
  createPlaylist();
}

// delete song
function deleteSong(index) {
  songs.splice(index, 1);
  const playlist = document.getElementById("playlist");
  playlist.innerHTML = "";

  createPlaylist();
}

createPlaylist();

audio.addEventListener("ended", () => {
  nextSong();
});

window.addEventListener("load", () => {
  loadSong(currentSongIndex);
});
