/* We are just describe the Global variables here */

var scores, roundScore, activePlayer, gamePlaying;

init();//here we call the function that we defined at line number 116
//So here we are not repeating our code means DRY(Do not repeat yourself)
var lastDice;

// console.log(dice);

// document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';


//this will gives a value of the score at the console window
//which is set to 43
//this is nly for the reference
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('#dice-1').style.display = 'none';

/*
-->How to roll the dice by using addEventListner method
where we call the declare the function and call it and using 
that function in querySelector method
*/

/* 
---> In the below code we described callback function 
we pass the function btn in the another function where 
addEventListener call that function for us as we click on the click button 
on our webpage as well as we do not have to put parenthese after writing the function.

---> There is another method define in the same EventListner 
is AN (Annonymus Function) 
these function does not have the name and you can not reuse that function outside the context
*/

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// function btn(){
    // // write your code here
    // }
    // btn();
    
    // document.querySelector('.btn-roll').addEventListener('click',btn);
    
    document.querySelector('.btn-roll').addEventListener('click',function(){
        
        if(gamePlaying){
        //1 we are getting the random number for our dice
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //2 Now we are getting our hidden dice image and rolling it by clicking the button
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        //3 update the round score if the rolled number was not a 1
        if(dice1 !== 1 && dice2 !== 1){
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else{
            //Next player
            nextPlayer();
        }   
        //here is the challenge solutiion for the part-1
    //     if(lastDice === 6 && dice === 6){
    //         scores[activePlayer] = 0;
    //         document.querySelector('#score-' + activePlayer).textContent = '0';
    //         nextPlayer();
    //     }
    //     else if(dice !== 1){    
    //         //Add score
    //         roundScore += dice;
    //         document.querySelector('#current-' + activePlayer).textContent = roundScore;
    //     }
    //     else{
    //         //Next player
    //         nextPlayer();
    //     }  
    //     lastDice = dice;
       } 
    });
    
    document.querySelector('.btn-hold').addEventListener('click',function(){
        //Add Current score to Global Score
        if(gamePlaying){
        scores[activePlayer] += roundScore;
        
        //Update the User Interface(UI)
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;
        //Undefined, 0, null, or ""  are coerced to false
        //anything else  is coered to true

        if(input){
            winningScore = input;
               } else{
                   winningScore = 100;
               }
        
        //Check if any player Won the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            hideDice();
            gamePlaying = false;
        }else{
        //next player
        nextPlayer();
        }
    }
    });

    document.querySelector('.btn-new').addEventListener('click', init);

    function nextPlayer(){
        //Next Player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            //how to change the current score from some value to 0 
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            //By using the toggle property we can change the class from one place to another
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            hideDice();
    }

    function init(){
        scores = [0,0];//here we are insert the Player-1 score and Player-2 score afterwards.
        roundScore = 0;//that means roundscore at begining is 0
        activePlayer = 0;
        gamePlaying = true;

        hideDice();
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }

    function hideDice(){
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
    }






















































    //How to add and remove class in HTML documents refrence only
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');