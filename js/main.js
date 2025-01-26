const deviceWidth = window.screen.width * window.devicePixelRatio;
console.log("Device Width in Pixels:", deviceWidth);
if (deviceWidth >= 3840) {
  // Load 4K stylesheet
  document.write('<link rel="stylesheet" href="style.css">');
} else if (deviceWidth >= 1920 && deviceWidth < 3840) {
  // Load 1080p stylesheet
  document.write('<link rel="stylesheet" href="style2.css">');
} else {
  // Load default stylesheet
  document.write('<link rel="stylesheet" href="style2.css">');
}

function scaleAllImages(scaleFactor) {
  // Select all <img> elements
  const images = document.querySelectorAll("img");

  // Loop through each image and scale its dimensions
  images.forEach((img) => {
    img.width = img.width * scaleFactor;
    img.height = img.height * scaleFactor;
  });
}

function scaleAllVideos(scaleFactor) {
  // Select all <img> elements
  const vids = document.querySelectorAll("iframe");

  // Loop through each image and scale its dimensions
  vids.forEach((vid) => {
    vid.width = vid.width * scaleFactor;
    vid.height = vid.height * scaleFactor;
  });
}

function setElementSize() {
const deviceWidth = window.screen.width * window.devicePixelRatio;
const img = document.querySelectorAll('img');
const iframe = document.querySelectorAll('iframe');

if (deviceWidth >= 3840) {

} else if (deviceWidth >= 1920) {
// 1080p Resolution
scaleAllImages(0.75);
scaleAllVideos(0.7);
} 
}

// Call function on load and resize
window.addEventListener('load', setElementSize);
window.addEventListener('resize', setElementSize);


