const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */

const images = [
    "./images/pic1.JPG",
    "./images/pic2.JPG",
    "./images/pic3.jpeg",
    "./images/pic4.jpg",
    "./images/pic5.jpg",
];

/* Declaring the alternative text for each image file */

const alts = [
    "A green pine bush with a small red leaf on it", 
    "A tree with orange leaves with a red bush underneath it during sunset",
    "Purple aster flowers with long grass behind them",
    "Two purple pansy flowers in grass with a sidewalk behind them",
    "A close-up of a bush blossoming with pink cherry blossom like flowers"
];

/* Looping through images */

for (let i = 0; i < 5; i++) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", images[i]);
    newImage.setAttribute("alt", alts[i]);
    thumbBar.appendChild(newImage);
  
    newImage.addEventListener('click', () =>{
      displayedImage.src = newImage.src;
    });
}  

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () =>{
    const current = btn.getAttribute("class");
    if (current === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});