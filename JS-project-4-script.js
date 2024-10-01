/*
Title: Rock, Paper, Scissors





Important Program Elements Used: 

two players
classes
location.reload
regex
HTML/CSS
html DOM
onclick
array
new Date object
onload
do while
localStorage
background music
precedence
string trim
typeof
console table





Summary: 
This program allows two people to play rock, paper, scissors against a bot, or you can play agaisnt another player.
*/





//Start of functions





//Start of function for one player 
/*
Summary: This function is the master funtion for one player and when called starts everything else for player versus computer 
@parms: None
@return: None
*/
function playGameOne() {
  backGroundMusic();//do'er
  resetValues(1);//setter
  playersReady();//getter

  
  do {
    gameSelection(1);//setter
    computerSelection();//setter
    gameLogic();//do'er
  } while ((playerOne.Wins != 2) && (playerTwo.Wins != 2));

  
  gameEnd();//do'er
}//End of function for one player





//Start of function for two player
/*
Summary: This function is the play game function for one player versus another player
@parms: None
@return: None
*/
function playGameTwo() {
  backGroundMusic();//do'er
  resetValues(2);//setter
  playersReady();//getter

  
  do {
    gameSelection(1);//setter
    gameSelection(2);//setter
    gameLogic();//do'er
  } while ((playerOne.Wins != 2) && (playerTwo.Wins != 2));

  
  gameEnd()//do'er
}//End of function for two player





//Start of function for intro 7-part ui/ux
/*
Summary: This function prints out all of the ui/ux for the whole program
@parms: None
@return: None
*/
function sevenUiUx() {
  console.log(" :::====  :::====  :::===== :::  ===      :::====  :::====  :::====  :::===== :::====       :::===  :::===== ::: :::===  :::===  :::====  :::====  :::=== ");//title
  console.log(" :::  === :::  === :::      ::: ===       :::  === :::  === :::  === :::      :::  ===      :::     :::      ::: :::     :::     :::  === :::  === :::    ");//title
  console.log(" =======  ===  === ===      ======        =======  ======== =======  ======   =======        =====  ===      ===  =====   =====  ===  === =======   ===== ");//title
  console.log(" === ===  ===  === ===      === ===       ===      ===  === ===      ===      === ===           === ===      ===     ===     === ===  === === ===      ===");//title
  console.log(" ===  ===  ======   ======= ===  ===      ===      ===  === ===      ======== ===  ===      ======   ======= === ======  ======   ======  ===  === ====== ");//title
  console.log("Hello! How are you today? Welcome to rock paper scissors!"); //Welcome
  console.log("Do you like the famous game rock paper scissors? If so, you can use this website to play it whenever you want! You don't even need a friend!"); //Intro
  console.log("To use this website, please click either the one player, or two player logos. You will then be prompted to enter a username, if you do not want to, you can just use the default of guest. After that, you will be told to enter your selection of rock, paper, or scissors. Keep following the prompts until someone wins. Keep in mind that all games are a best of three.");//How to use the website
  console.log("How do you play Rock, Paper, Scissors? To play, two people (or one if you are playing against the computer) choose either rock, paper, or scissors. The winner is then decided based on what you choose. The first person to win two rounds wins the game. Below, is a chart displaying all the ways to win.");//introduction to the program for the user.
  console.table(["Rock beats scissors", "Scissors beats paper", "Paper beats rock"]);//how to win the game
  console.log("Thank you for visiting our website, please come again to play rock paper scissors!");//Thank you / outro
}//End of function for intro 7-part ui/ux





//Start of function for resetting values
/*
Summary: This resets all global variables, calls username function, and define computer name
@parms: playerCount-checks for one player or two player
@return: None
*/
function resetValues(playerCount) {
  playerOne.Name = getName(1);
  (playerCount == 2) ? (playerTwo.Name = getName(2)) : (playerTwo.Name = "Computer");
  playerOne.Selection = "";
  playerTwo.Selection = "";
  playerOne.Wins = 0;
  playerTwo.Wins = 0;
  arrayCounter = 0;
}//End of function for resetting values





//Start of function to get user name
/*
Summary: This function gets user(s) name and saves player one's name
@parms: None
@return: None
*/
function getName(playerNumber) {
  let userSelect;


  //start of if checking which player is picking
  if (playerNumber == 1) {
    userSelect = localStorage.getItem("userName");
    //start of if checking if the user has a name in local storage
    if ((userSelect != 'undefined') && (userSelect != null)) {
      return userSelect;
      
    } else {
      localStorage.setItem("userName", prompt("Please enter your desired username.", "Guest"));

      
      userSelect = localStorage.getItem("userName");
      userSelect = userSelect.trim();


      //start of if checking the users name
      if (((typeof userSelect) == "string") && (userSelect != "") && (/\d/.test(userSelect) == false)) {
        console.log("You entered your name as: " + userSelect);

        
        return userSelect;
          
      } else {
        alert("Please enter a valid username");
      }//end of if checking the users name
    }//end of if checking if the user has a name in local storage
    
  } else if (playerNumber == 2) {
    //start of while loop waiting for user o select name
    while(true) {
      userSelect = prompt("Please enter your desired username.", "Guest");
      userSelect = userSelect.trim();
  

      //start of if checking the users name
      if (((typeof userSelect) == "string") && (userSelect != "") && (/\d/.test(userSelect) == false)) {
        console.log("You entered your name as: " + userSelect);

        
        return userSelect;
          
      } else {
        alert("Please enter a valid username");
      }//end of if checking the users name
    }//start of while loop waiting for user o select name
    
  } else {
    console.log("something went wrong...");
    location.reload;
  }//end of if checking which player is picking

  
}//End of function for get name





//Start of function for confirm start
/*
Summary: This function confirms the game start or lets the user cancel
@parms: None
@return: gameOn
*/
function playersReady() {
  let gameOn;


  gameOn = confirm("Are you ready to play?");

  // start of checking of user wants to contuine 
  if (gameOn == true) {
    console.log("Game is on!");
    
  } else {
    console.log("Game is off!");
    location.reload;
  }// end of checking of user wants to contuine 

  return gameOn;
}//End of function for comfirm start





//Start of function for user choice
/*
Summary: This function checks for player count and gets user's selection
@parms: userCount-checks for one or two player(s)
@return: promptResponse
*/
function gameSelection(userCount) {
  let promptResponse;


  (userCount == 1) ? (promptResponse = prompt(playerOne.Name + " please enter your selection.", "Rock, Paper, or Scissors")) : (promptResponse = prompt(playerTwo.Name + " please enter your selection.", "Rock, Paper, or Scissors"));
  promptResponse = promptResponse.toLowerCase();


  //start of switch checking user input for rps
  switch(promptResponse) {
    case "rock":
    case "roc":
    case "ro":
    case "r":
    case "0":
      promptResponse = "rock";
      break;

    case "paper":
    case "pape":
    case "pap":
    case "pa":
    case "p":
    case "1":
      promptResponse = "paper";
      break;

    case "scissors":
    case "scissor":
    case "sciss":
    case "scis":
    case "sci":
    case "sc":
    case "s":
    case "2":
      promptResponse = "scissors";
      break;

    default:
      alert("Please enter a valid selection.");
      gameSelection(userCount);
      break;
  }//end of switch checking user input for rps

  // start of if for checking player count
  if (userCount == 1) {
    playerOne.Selection = promptResponse;
    
  } else if (userCount == 2) {
    playerTwo.Selection = promptResponse;
    
  } else {
    console.log("something went wrong...");
    location.reload;
  }// end of if for checking player count

  return promptResponse;
}//End of function for user choice





//Start of function for random number
/*
Summary: generates random number 0-2
@parms: None
@return: Math.floor(Math.random() * 3)    -random number 0-2
*/
function generateRandomNumber() { //function to generate random number 
  return Math.floor(Math.random() * 3);
}//End of function for random number





//Start of function for computer choice
/*
Summary: uses random number generator to get 'computer' choice
@parms: None
@return: None
*/
function computerSelection() {
  let randomNumber;
  let computerChoices = ["rock", "paper", "scissors"];


  randomNumber = generateRandomNumber();

  
  playerTwo.Selection = computerChoices[randomNumber];
}//End of function for computer choice





//Start of function for determine winner 
/*
Summary: This function does the math/logic on who won the game based on user's inputs
@parms: None
@return: None
*/
function gameLogic() {
  // start of if for game logic
  if (playerOne.Selection == "rock") {
    //start of if for player two's selection
    if (playerTwo.Selection == "paper") {
      playerTwo.Wins++;

      
      console.log(playerTwo.Name + " wins.");
      console.log("The score is " + playerOne.Wins + "-" + playerTwo.Wins);
      
    } else if (playerTwo.Selection == "scissors") {
      playerOne.Wins++;

      
      console.log(playerOne.Name + " wins.");
      console.log("The score is " + playerOne.Wins + "-" + playerTwo.Wins);
      
    } else {
      console.log("Tie game.");
      console.log("The score is " + playerOne.Wins + "-" + playerTwo.Wins);
    }//end of if for player two's selection
    
  } else if (playerOne.Selection == "paper") {
    //start of if for player two's selection
    if (playerTwo.Selection == "scissors") {
      playerTwo.Wins++;

      
      console.log(playerTwo.Name + " wins.");
      console.log("The score is " + playerOne.Wins + "-" + playerTwo.Wins);
      
    } else if (playerTwo.Selection == "rock") {
      playerOne.Wins++;

      
      console.log(playerOne.Name + " wins.");
      console.log("The score is " + playerOne.Wins + "-" + playerTwo.Wins);
      
    } else {
      console.log("Tie game.");
      console.log("The score is " + playerOne.Wins + "-" + playerTwo.Wins);
    }//end of if for player two's selection
      
  } else if (playerOne.Selection == "scissors") {
    //start of if for player two's selection
    if (playerTwo.Selection == "rock") {
      playerTwo.Wins++;

      
      console.log(playerTwo.Name + " wins.");
      console.log("The score is " + playerOne.Wins + "-" + playerTwo.Wins);
      
    } else if (playerTwo.Selection == "paper") {
      playerOne.Wins++;

      
      console.log(playerOne.Name + " wins.");
      console.log("The score is " + playerOne.Wins + "-" + playerTwo.Wins);
      
    } else {
      console.log("Tie game.");
      console.log("The score is " + playerOne.Wins + "-" + playerTwo.Wins);
    }//end of if for player two's selection

  } else {
    console.log("Something went wrong...");
    location.reload;
  }// end of if for game logic

  document.getElementById("player-one-score").innerHTML = playerOne.Wins;
  document.getElementById("player-two-score").innerHTML = playerTwo.Wins;
}//End of function for determine winner 





//Start of function for game end
/*
Summary: This function displays the final results of the match.
@parms: None
@return: None
*/
function gameEnd() {
  console.log("Game over!");
  console.log("The final score is " + playerOne.Wins + "-" + playerTwo.Wins);

// start of if for wins
  if (playerOne.Wins > playerTwo.Wins) {
    console.log(playerOne.Name + " wins the game!");

  } else if (playerOne.Wins < playerTwo.Wins) {
    console.log(playerTwo.Name + " wins the game!");

  } else {
    alert("Please enter a valid selection.");
    gameSelection(userCount);
  }// end of if for game end
}//End of function for game end




//Start of function for current day
/*
Summary: gets the current day and prints to console
@parms: None
@return: None
*/
function getDate() {
  const currentDate = new Date();


  console.log(`Todays date is ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`);
}//end of function for current day





//Start of function for backround music
/*
Summary: uses song file to play backround music
@parms: None
@return: None
*/
function backGroundMusic() {
  let music = new Audio('song.mp3');

  
  music.play();
}//end of function for backround music





//End of functions





//Beginning of program





//Variable declaration
class userClass {
  Name
  Selection
  Wins
}


let playerOne = new userClass;
let playerTwo = new userClass;
//Variable declaration





//Start of main
sevenUiUx();//do'er
//End of main





//End of program





/*
Notes:

Simon: scoreboard, gameSelect, gameLogic, gameEnd, getName, playGameTwo, playerSelection, getDay, intro(uiux), music function, and format.

Sean: HTML, css, and resetValues.

Diego: playGameOne, generateRandomNumber, computerSelect, comments, test code, outro(uiux), notes, and playersReady.

Carter: semi colins, brackets, Rules(uiux) and bug fixes, music file.


add feedback !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
https://www.w3schools.com/js/default.asp





Test code:

 window.addEventListener('keydown' , (keyOne) => {

    if (keyOne.key == 'q') {
          
      console.log('working test')          
                             }  }  )    
  
   userInput = prompt("Please enter your choice." , "Rock Paper Scissors")

   if ((userInput === "Rock") || (userInput === "rock") || (userInput === "Paper") || (userInput === "paper") || (userInput === "Scissors") || (userInput === "scissors") 
      Code Below Not Working
   {
    
     console.log("still being made") }

       } else { alert("please enter a valid answer") 

let playerOneName = getName();
  let computerUser;
  let result;
  
  
  result = confirm("are you ready to play!");

  
  if (result == true) {
    playGameOne(); 


     if (result == true) {
    playGameOne(1);
  } else {
    location.reload;
  }
      }
*/