// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
function keyPlay(e){
  e.target.style.backgroundColor = '#EF3C4A';
}
function keyReturn(e){
  e.target.style.backgroundColor = '';
}
// Write a named function with event handler properties
function eventStuff(note){
  note.onmousedown = function(){
    keyPlay(event);
  }
  note.onmouseup = function(){
    keyReturn(event);
  }
}
// Write a loop that runs the array elements through the function
notes.forEach(eventStuff);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button

nextOne.onclick = function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;

  let noteFive = document.getElementById('letter-note-five');
  let noteSix = document.getElementById('letter-note-six');

  noteFive.innerHTML = 'D';
  noteSix.innerHTML = 'C';
};

// Write anonymous event handler property and function for the second progress button

nextTwo.onclick = function(){
  nextThree.hidden = false;
  nextTwo.hidden = true;

  let wordFive = document.getElementById('word-five');
  let wordSix = document.getElementById('word-six');

  wordFive.innerHTML = 'DEAR';
  wordSix.innerHTML = 'FRI-';

  lastLyric.style.display = 'inline-block';

  let noteThree = document.getElementById('letter-note-three');
  let noteFour = document.getElementById('letter-note-four');
  let noteFive = document.getElementById('letter-note-five');
  let noteSix = document.getElementById('letter-note-six');

  noteThree.innerHTML = 'G';
  noteFour.innerHTML = 'E';
  noteFive.innerHTML = 'C';
  noteSix.innerHTML = 'B';
};

// Write anonymous event handler property and function for the third progress button

nextThree.onclick = function(){
  startOver.hidden = true;
  nextThree.hidden = false;

  let wordOne = document.getElementById('word-one');
  let wordTwo = document.getElementById('word-two');
  let wordThree = document.getElementById('word-three');
  let wordFour = document.getElementById('word-four');
  let wordFive = document.getElementById('word-five');
  let wordSix = document.getElementById('word-six');

  wordOne.innerHTML = 'HAP-';
  wordTwo.innerHTML = 'PY';
  wordThree.innerHTML = 'BIRTH';
  wordFour.innerHTML = 'DAY';
  wordFive.innerHTML = 'TO';
  wordSix.innerHTML = 'YOU!';

  let noteOne = document.getElementById('letter-note-one');
  let noteTwo = document.getElementById('letter-note-two');
  let noteThree = document.getElementById('letter-note-three');
  let noteFour = document.getElementById('letter-note-four');
  let noteFive = document.getElementById('letter-note-five');
  let noteSix = document.getElementById('letter-note-six');

  noteOne.innerHTML = 'F';
  noteTwo.innerHTML = 'F';
  noteThree.innerHTML = 'E';
  noteFour.innerHTML = 'C';
  noteFive.innerHTML = 'D';
  noteSix.innerHTML = 'C';

  lastLyric.style.display = 'none';
};

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}