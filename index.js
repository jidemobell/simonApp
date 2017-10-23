

var simon = {
    allSound : {
        greenSound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
        redSound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
        blueSound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
        yellowSound: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
    },
    colorPos:  ['red','yellow','blue','green'],
    savedCompPattern: [],
    hasClickedRed: false,
    started: false,
    count: 0,
    check: null,
    turn: 0,

    incrementLevel : function(){
        return null;
    },

    aiPicker: function(level){
        return null;
    },

    init: function(){
        var self = this;
       //  this.check = self.theGame.apply(self);
       // this.check = self.humanClick.apply(self);


       
        

        $('.redPlace').on('click',function(){
                self.playRed.apply(self);
        });

        $('.greenPlace').on('click',function(){
            self.playGreen.apply(self);
        });

        $('.yellowPlace').on('click',function(){
            self.playYellow.apply(self);
        });

        $('.bluePlace').on('click',function(){
            self.playBlue.apply(self);
        });
        
        $('.start').on('click',function(){
            $('#number-box').text('0');
            this.check = self.theGame.apply(self);
         });
        

    /*   $('.starter').click(function(){
             if( $('#number-box').text()==0){
                this.started = true;
               
             }
        });  */

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
        var choice= this.colorPos[Math.floor(Math.random() * this.colorPos.length)];
        console.log("compute pick is " + choice);
        this.savedCompPattern.push(choice);
        return this.savedCompPattern;
    },


    playColorArray : function(array,sound){         //it should play then click
                var i=0;
              //  array = this.colorPos;
                sound = this.allSound;
                (function loop() {
                    if(array[i] == 'red'){
                        $('.redPlace').addClass('redPlace-hover');
                        setTimeout(function(){$('.redPlace').removeClass('redPlace-hover');},1000);
                        sound.redSound.play();
                    }
                    else if(array[i] == 'yellow'){
                       // console.log("i played yellow " );
                        $('.yellowPlace').addClass('yellowPlace-hover');
                        setTimeout(function(){$('.yellowPlace').removeClass('yellowPlace-hover');},1000);
                        sound.yellowSound.play();
                    }
                    else if(array[i] == 'green'){
                      //  console.log("i played green" );
                        $('.greenPlace').addClass('greenPlace-hover');
                        setTimeout(function(){$('.greenPlace').removeClass('greenPlace-hover');},1000);
                        sound.greenSound.play();
                    }
                    else if(array[i] == 'blue'){
                       // console.log("i played blue" );
                        $('.bluePlace').addClass('bluePlace-hover');
                        setTimeout(function(){$('.bluePlace').removeClass('bluePlace-hover');},1000);
                        sound.blueSound.play();
                    }
                    //////////////////////////////////////////////
                    if (++i < array.length) {
                        setTimeout(loop, 2000);  // call myself in 3 seconds time if required
                    }
                })(); 
            
    },

   /*
    theGame: function(color){
        array = this.savedCompPattern;
        color = this.colorPos;
      //  buttonClicked = false;
        this.turn =1;
       // this.playColorArray(this.colorPos,this.allSound);
      //  this.soundChooser(this.colorPos,0);
      while(this.turn < 4){
         var compTurn = this.comChoice();
       //  array.push(compTurn);
         console.log(compTurn);
      //   this.playColorArray(array,this.allSound);

   
       
         var index = 0;
         var letMeKnow = _.times(this.turn,(function(){
           
            console.log("we are on count "+ this.turn + " and index "+ index);
           
          var question=  prompt('select a color');
            if(question != false){

               if( question != compTurn[index]){
                   console.log("wrong entry was entered");
                   array = [];
                   this.turn = 1;
               }else{
                   index++;
                   if(question == 'red'){
                       return color[0];
                   }
                   else if(question == 'yellow'){
                    return color[1];
                   }
                   else if(question == 'blue'){
                    return color[2];
                 }
                 else if(question == 'green'){
                    return color[3];
                 }
               }

            }
           }) );

   

         this.turn++;
         
      }   
     // return null;
}   */


humanClick: function(){
    $('.redPlace').on('click',function(){
        return 'red';
    });

    $('.greenPlace').on('click',function(){
        return 'green';
    });

    $('.bluePlace').on('click',function(){
        return 'blue';
    });

    $('.yellowPlace').on('click',function(){
        return 'yellow';
    });
},

theGame: function(color){
    color = this.colorPos;
    var compTurn = simon.comChoice();   // compt first choice
     console.log(compTurn);
     
    /// console.log(setTimeout(simon.humanClick(),5000));

    $('.redPlace').on('click',function(){
        console.log('red');
    });

    $('.greenPlace').on('click',function(){
        console.log('green');
    });

    $('.bluePlace').on('click',function(){
        console.log('blue');
    });

    $('.yellowPlace').on('click',function(){
        console.log('yellow');
    });
    
 
    }


}

$(document).ready(function(){
    
    
    simon.init();
});