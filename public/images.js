const GSheetReader = require("g-sheets-api");

const options = {
  sheetId: "11jnjmKkUza3xEujPEhzXCkXX6taZysd8uCbylYTbpV8",
  sheetNumber: 2,
  returnAllResults: false,
  filter: {
    Colección: "Pai pais",
  },
  // filterOptions: {
  //   operator: 'or',
  //   matching: 'loose'
  // }
};

const importedImages = document.querySelector("#imported-images");

GSheetReader(
  options,
  (results) => {
    console.log(results);
    // results.forEach((object, index) => {
    //   importedImages.appendChild(`<img id="${index}" src='${object.enlace}'>`);
    // });
  },
  (error) => {
    console.log(error);
  }
);
