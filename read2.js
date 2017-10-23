var simon = {
    allSound : {
        greenSound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
        redSound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
        blueSound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
        yellowSound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
    },
    colorPos:  ['red','yellow','blue','green'],
    compPattern: [],
    humanPattern: [],
    check: null,
    turn:null,
    level:0,
    turnState: false,
    interval:null,
    initInterval: null,
    strictMode: false,
    gamesState: false,
    gameMode: false,
    wrongMode: false,

    incrementLevel : function(){
        return null;
    },

    init: function(){
        var self = this;
        this.level = Number($('#number-box').text());
        this.initInterval = setInterval(function(){
              if(simon.gamesState == true && simon.gameMode ==false){
                  self.theGame.apply(self);
              }
        },1000);
        
        

        $('.redPlace').on('click',function(){
                self.playRed.apply(self);
                simon.humanPattern.push('red');
        });

        $('.greenPlace').on('click',function(){
            self.playGreen.apply(self);
            simon.humanPattern.push('green')
        });

        $('.yellowPlace').on('click',function(){
            self.playYellow.apply(self);
            simon.humanPattern.push('yellow')
        });

        $('.bluePlace').on('click',function(){
            self.playBlue.apply(self);
            simon.humanPattern.push('blue')
        });

         $('.start').click(function(){
            $('#number-box').text('0');
            simon.gamesState = true; 
         });
         
         $('.stop').click(function(){
             location.reload();
         });
         

         $('.strict').click(function(){
            $('#number-box').text('0');
              simon.strictMode = true;
              simon.gamesState = true;
         });
    },

    intervalFunction: function(arraylength){
        var count=0;
        simon.turnState = true;
        this.interval = setInterval(function(){
            count++;
            console.log("human pattern is " + simon.humanPattern);
            if(count == arraylength){
                clearInterval(simon.interval);
            }
    
            },5000);
    },

   

    stopIntervalFunction: function(){
       clearInterval(simon.interval);
    },

    playGreen: function(){
       this.allSound.greenSound.play();
    },
    
    playRed: function(){
        this.allSound.redSound.play();
     },
    
     playBlue: function(){
        this.allSound.blueSound.play();
     },

     playYellow: function(){
        this.allSound.yellowSound.play();
     },


     comChoice : function (){
            if(simon.turnState == true){

            }else{
                if(simon.wrongMode == true){
                    return this.compPattern;
                }else{
                    var choice= this.colorPos[Math.floor(Math.random() * this.colorPos.length)];
                    this.compPattern.push(choice);
                    console.log(this.compPattern);
                    return   this.compPattern;
                }
            }    
    },

    humanChoice: function(array){
            array = simon.colorPos;
            var nodecount = 0;
            while(nodecount < array.length){
                $('.redPlace').on('click',function(){
                    nodecount++;
                    simon.humanPattern.push('red');
                });
            
                $('.greenPlace').on('click',function(){
                    nodecount++;
                    simon.humanPattern.push('green');
                });
            
                $('.bluePlace').on('click',function(){
                    nodecount++;
                    simon.humanPattern.push('blue');
                });
            
                $('.yellowPlace').on('click',function(){
                    nodecount++;
                    simon.humanPattern.push('yellow');
                });

            }
          return simon.humanPattern;
    },

    playColorArray : function(array,sound){         //it should play then click
                var i=0;
                sound = this.allSound;
                (function loop() {
                
                    if(array[i] == 'red'){
                      
                        $('.redPlace').addClass('redPlace-hover');
                        setTimeout(function(){$('.redPlace').removeClass('redPlace-hover');},500);
                        sound.redSound.play();
                    }
                    else if(array[i] == 'yellow'){
                        $('.yellowPlace').addClass('yellowPlace-hover');
                        setTimeout(function(){$('.yellowPlace').removeClass('yellowPlace-hover');},500);
                        sound.yellowSound.play();
                    }
                    else if(array[i] == 'green'){
                        $('.greenPlace').addClass('greenPlace-hover');
                        setTimeout(function(){$('.greenPlace').removeClass('greenPlace-hover');},500);
                        sound.greenSound.play();
                    }
                    else if(array[i] == 'blue'){
                        $('.bluePlace').addClass('bluePlace-hover');
                        setTimeout(function(){$('.bluePlace').removeClass('bluePlace-hover');},500);
                        sound.blueSound.play();
                    }
                    //////////////////////////////////////////////
                    if (++i < array.length) {
                        setTimeout(loop, 1000);  // call myself in 3 seconds time if required
                    }
                })(); 
            
    },

    arraysChecker: function(array1,array2){
        array1 = simon.compPattern;
        array2 = simon.humanPattern;
        if(array1.length !== array2.length)
        return false;
    for(var i = array1.length; i--;) {
        if(array1[i] !== array2[i])
            return false;
    }
    return true;  
    },
    
    theGame: function(){
              //doSomething
              simon.turn = 1;
              simon.gameMode = true;
        (function loop() {   
             console.log("at turn "+ simon.turn);
             $('#number-box').text(simon.turn);
             var compTurn= simon.comChoice();
             var playTime=  simon.playColorArray(compTurn,simon.allSound);

              var thiscount = compTurn.length;
            var humaTun=  simon.intervalFunction(thiscount);  //5000ms later

            var newTime = setTimeout(
                    function(){
                         if(simon.arraysChecker() && simon.turnState == true){
                             simon.turnState = false;
                             console.log('yes!!!!');
                             simon.wrongMode=false;
                             if(simon.turn == 20){
                                   simon.turn++;
                                   console.log("you won!!!!");
                                   $(".gamecontainer>#counter").append("<div id="+"\"report\""+">Great Job!!!!</div>");
                                   simon.gameMode = false;
                                   simon.gamesState = false;
                                   return;
                             } 
                             simon.humanPattern = [];
                         }else{
                          //  $("#gamebody>#counter").append("<div id="+"\"report\""+">Great Job!!!!</div>");
                             simon.humanPattern = [];
                             simon.turnState = false;
                             if(simon.strictMode == true){ 
                                simon.turn = 0;

                             }else{
                                simon.turn--;
                                simon.wrongMode = true;
                                $('.gamecontainer').addClass('gamecontainer2');
                                setTimeout(function(){$('.gamecontainer').removeClass('gamecontainer2');},500);
                               // simon.allSound.redSound.play();
                                
                             }
                             
                         }
                         //simon.turnState = false;
                    }
            ,thiscount*5000);    //times 5000ms later

            if (++simon.turn < 21) {
                setTimeout(loop, simon.compPattern.length*5000);  // call myself in 3 seconds time if required
            }
        })();
    } //game ends here

}

$(document).ready(function(){
    
    
    simon.init();
});