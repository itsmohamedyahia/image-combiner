# Image Combiner

Image Combiner is a Node.js program that takes a number of images and returns a single combined image file which includes a horizontal or vertical list of all the images. It mainly uses the [combine-image](https://www.npmjs.com/package/combine-image) library for combining images which is based on the [jimp](https://www.npmjs.com/package/jimp) library for image processing.

## Installation

To use Image Combiner, you must have Node.js installed on your computer. You can download Node.js from the official website: https://nodejs.org/en/

To install Image Combiner, clone the repository from GitHub and install the dependencies using `npm install` command in your terminal.

```
git clone https://github.com/yourusername/image-combiner.git
cd image-combiner
npm install
```

## Usage

To use Image Combiner, put the images you want to be combined into the `putImagesHere` directory replacing the `Blank.jpeg` image there (i.e delete `Blank.jpeg`), then `cd` into the `code` directory and run `npm start`. You will be prompted whether you want the images to be combined vertically or horizontally, then the program will begin combining the image and after it's done, You will get a `done` message in the console.

```
# following earlier instructions, put your images and delete Blank.jpeg using the gui
# or using the terminal below

mv image1_absolute_path image2_absolute_path image3_absolute_path /putImagesHere
rm Blank.jpeg
```

```
# then

cd code/
npm start
```

## License

Image Combiner is licensed under the MIT License. See the `LICENSE` file for details.
