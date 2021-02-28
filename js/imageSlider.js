var arrayImages = [
  "images/slider_images/dustin_poirier.jpg",
  "images/slider_images/israel_adesanya.jpg",
  "images/slider_images/jorge_masvidal.jpg",
  "images/slider_images/khabib.jpg",
];

var img;
var domArray = [];
var domArrayThumb = [];
var k = 0;
var imgThumb;

var imageContainer = document.createElement("div");
imageContainer.setAttribute("id", "image-container");
document.querySelector("main").appendChild(imageContainer);

var imageContainerThumb = document.createElement("div");
imageContainerThumb.setAttribute("id", "image-container__thumbnails");
document.querySelector("main").appendChild(imageContainerThumb);

var container = document.querySelector("#image-container");
var thumbContainer = document.querySelector("#image-container__thumbnails");

var imageFirstDisplayed = document.createElement("img");
imageFirstDisplayed.setAttribute("src", arrayImages[0]);
imageContainer.appendChild(imageFirstDisplayed);

function slideImages() {
  if (
    container.childNodes.length === 1 &&
    container.firstChild !== imageFirstDisplayed
  ) {
    container.removeChild(domArray[k]);
    domArrayThumb[k].classList.remove("frame");
    if (k < domArray.length - 1) {
      container.appendChild(domArray[k + 1]);
      k++;

      domArrayThumb[k].classList.add("frame");
    } else if (k >= domArray.length - 1) {
      k = 0;
      container.appendChild(domArray[k]);

      domArrayThumb[k].classList.add("frame");
    }
  } else if (
    container.childNodes.length === 1 &&
    container.firstChild === imageFirstDisplayed
  ) {
    container.removeChild(imageFirstDisplayed);
    domArrayThumb[k].classList.remove("frame");

    container.appendChild(domArray[k + 1]);
    k++;

    domArrayThumb[k].classList.add("frame");
  }
}

function intervalStart(slider) {
  setInterval(() => {
    slider();
  }, 5000);
}

var sliderStart = function (sliderImages) {
  arrayImages.forEach((element) => {
    img = document.createElement("img");
    img.setAttribute("src", element);
    domArray[domArray.length] = img;
  });

  intervalStart(sliderImages);
};

var pictureDisplayThumnails = function () {
  for (var i = 0; i < arrayImages.length; i++) {
    img = document.createElement("img");
    img.setAttribute("src", arrayImages[i]);
    domArrayThumb[domArrayThumb.length] = img;
  }
  domArrayThumb[0].classList.add("frame");

  domArrayThumb.forEach((element) => {
    imageContainerThumb.appendChild(element);
  });
};

sliderStart(slideImages);
pictureDisplayThumnails();

//function for sliding box by its arbitrarily width
/*
var pixelIncrementTwo = "500px";
var pixeIncementThree = "600px";
var pixelIncrementFour = "700px";

function slideImages() {
  if (
    container.childNodes.length === 1 &&
    container.firstChild !== imageFirstDisplayed
  ) {
    container.removeChild(domArray[k]);
    domArrayThumb[k].classList.remove("frame");
    if (k < domArray.length - 1) {
      container.appendChild(domArray[k + 1]);

      if (imageContainer.style.marginLeft === "auto")
        imageContainer.style.marginLeft = pixelIncrementTwo;
      else if (imageContainer.style.marginLeft === pixelIncrementTwo) {
        imageContainer.style.marginLeft = pixeIncementThree;
      } else if (imageContainer.style.marginLeft === pixeIncementThree) {
        imageContainer.style.marginLeft = pixelIncrementFour;
      }
      k++;

      domArrayThumb[k].classList.add("frame");
    } else if (k >= domArray.length - 1) {
      k = 0;
      container.appendChild(domArray[k]);

      imageContainer.style.margin = "0 auto";

      domArrayThumb[k].classList.add("frame");
    }
  } else if (
    container.childNodes.length === 1 &&
    container.firstChild === imageFirstDisplayed
  ) {
    container.removeChild(imageFirstDisplayed);
    domArrayThumb[k].classList.remove("frame");

    container.appendChild(domArray[k + 1]);

    imageContainer.style.marginLeft = pixelIncrementTwo;

    k++;

    domArrayThumb[k].classList.add("frame");
  }
}*/
