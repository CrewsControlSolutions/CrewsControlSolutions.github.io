// opens the contact form
function openForm() {
    document.getElementById('myForm').style.display = 'block';
}

// closes the contact form
function closeForm() {
    document.getElementById('myForm').style.display = 'none';
}

// displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // take all elements with the class name 'mySlides' and store them in a variable
    var slides = document.getElementsByClassName('mySlides');
    // take all elements with the class name 'dot' and store them in a variable
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    // display the image in the slideshow
    slides[slideIndex - 1].style.display = 'block';
    // adds the active styling to the dot associated with the image
    dots[slideIndex - 1].className += ' active';
}