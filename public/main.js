

const context = {
  posts: [
    {
      date: "09.09.2020",
      image:
        "https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png",
      alt: "Pintando",
      title: "Electronic Keyboard",
      text:
        "A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.",
    },
    {
      date: "09.09.2020",
      image:
        "https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png",
      alt: "Pintando",
      title: "Electronic Keyboard",
      text:
        "A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.",
    },
    {
      date: "09.09.2020",
      image:
        "https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png",
      alt: "Pintando",
      title: "Electronic Keyboard",
      text:
        "A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.",
    },
  ],
  paintings: [
    {
      title: "Forest",
      year: "2010",
      image:
        "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      title: "Turbulence",
      year: "2017",
      image:
        "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Forest",
      year: "2010",
      image:
        "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      title: "Turbulence",
      year: "2017",
      image:
        "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Forest",
      year: "2010",
      image:
        "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      title: "Rage",
      year: "2019",
      image:
        "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Turbulence",
      year: "2017",
      image:
        "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Rage",
      year: "2019",
      image:
        "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    
    {
      title: "Rage",
      year: "2019",
      image:
        "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
   
    // {
    //   title: '',
    //   year: '',
    //   image: "",
    // },
  ],
};

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("content").innerHTML = compiledHtml;

document.getElementById("modal-pictures").innerHTML = compiledHtml;

const slideContainers = document.querySelectorAll("#modal-pictures div");

slideContainers.forEach(element => {
  element.className = "slide-container";
});


// Gallery
$(function() {
  var $container = $(".grid");
});

// var $grid = $('.grid');

// $grid.imagesLoaded().progress( function() {
//   $grid.masonry('layout');
// });


// Modal slideshow

const gridItems = document.querySelectorAll(".grid-item img");

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


for (i = 0; i < gridItems.length; i++) {
  gridItems[i].className = i + 1;
};

function activateModal() {
  openModal();
  showSlides(slideIndex = this.className);
};

function openModal() {
  myModal.style.display = "block";
};

function closeModal() {
  console.log("close");
  myModal.style.display = "none";
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  // console.log(n);
  showSlides(n);
  
};

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  // console.log(n);
  let i;
  let slides = document.getElementsByClassName("slide-container");
  // console.log(slides);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

  console.log(slideIndex);
};

gridItems.forEach(item => {
  item.addEventListener('click', activateModal);
});

prevButton.addEventListener('click', function() {plusSlides(slideIndex -= 1)});
nextButton.addEventListener('click', function() {plusSlides(slideIndex += 1)});

window.addEventListener("click", function(event) {
  if (event.target.className == 'slide-container') {
    closeModal();
  }
});
  