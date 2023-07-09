function toggleClick(){
	var navbar = document.getElementById("navbar");
  navbar.style.transform = "translateY(-70px)"

}

function toggleclose(){
	var scroll = document.querySelector(".nav-deg");
  scroll.style.transform = "translateY(-1000px)"
}

function toggledown(){
    var down = document.getElementById("down");
    var down1 = document.getElementById("down1");
    var down2 = document.getElementById("down2");
    var down3 = document.getElementById("down3");
    var down4 = document.getElementById("down4");
    var up = document.getElementById("up");
    var up1 = document.getElementById("up1");
    var up2 = document.getElementById("up2");
    var up3 = document.getElementById("up3");
    var up4 = document.getElementById("up4");
    down.style.display = "none";
    down1.style.display = "flex";
    down2.style.display = "flex";
    down3.style.display = "flex";
    down4.style.display = "flex";
    up.style.display = "block"
    up1.style.display = "none"
    up2.style.display = "none"
    up3.style.display = "none"
    up4.style.display = "none"
}

function toggledown1(){
    var down = document.getElementById("down");
    var down1 = document.getElementById("down1");
    var down2 = document.getElementById("down2");
    var down3 = document.getElementById("down3");
    var down4 = document.getElementById("down4");
    var up = document.getElementById("up");
    var up1 = document.getElementById("up1");
    var up2 = document.getElementById("up2");
    var up3 = document.getElementById("up3");
    var up4 = document.getElementById("up4");
    down.style.display = "flex";
    down1.style.display = "none";
    down2.style.display = "flex";
    down3.style.display = "flex";
    down4.style.display = "flex";
    up.style.display = "none"
    up1.style.display = "block"
    up2.style.display = "none"
    up3.style.display = "none"
    up4.style.display = "none"
}

function toggledown2(){
   var down = document.getElementById("down");
    var down1 = document.getElementById("down1");
    var down2 = document.getElementById("down2");
    var down3 = document.getElementById("down3");
    var down4 = document.getElementById("down4");
    var up = document.getElementById("up");
    var up1 = document.getElementById("up1");
    var up2 = document.getElementById("up2");
    var up3 = document.getElementById("up3");
    var up4 = document.getElementById("up4");
    down.style.display = "flex";
    down1.style.display = "flex";
    down2.style.display = "none";
    down3.style.display = "flex";
    down4.style.display = "flex";
    up.style.display = "none"
    up1.style.display = "none"
    up2.style.display = "block"
    up3.style.display = "none"
    up4.style.display = "none"
}

function toggledown3(){
    var down = document.getElementById("down");
    var down1 = document.getElementById("down1");
    var down2 = document.getElementById("down2");
    var down3 = document.getElementById("down3");
    var down4 = document.getElementById("down4");
    var up = document.getElementById("up");
    var up1 = document.getElementById("up1");
    var up2 = document.getElementById("up2");
    var up3 = document.getElementById("up3");
    var up4 = document.getElementById("up4");
    down.style.display = "flex";
    down1.style.display = "flex";
    down2.style.display = "flex";
    down3.style.display = "none";
    down4.style.display = "flex";
    up.style.display = "none"
    up1.style.display = "none"
    up2.style.display = "none"
    up3.style.display = "block"
    up4.style.display = "none"
}

function toggledown4(){
    var down = document.getElementById("down");
    var down1 = document.getElementById("down1");
    var down2 = document.getElementById("down2");
    var down3 = document.getElementById("down3");
    var down4 = document.getElementById("down4");
    var up = document.getElementById("up");
    var up1 = document.getElementById("up1");
    var up2 = document.getElementById("up2");
    var up3 = document.getElementById("up3");
    var up4 = document.getElementById("up4");
    down.style.display = "flex";
    down1.style.display = "flex";
    down2.style.display = "flex";
    down3.style.display = "flex";
    down4.style.display = "none";
    up.style.display = "none"
    up1.style.display = "none"
    up2.style.display = "none"
    up3.style.display = "none"
    up4.style.display = "block"
}

function toggleup(){
    var down = document.getElementById("down");
    var up = document.getElementById("up");
    down.style.display = "flex";
    up.style.display = "none"
}

function toggleup1(){
    var down1 = document.getElementById("down1");
    var up1 = document.getElementById("up1");
    down1.style.display = "flex";
    up1.style.display = "none"
}

function toggleup2(){
    var down2 = document.getElementById("down2");
    var up2 = document.getElementById("up2");
    down2.style.display = "flex";
    up2.style.display = "none"
    
}

function toggleup3(){
    var down3 = document.getElementById("down3");
    var up3 = document.getElementById("up3");
    down3.style.display = "flex";
    up3.style.display = "none"
}

function toggleup4(){
    var down4 = document.getElementById("down4");
    var up4 = document.getElementById("up4");
    down4.style.display = "flex";
    up4.style.display = "none"   
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}