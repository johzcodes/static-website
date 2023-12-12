// Toggle navbar
var click_menu = document.getElementById('none');
var display = document.getElementById('display-not');
var close_nav = document.getElementById('unshow');

click_menu.addEventListener('click', ()=>{
  display.style.display = display.style.display === 'block' ? 'none' : 'block';
})
close_nav.addEventListener('click', ()=>{
  display.style.display = 'none'

})



// Active Links
var btn = document.getElementsByClassName('btn')
for(i = 0; i > btn.length; i++){
    btn[i].addEventListener('click', function() {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        this.className += " active";
    })
}

// testimonal

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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

//counter

function startRandomCounter() {
  const counterSection = document.getElementById('counterSection');
  const startTime = new Date().getTime();
  const endTime = startTime + 7000;

  function updateCounter() {
    const currentTime = new Date().getTime();
    if(currentTime <= endTime){
      const randomValue = Math.floor(Math.random() * (160 - 10 + 1)) + 10;
      counterSection.textContent = randomValue;
      setTimeout(updateCounter, 100);
    }else{
      counterSection.textContent = 'Counting Completed';
    }
    updateCounter();
  }
}
window.onload = startRandomCounter;