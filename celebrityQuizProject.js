/* Code below sets up the the game */
let questionArray = [
  ['Who has played the role of Mark Zuckerberg?', 'Jesse Eisenberg', 'A'],
  ['Who was sued by Amber Heard?', 'Johnny Depp', 'B'],
  ['Who had an NFT made of them dunking?', 'LeBron James', 'C'],
  ['Who is known for their chess aptitude?', 'Magnus Carlsen', 'D'],
  ['Who has played the role of Batman?', 'Christian Bale', 'E'],
  ['Who made an offer to buy Twitter?', 'Elon Musk', 'F'],
  ['Who has pursued space exploration, besides Elon Musk?', 'Jeff Bezos', 'G'],
  ['Who created Bitcoin?', 'Satoshi Nakamoto', 'H'],
  ['Popular canadian rapper?', 'Drake', 'I']
]; //an array is just a list of something

let imageArray = [
  'jesse.jpg',
  'depp.jpg',
  'lebron.jpg',
  'magnus.jpg',
  'bruce.jpg',
  'musk.jpg',
  'bezos.jpg',
  'satoshi.jpg',
  'drake.jpg'
]
let slot1 = document.getElementById('sl1');
let slot2 = document.getElementById('sl2');
let slot3 = document.getElementById('sl3');
let slot4 = document.getElementById('sl4');
let slot5 = document.getElementById('sl5');
let slot6 = document.getElementById('sl6');
let slot7 = document.getElementById('sl7');
let slot8 = document.getElementById('sl8');
let slot9 = document.getElementById('sl9');
let slotArray = [slot1,slot2,slot3,slot4,slot5,slot6,slot7,slot8,slot9]; //all of slot variables connects to a data cell

const startingAmount = questionArray.length; //equals 9 because there are initially 9 objects
let numOfQuestions = startingAmount; //equals 9 because that is what the startingAmount variable equals
let score = 0;
let questionTable = document.getElementById('questions'); //connects to the question table from the HTML
let answerTable = document.getElementById('answers'); //connects to the answer table from the HTML
let startButton = document.getElementById('start'); //connects to the start button from the HTML
/* Code above sets up the the game */

function showQuestion(){
  if(numOfQuestions!==0){

    let option = Math.floor(Math.random()*(numOfQuestions));
    let question = questionArray[option][0];
    let answer = questionArray[option][2];
    answer = answer.toLowerCase();
    let userAnswer = window.prompt(question, 'type in a,b,c,d,e,f,g,h, or i');
    userAnswer = userAnswer.toLowerCase();
    while(userAnswer!==='a' && userAnswer!==='b' && userAnswer!==='c' && userAnswer!==='d' && userAnswer!==='e' && userAnswer!==='f' 
          && userAnswer!==='g' && userAnswer!==='h' && userAnswer!==='i'){
      userAnswer = window.prompt(question, 'ERROR: must type in a,b,c,d,e,f,g,h, or i');
      userAnswer = userAnswer.toLowerCase();
    }
    if(userAnswer===answer){
      score++;
    }
    numOfQuestions--;
    questionArray.splice(option,1);
  }
}

function startTimer(){
  let i = 0;
  slotArray.forEach(load);
  function load(slot){ /*function is used to load the data cells with the answers from the answerArray above*/
    slot.innerHTML += `${questionArray[i][2]}.<br>${questionArray[i][1]}`;
    slot.querySelector('img').src = imageArray[i];
    i++;
  }
  questionTable.style.display = 'table'; /*makes the table visible because it is initially hidden*/
  answerTable.style.display = 'table'; /*makes the table visible because it is initially hidden*/
  startButton.style.display = 'none'; /*makes the start button hidden so that it is not clicked again*/
  let timeLeft = 10; /*the starting amount of seconds for the timer*/
  let element = document.getElementById('timer'); /*connects to an H3 tag used to show how many seconds are left*/
  let timerId = setInterval(function(){ /*a function used to decrement by 1 from the seconds and used to reset the timer after -1 seconds is reached*/
    if(timeLeft === -1){
      console.log(score);
      console.log(startingAmount);
      if(score===startingAmount){
        window.alert('YOU WON');
      } else{
        window.alert('YOU LOST');
      }
      clearInterval(timerId); /*important because this ensures that the timer is stopped*/
      questionTable.style.display = "none";
      answerTable.style.display = "none";
      questionArray = [['Who has played the role of Mark Zuckerberg?', 'Jesse Eisenberg', 'A'],['Who was sued by Amber Heard?', 'Johnny Depp', 'B'],['Who had an NFT made of them dunking?', 'LeBron James', 'C'],['Who is known for their chess aptitude?', 'Magnus Carlsen', 'D'],['Who has played the role of Batman?', 'Christian Bale', 'E'],['Who made an offer to buy Twitter?', 'Elon Musk', 'F'],['Who has pursued space exploration, besides Elon?', 'Jeff Bezos', 'G'],['Who created Bitcoin?', 'Satoshi Nakamoto', 'H'],['Popular canadian rapper?', 'Drake', 'I']];
      answerArray = ['Jesse Eisenberg','Johnny Depp','LeBron James','Magnus Carlsen','Christian Bale','Elon Musk','Jeff Bezos','Satoshi Nakamoto','Drake'];
      numOfQuestions = startingAmount;
      score = 0;
      startButton.style.display = "block";
      element.innerHTML = '';
      slot1.innerHTML = '<img src="" width="65" height="55"><br>';
      slot2.innerHTML = '<img src="" width="65" height="55"><br>';
      slot3.innerHTML = '<img src="" width="65" height="55"><br>';
      slot4.innerHTML = '<img src="" width="65" height="55"><br>';
      slot5.innerHTML = '<img src="" width="65" height="55"><br>';
      slot6.innerHTML = '<img src="" width="65" height="55"><br>';
      slot7.innerHTML = '<img src="" width="65" height="55"><br>';
      slot8.innerHTML = '<img src="" width="65" height="55"><br>';
      slot9.innerHTML = '<img src="" width="65" height="55"><br>';
    } else{
      element.innerHTML = `${timeLeft} seconds remaining<br>score = ${score}/${startingAmount}`;
      timeLeft--;
    }
  }, 1000);
}
