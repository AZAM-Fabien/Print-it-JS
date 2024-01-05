const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let dots = document.querySelector(".dots");
let slide_number = slides.length;

for (let i = 0; i < slide_number; i++) {
  let new_dots = `
    <div class="dot">
    </div>
    `;
  dots.innerHTML += new_dots;
}

let banner_img = document.querySelector(".banner-img");
let tagLine = document.getElementById("tagLine");
let slide_visible = 0;
let previous_slide = 0;
let dot = document.querySelectorAll(".dot");
dot[0].classList.add("dot_selected");
let last_slide = slide_number - 1;

let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", function () {
  if (slide_visible === 0) {
    slide_visible = last_slide;
    previous_slide = 0;
  } else {
    slide_visible -= 1;
    previous_slide = slide_visible + 1;
  }
  dot[slide_visible].classList.add("dot_selected");
  dot[previous_slide].classList.remove("dot_selected");

  banner_img.src = "./assets/images/slideshow/" + slides[slide_visible].image;
  tagLine.innerHTML = slides[slide_visible].tagLine;

  console.log("Vous avez cliqué sur la fleche gauche");
  console.log(slide_visible + " " + previous_slide);
  console.log(slides[slide_visible].tagLine);
});

let arrow_right = document.getElementById("arrow_right");
arrow_right.addEventListener("click", function () {
  if (slide_visible === last_slide) {
    slide_visible = 0;
    previous_slide = 3;
  } else {
    slide_visible += 1;
    previous_slide = slide_visible - 1;
  }
  dot[slide_visible].classList.add("dot_selected");
  dot[previous_slide].classList.remove("dot_selected");

  banner_img.src = "./assets/images/slideshow/" + slides[slide_visible].image;
  tagLine.innerHTML = slides[slide_visible].tagLine;

  console.log("Vous avez cliqué sur la fleche droite");
  console.log(slide_visible + " " + previous_slide);
});
