const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
   // console.log('Test');

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displayQuote(json['question'])
    }
    catch(err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    const questinonTxt = document.querySelector('#js-quote-text');
    questinonTxt.textContent = question;
}

getQuote();