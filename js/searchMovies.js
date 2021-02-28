var movies = [
  { image: "images/bloodshot.jpg", name: "Bloodshot" },
  { image: "images/after.jpg", name: "After" },
  { image: "images/antman.jpg", name: "Antman" },
  { image: "images/beauty_and_the_beast.jpg", name: "Beauty and the Beast" },
  { image: "images/black_mirror.jpg", name: "Black mirror" },
  { image: "images/captain_marvel.jpg", name: "Captain Marvel" },
  { image: "images/grimsby.jpg", name: "Grimsby" },
  {
    image: "images/guardians_of_the_galaxy_vol_2.jpg",
    name: "Guardians of the Galaxy vol. 2",
  },
  { image: "images/lord_of_war.jpg", name: "Lord of War" },
  { image: "images/project_power.jpg", name: "Project Power" },
  {
    image: "images/star_wars_rogue_one.jpg",
    name: "Rogue One: A Star Wars Story",
  },
  { image: "images/Tesla.jpg", name: "Tesla" },
];

var movie = [];
var movieCard = [];
var moviePicture = [];
var moviePictureImg = [];
var movieName = [];
var closeIcon = [];

var error = document.createElement("p");
error.textContent = "Nothing is found! Reloading...";

var movieInput = document.createElement("input");
movieInput.setAttribute("type", "text");
movieInput.setAttribute("placeholder", "Search Movie");
document.querySelector("header").appendChild(movieInput);

var movieContainer = document.createElement("div");
movieContainer.setAttribute("id", "movie-container");
document.querySelector("main").appendChild(movieContainer);

var movieLoad = function () {
  for (var i = 0; i < movies.length; i++) {
    movie[i] = document.createElement("div");
    movie[i].classList.add("movie");
    document.querySelector("#movie-container").appendChild(movie[i]);

    movieCard[i] = document.createElement("div");
    movieCard[i].classList.add("movie__card");
    movie[i].appendChild(movieCard[i]);

    moviePicture[i] = document.createElement("div");
    moviePicture[i].classList.add("movie__card-img");
    movieCard[i].appendChild(moviePicture[i]);

    moviePictureImg[i] = document.createElement("img");
    moviePicture[i].appendChild(moviePictureImg[i]);
    moviePictureImg[i].setAttribute("src", movies[i].image);

    closeIcon[i] = document.createElement("div");
    closeIcon[i].classList.add("close");
    movieCard[i].appendChild(closeIcon[i]);

    movieName[i] = document.createElement("p");
    movieName[i].classList.add("name");
    movieCard[i].appendChild(movieName[i]);
    movieName[i].textContent = movies[i].name;
  }
};

var checkValue = function () {
  var checkMark = false;

  for (var i = 0; i < movies.length; i++) {
    if (movies[i].name.toUpperCase() === movieInput.value.toUpperCase()) {
      checkMark = true;
      break;
    }
  }

  return checkMark;
};

var pressed = false;
document.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) pressed = true;
});

movieInput.addEventListener("change", function () {
  if (
    movieContainer.childNodes.length === 1 &&
    checkValue() === false &&
    pressed === true
  ) {
    if (movieContainer.firstChild && pressed === true) {
      {
        document
          .getElementById("movie-container")
          .replaceChild(error, movieContainer.firstChild);
        setTimeout(() => {
          movieContainer.removeChild(error);
          location.reload();
        }, 1000);
      }
    } else if (pressed === true) {
      movieContainer.replaceChild(error, error);
      setTimeout(() => {
        movieContainer.removeChild(error);
        location.reload();
      }, 1000);
    }
  } else if (
    movieContainer.childNodes.length > 1 &&
    checkValue() === false &&
    pressed === true
  ) {
    for (var k = 0; k < movies.length; k++) {
      movieContainer.removeChild(movie[k]);
    }

    movieContainer.appendChild(error);
    setTimeout(() => {
      movieContainer.removeChild(error);
      location.reload();
    }, 1000);
  } else if (
    movieContainer.childNodes.length === 1 &&
    checkValue() === true &&
    pressed === true
  ) {
    movieContainer.removeChild(movieContainer.firstChild);
    movieLoad();

    for (var k = 0; k < movies.length; k++) {
      if (movies[k].name.toUpperCase() !== movieInput.value.toUpperCase()) {
        movieContainer.removeChild(movie[k]);
      }
    }
  } else if (checkValue() === true && pressed === true) {
    for (var k = 0; k < movies.length; k++) {
      if (movies[k].name.toUpperCase() !== movieInput.value.toUpperCase()) {
        movieContainer.removeChild(movie[k]);
      }
    }
  }
});

var iconRemoved = function () {
  Array.from(closeIcon).forEach((removeIcon) => {
    removeIcon.addEventListener("click", () => {
      removeIcon.parentNode.remove();
    });
  });
};

movieLoad();
iconRemoved();
