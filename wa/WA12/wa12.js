const newBtn = document.querySelector('#js-new-fact').addEventListener('click', getQuote);

const endpoint = 'https://catfact.ninja/fact';

// Reused code from ICA 12 
async function getQuote() {
   // console.log('Test');

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displayQuote(json['fact'])
    }
    catch(err){
        console.log(err);
        alert('Failed to fetch new fact');
    }
}

// Access to a separate AIP for the images
function catImage (){
    let image = document.getElementById("image-cat");
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(json => image.src = json[0].url);
}

function btnClick(){
    let button = document.getElementById("new-cat-btn");
    button.addEventListener("click", catImage);
}

document.addEventListener("DOMContentLoaded",() => {
    catImage();
    btnClick();
})

// Fact Code
function displayQuote(fact) {
    const factTxt = document.querySelector('#js-fact-text');
    factTxt.textContent = fact;
}
getQuote();
catImage();
