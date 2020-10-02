const context = {
  title: "Welcome to Musicon",
  body:
    "Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!",
  instruments: [
    {
      image:
        "https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png",
      name: "Electronic Keyboard",
      description:
        "A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.",
      price: "$1,999.00",
      sale: "$1,699.89",
    },
  ],
  paintings: [
    {
      title: "Forest memories",
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

// Gallery
