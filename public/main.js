

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

const slideContainer = document.querySelectorAll("#modal-pictures div");

slideContainer.forEach(element => {
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

function activateModal() {
  openModal();
  currentSlide(1);
};

function openModal() {
  myModal.style.display = "block";
}

function closeModal() {
  console.log("close");
  myModal.style.display = "none";
}

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
  var slides = document.getElementsByClassName("slide-container");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  
}

document.querySelectorAll(".grid-item").forEach(item => {
  item.addEventListener('click', activateModal);
});

window.addEventListener("click", function(event) {
  if (event.target.className == 'slide-container') {
    myModal.style.display = "none";
  }
});
  