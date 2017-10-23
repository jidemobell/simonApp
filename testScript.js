var readlineSync = require('readline-sync');
var _ = require('lodash');
var colorPos = ['red','yellow','green','blue'];


function inArray(x,arr){
    return arr.indexOf(x) > -1;
}

function allArrayValuesInArray(arr1,arr2){
    var index= 0;
    while(index < arr2.length){
          if(!inArray(arr2[index],arr1)){
             return false;
          }
          index++;
         }
         return true;
  }



/*
var patterns = {};
var count = 0;
var selectedPattern = [];
n=1;

while(n<5){
    var index = 0;
    var letMeKnow = _.times(n,(function(){
       
        console.log("we are on count "+ n + " and index "+ index);
        index++;
        var question=  readlineSync.question('I am here?');
        if(question == 'red'){
            return colorPos[0];
        }
        else if(question == 'yellow'){
         return colorPos[1];
        }
        else if(question == 'blue'){
         return colorPos[3];
      }
      else if(question == 'green'){
         return colorPos[2];
      }
     
     }) );

     if(n == 1){
        selectedPattern.push(letMeKnow);
     }
     else{
         var nArray = selectedPattern[n-2];
         if(!allArrayValuesInArray((letMeKnow.slice(0,n-1)),nArray)){
             console.log("wrong pattern to previos");
             break;
         }
         else{
            selectedPattern.push(letMeKnow);
         }
     }

     
     n++;
}

*/

var savedCompPattern = [];

function compChoice(){
    return colorPos[Math.floor(Math.random() * colorPos.length)];
}


function theGame(n){ 
    turn = 1;
    while (turn < n){
        console.log("here is turn "+ turn);
        var compTurn = compChoice();
        savedCompPattern.push(compTurn);
        console.log("the  saved pattern is " + savedCompPattern);
        var index = 0;
        var letMeKnow = _.times(turn,(function(){
           
            console.log("we are on count "+ turn + " and index "+ index);
            
            var question=  readlineSync.question('I am here?');
            if( question != savedCompPattern[index]){
                console.log("wrong entry was entered");
                
            }else{
                index++;
                if(question == 'red'){
                    return colorPos[0];``
                }
                else if(question == 'yellow'){
                 return colorPos[1];
                }
                else if(question == 'blue'){
                 return colorPos[3];
              }
              else if(question == 'green'){
                 return colorPos[2];
              }
            }
           
            
         
         }) );
        
        turn++;

        
    }

    return null;

}

console.log(theGame(4));

