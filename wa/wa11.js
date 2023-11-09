const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

var imgArray = ['flower1.jpg', 'ocean2.jpg','panda3.jpg','mountain4.jpg','coffee5.jpg']

/* Declaring the alternative text for each image file */

var altDict = {
    'flower1.jpg' : "a flower",
    'ocean2.jpg' : "the ocean",
    'panda3.jpg' : "a panda",
    'mountain4.jpg' : "a mountain",
    'coffee5.jpg' : "a coffee shop",
}

/* Looping through images */

for(img of imgArray) {
    const newImage = document.createElement('img')
    newImage.setAttribute('src', `${img}`);
    newImage.setAttribute('alt', altDict[img]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt
});
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
const btnClass = btn.getAttribute('class');

if (btnClass  === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
} else {
    btn.setAttribute('class','dark');
    btn.textContent= 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
});