

// create variables and assinged to all id's of boxes 

var box0 = document.getElementById('0');
var box1 = document.getElementById('1');
var box2 = document.getElementById('2');
var box3 = document.getElementById('3');
var box4 = document.getElementById('4');
var box5 = document.getElementById('5');
var box6 = document.getElementById('6');
var box7 = document.getElementById('7');
var box8 = document.getElementById('8');
var boxex= document.querySelectorAll(".box");// create variable to control all classes .box 
var buttonPlay = document.getElementById("play"); // create variable called buttonPlay and assign id 'play' 
var playerX = 'X';  
var playerO = 'O';
var switchPlayer = true;       

var countPlay = 0;      // create variable to know if complete all boxes 
var haveWinner = false;      // create variable to know if we have a winner

boxex.forEach(function(item){   // create function and access all index in the boxes 
    item.addEventListener('click',function(){ // add click button 

        if(haveWinner == false){ //check if we have winner 
            if(item.innerHTML == ''){ // check if this box is empty
                countPlay = countPlay+1;    // every time we click on boxs add one on countPlay

                if(switchPlayer == true){ // to switch between players 
                    item.innerHTML = 'O'; 
                    switchPlayer = false; 
                }else{
                    item.innerHTML = 'X'
                    switchPlayer = true;
                }
            }else{
                    alert('you can not click here')
            }
            rule();
            if(countPlay == 9 && haveWinner == false){
                alert('Draw')
            }
        }else{
            alert('click play to start new game ')
        }
        
                
    })
})

buttonPlay.addEventListener('click',function(){ // if you click to button play to start new game
    haveWinner =false; // put this value to false to start new game
    countPlay = 0; 
    boxex.forEach(function(item){ //  make all boxes empty
        item.innerHTML = '';
    })
})



function rule(){ // rule of the game 

     // rule of he game for 'X' player
    if(box0.innerHTML == "X" && box1.innerHTML =="X" && box2.innerHTML == "X"){
        alert(playerX + " " + "win the game") 
        haveWinner =true;
        
    }else if(box3.innerHTML == "X" && box4.innerHTML =="X" && box5.innerHTML == "X"){
        alert(playerX + " " + "win the game")
        haveWinner =true;

    }else if(box6.innerHTML == "X" && box7.innerHTML =="X" && box8.innerHTML == "X"){
    alert(playerX + " " + "win the game")
    haveWinner =true;

    }else if(box0.innerHTML == "X" && box3.innerHTML =="X" && box6.innerHTML == "X"){
        alert(playerX + " " + "win the game")
        haveWinner =true;
            
    }
    else if(box1.innerHTML == "X" && box4.innerHTML =="X" && box7.innerHTML == "X"){
        alert(playerX + " " + "win the game")
        haveWinner =true;
        
    }else if(box2.innerHTML == "X" && box5.innerHTML =="X" && box8.innerHTML == "X"){
        alert(playerX + " " + "win the game")
        haveWinner =true;
        
    }else if(box0.innerHTML == "X" && box4.innerHTML =="X" && box8.innerHTML == "X"){
        alert(playerX + " " + "win the game")
        haveWinner =true;
        
    }else if(box2.innerHTML == "X" && box4.innerHTML =="X" && box6.innerHTML == "X"){
        alert(playerX + " " + "win the game")
        haveWinner =true;
        
    }
// rule of the game for 'O' Player
    if(box0.innerHTML == "O" && box1.innerHTML =="O" && box2.innerHTML == "O"){
        alert(playerO + " " + "win the game") 
        haveWinner =true;
        
    }else if(box3.innerHTML == "O" && box4.innerHTML =="O" && box5.innerHTML == "O"){
        alert(playerO + " " + "win the game") 
        haveWinner =true;
        
    }else if(box6.innerHTML == "O" && box7.innerHTML =="O" && box8.innerHTML == "O"){
        alert(playerO + " " + "win the game") 
        haveWinner =true;
       
    }else if(box0.innerHTML == "O" && box3.innerHTML =="O" && box6.innerHTML == "O"){
        alert(playerO + " " + "win the game") 
        haveWinner =true;
        
    }
    else if(box1.innerHTML == "O" && box4.innerHTML =="O" && box7.innerHTML == "O"){
        alert(playerO + " " + "win the game") 
        haveWinner =true;
        
    }else if(box2.innerHTML == "O" && box5.innerHTML =="O" && box8.innerHTML == "O"){
        alert(playerO + " " + "win the game") 
        haveWinner =true;
        
    }else if(box0.innerHTML == "O" && box4.innerHTML =="O" && box8.innerHTML == "O"){
        alert(playerO + " " + "win the game") 
        haveWinner =true;
        
    }else if(box2.innerHTML == "O" && box4.innerHTML =="O" && box6.innerHTML == "O"){
        alert(playerO + " " + "win the game") 
        haveWinner =true;
        
    }

}