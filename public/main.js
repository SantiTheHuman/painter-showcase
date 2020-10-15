// Home 

const gridSection = document.getElementById("content");
const header = document.querySelector('header');
const galleryBackground = document.querySelector('.gallery-background');



window.addEventListener('scroll', function() {
  let scrollFromTop = Math.floor(window.pageYOffset);
  if (scrollFromTop < 165) {
    galleryBackground.className = 'gallery-background';
    header.classList.remove('horizontal');
    gridSection.style.top = '0px';
  } else {
    galleryBackground.className = 'gallery-background white';
    header.className = 'horizontal';
    gridSection.style.top = '200px';
  }
});

// Gallery

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

gridSection.innerHTML = compiledHtml;

document.getElementById("modal-pictures").innerHTML = compiledHtml;

const slideContainers = document.querySelectorAll("#modal-pictures div");

slideContainers.forEach(element => {
  element.className = "slide-container";
});


// ~Modal slideshow~

const gridItems = document.querySelectorAll(".grid-item img");

const slides = document.querySelectorAll(".slide-container");

let slideIndex = 1;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


for (i = 0; i < gridItems.length; i++) {
  gridItems[i].className = i;
};

function activateModal() {
  slideIndex = parseInt(this.className);
  openModal();
  showSlides();
};

function openModal() {
  myModal.style.display = "block";
};

function closeModal() {
  myModal.style.display = "none";
};

function changeSlide(n) {
  // console.log(n);
  slideIndex = n;
  if (n > slides.length - 1) {slideIndex = 0};
  if (n < 0) {slideIndex = slides.length - 1};
  showSlides();
};

gridItems.forEach(item => {
  item.addEventListener('click', activateModal);
});

function showSlides() {
 
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // console.log(slides[slideIndex]);
  slides[slideIndex].style.display = "block";

  console.log(slideIndex);
};



prevButton.addEventListener('click', function() {changeSlide(slideIndex - 1)});
nextButton.addEventListener('click', function() {changeSlide(slideIndex + 1)});

window.addEventListener("click", function(event) {
  if (event.target.className == 'slide-container') {
    closeModal();
  }
});
  