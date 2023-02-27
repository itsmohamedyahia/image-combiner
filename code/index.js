const fs = require("fs");
const combineImage = require("combine-image");
const prompt = require("prompt-sync")({ sigint: true });
const storageDir = "../putImagesHere";
console.log();
const direction = getDirection();

const bareImages = fs.readdirSync(storageDir);

const images = addDirToImage(bareImages);

combineImage(images, { direction: direction }).then((img) => {
  // Save image as file
  img.write("../getOutputHere/combined.png", () => console.log("done"));
});

///////////////////////////////////////////////////////////
/////////////// ## FUNCTIONS ## //////////////////////////

// adds parent dir to images array files
function addDirToImage(files) {
  const dirFiles = [];
  files.forEach((file) => {
    file = "../putImagesHere/" + file;
    dirFiles.push(file);
  });
  return dirFiles;
}

// get direction of image combination from the user through the console
function getDirection() {
  // bug where if prompt string is too long, it repeats the prompt for each letter typed
  console.log(
    '\nCombine vertically or horizontally? Type "ver" for vertically or "hor" for horizontally. DONT TYPE THE QUOTES, just the 3 letters\n'
  );
  const direction = prompt("Your Input >> ");

  if (direction !== "ver" && direction !== "hor") {
    console.log("Again, Check your input");
    getDirection();
  }

  return direction === "ver" ? "row" : "col";
}
