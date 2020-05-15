const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const line = document.querySelectorAll(".line");
let slideIndex = 1;
showSlides(slideIndex);
let slideIndex2 = 1;
showSlides2(slideIndex2);

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function plusSlides2(no) {
  showSlides2((slideIndex2 += no));
}

function currentslide(n) {
  showSlides((slideIndex = n));
}

function currentslide2(no) {
  showSlides2((slideIndex2 = no));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slidercookimgs");
  let dots = document.getElementsByClassName("cdot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" cookactive", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " cookactive";
}

function showSlides2(no) {
  let io;
  let slides2 = document.getElementsByClassName("slidertravelimgs");
  let dots2 = document.getElementsByClassName("tdot");
  if (no > slides2.length) {
    slideIndex2 = 1;
  }
  if (no < 1) {
    slideIndex2 = slides2.length;
  }
  for (io = 0; io < slides2.length; io++) {
    slides2[io].style.display = "none";
  }
  for (io = 0; io < dots2.length; io++) {
    dots2[io].className = dots2[io].className.replace(" travelactive", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " travelactive";
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function myFunction2() {
  var modal = document.getElementById("myModal");
  modal.classList.toggle("show");
}

function myFunction3() {
  var linkmodale = document.getElementById("mylinkmodal");
  var linkmodale2 = document.getElementById("mylinkmodal2");
  linkmodale.classList.toggle("show");
  linkmodale2.classList.toggle("show");
}

function myFunction4() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
  alert("link Copied");
}

const likeButton = document.querySelector(".likebutton");

likeButton.addEventListener("click", () => {
  likeButton.classList.add("open");
});
