window.onload = function () {
  DefaultImage();
};

function DefaultImage() {
  let defaultImages = [
    "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/022/456/464/small/a-wooden-dock-with-a-mountain-in-the-background-ai-generated-photo.jpg",
  ];

  let imageContainer = document.getElementById("image");

  defaultImages.forEach((url, index) => {
    let img = createImage(url, `Default Image ${index + 1}`);
    imageContainer.appendChild(img);
  });
}

function addImage() {
  let url = document.getElementById("online-image").value.trim();

  if (url === "") {
    alert("Please enter a valid URL for the online image.");
    return;
  }

  let img = createImage(url, "Online Image");
  document.getElementById("image").appendChild(img);

  document.getElementById("online-image").value = "";
}

function createImage(src, alt) {
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.classList.add("default-image");

  img.addEventListener("click", function () {
    openModal(src);
  });

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", function () {
    imgContainer.remove();
  });

  imgContainer.appendChild(img);
  imgContainer.appendChild(deleteBtn);

  return imgContainer;
}

function openModal(src) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = src;
}

window.onclick = function (event) {
  let modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
