//https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

//DOM Selectors

//data
const data = [
    {
      image: './images/drink.jpg',
      text: "I'm Thirsty"
    },
    {
      image: './images/food.jpg',
      text: "I'm Hungry"
    },
    {
      image: './images/tired.jpg',
      text: "I'm Tired"
    },
    {
      image: './images/hurt.jpg',
      text: "I'm Hurt"
    },
    {
      image: './images/happy.jpg',
      text: "I'm Happy"
    },
    {
      image: './images/angry.jpg',
      text: "I'm Angry"
    },
    {
      image: './images/sad.jpg',
      text: "I'm Sad"
    },
    {
      image: './images/scared.jpg',
      text: "I'm Scared"
    },
    {
      image: './images/outside.jpg',
      text: 'I Want To Go Outside'
    },
    {
      image: './images/home.jpg',
      text: 'I Want To Go Home'
    },
    {
      image: './images/school.jpg',
      text: 'I Want To Go To School'
    },
    {
      image: './images/grandma.jpg',
      text: 'I Want To Go To Grandmas'
    }
  ];

//create a box for each element of data array

// create box function
function createBox(item) {

}

//init speech synth
const message = new SpeechSynthesisUtterance();

// Store the voices
let voices = [];

function getVoices() {

}

// set the text
function setText(text){

}

//speak the text
function speakText(){
    
}

// voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Toggle text box

//close button

// select voice

// read text button

// populate with voices initialy
