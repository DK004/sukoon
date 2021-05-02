const play = document.getElementsByClassName('play');
const pause = document.getElementsByClassName('pause');
const card = document.getElementsByClassName('card');


// howler code
var Rain = new Howl({
    src: ['sounds/rain.mp3'],
    loop:true,
    // volume:0.6,
  });
  var Thunder = new Howl({
    src: ['sounds/thunder.mp3'],
    loop:true,
  });

  var Wave = new Howl({
    src: ['sounds/waves.mp3'],
    loop:true,
  });


  var Wind = new Howl({
    src: ['sounds/wind.mp3'],
    loop:true,
  });


  var Birds = new Howl({
    src: ['sounds/birds.mp4'],
    loop:true,
});


  var Insects = new Howl({
      src: ['sounds/insects.mp3'],
      loop:true,
    });
    
    
    var Traffic = new Howl({
        src: ['sounds/traffic.mp3'],
        loop:true,
    });
    
    var Cafe = new Howl({
        src: ['sounds/cafe.mp4'],
        loop:true,
    });
    
    var Fire = new Howl({
        src: ['sounds/fire.mp3'],
        loop:true,
    });
    
    
    
    
    
    
    
    
    for(i=0;i<pause.length;i++){
        pause[i].style.display = "none";
    }
    
    function playPause(e){
        
        if(play[e].style.display === 'none'){
            play[e].style.display ="block";
            pause[e].style.display = "none";
            card[e].classList.remove('playing');
            // stoping the sound
            if(e===0){
                Rain.fade(2,0,2000);
                Rain.stop();
            }
            if(e==1){
                Thunder.stop();
            }
            if(e==2){
                Wave.stop();
            }
            if(e==3){
                Wind.stop();
            }
            if(e==4){
                Birds.stop();
            }
            if(e==5){
                Insects.stop();
            }
            if(e==6){
                Fire.stop();
            }
            if(e==7){
                Traffic.stop();
            }if(e==8){
                Cafe.stop();
            }
            
        }else{
            pause[e].style.display= "block";
            card[e].classList.add('playing');
            play[e].style.display="none";
            // playing sound
            if(e===0){
                Rain.play();
            }
            if(e==1){
                Thunder.play();
            }
            if(e==2){
                Wave.play();
            }
            if(e==3){
                Wind.play();
            }
            if(e==4){
                Birds.play();
            }
            if(e==5){
                Insects.play();
            }
            if(e==6){
                Fire.play();
            }
            if(e==7){
                Traffic.play();
            }
            if(e==8){
                Cafe.play();
            }
        }
    }
    // card[e].children[0].children[1].children[1].innerText;
    



    // contact
const nameOfSender = document.getElementById('feedback-body__email');
const message = document.getElementById('feedback-body__message');
const submit = document.getElementById('feedback-body__submit');

submit.addEventListener('click', () => {
    if(nameOfSender.value === null|| nameOfSender.value ==="" && message.value===""||message.value===null){
        alert("Fill the requried* fields");
        }else{
            console.log("submitted")
          setTimeout(() => {
            sendMail();
            nameOfSender.value="";
            message.value="";
          }, 2000);
      }
});


function sendMail(params){
    var tempParams = {
      from_name : nameOfSender.value,
      to_name : "Sukoon",
      message : message.value,
      from_email : "Not requried", 
    };
    emailjs.send('service_fe9y6ov','template_u0lj0om',tempParams).then(function(res){
      alert("Feedback sent successfully!");
    });
  }