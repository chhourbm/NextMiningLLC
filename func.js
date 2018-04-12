//SLIDESHOW Functions
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
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}
//END SLIDESHOW Functions

//Action Email
var frmvalidator  = new Validator("contactForm");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("comments","req","Please provide your email");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");

//Product detail tabs 
function productDetail(evt, productDetailTabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(productDetailTabName).style.display = "block";
    evt.currentTarget.className += " active";
}

//Product detail tabs1
function productDetail1(evt, productDetailTabName1) {
    // Declare all variables
    var i, tabcontent1, tablinks1;

    // Get all elements with class="tabcontent1" and hide them
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent1.length; i++) {
        tabcontent1[i].style.display = "none";
    }

    // Get all elements with class="tablinks1" and remove the class "active"
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks1.length; i++) {
        tablinks1[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(productDetailTabName1).style.display = "block";
    evt.currentTarget.className += " active";
}