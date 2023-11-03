// HTMl References
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Randomize 
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}
// Variable to declare 
let storyText = "It was -45 fahrenheit outside, so :insertx: went for a drive. When they got out of the car at :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was an extremely cold day.";
const insertX = ["SpongeBob SquarePants", "Darth Vader", "Cinderella"];
const insertY = ["the Zoo","Target", "the Grand Canyon"];
const insertZ = ["crystalized, then shattered","turned into a snowman", "turned into a slug and crawled away"];

// Event listener
randomize.addEventListener('click',result);

// Method 
function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);


    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replaceAll('Bob',name);
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300 / 2.205) + " kilograms";
      const temperature =  `${Math.round((-45-32) * 5/9)} celsius`;
      newStory = newStory.replaceAll('300 pounds', weight);
      newStory = newStory.replaceAll('-45 fahrenheit', temperature);

    }
    
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }