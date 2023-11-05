const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 90 fahrenheit outside, so :insertx: went on an adventure. When they got to :inserty:, they tripped and then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: is their crush and thoguht it was funny. ";

var insertX = ["Mike Wazowski", "Lightning McQueen", "Ariel"];

var insertY = ["the school cafeteria", "the beach", "Cu Boulder"];

var insertZ = ["fell into the toilet", "ate a hotdog" ,"flew away on a pidgeon"];


randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    const temperature =  Math.round((94-32) * (5/9));

    newStory = newStory.replace("90 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}