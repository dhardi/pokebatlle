
const pokemons = [
    "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise",
    "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot",
    "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash",
    "nidoran♀", "nidorina", "nidoqueen", "nidoran♂", "nidorino", "nidoking", "clefairy", "clefable", "culpix",
    "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect",
    "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape",
    "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke",
    "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem",
    "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel",
    "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee",
    "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee",
    "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea",
    "seadra", "goldeen", "seaking", "staryu", "starmie", "mrmime", "scyther", "jynx", "electabuzz", "magmar",
    "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon",
    "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres",
    "dratini", "dragonair", "dragonite", "mewtwo", "mew"
];








const pokename ="notdefined";
const findMyPoke = "notdefined";
const element = document.getElementById("btn-start")
element.addEventListener("click", runGame);

const battlecamp = document.getElementById("battlecamp");
const menu = document.getElementById("mainmenu");
const start = document.getElementById("gamestart");
menu.addEventListener("click", mainMenu);
 




 const power = document.getElementsByClassName("power");
 const speed = document.getElementsByClassName("speed");
 

 const stamina = document.getElementsByClassName("stamina");


//power[3].addEventListener("click", powerSelect);
//power[4].addEventListener("click", powerSelect);
//power[5].addEventListener("click", powerSelect);
//speed[3].addEventListener("click", powerSelect(playChoice));
//speed[4].addEventListener("click", battleSpeed);
//speed[5].addEventListener("click", battleSpeed);
//stamina[3].addEventListener("click", battleStamina);
//stamina[4].addEventListener("click", battleStamina);
//stamina[5].addEventListener("click", battleStamina);

speed[3].addEventListener("click", powerSelect);

 //speed[3].addEventListener("click", powerSelect(Event));
//const playChoice2 = speed[4].addEventListener("click", powerSelect(speed[4].innerHTML));
//const playChoice3 = speed[5].addEventListener("click", powerSelect(speed[5].innerHTML));

function runGame(){


  
       
        dealCards();
        sortImgPoke()
       

};



function powerSelect(playChoice){
 
     
    console.log('Your Choice', playChoice);
  //const num=  Event.target.value;
//num = parseInt (play)
   // console.log("sua escolha",num);

}




function scoreCountYou(){
    let youscore = parseInt(document.getElementById("youpoints").innerText);
    document.getElementById("youpoints").innerText = ++youscore 

};



function scoreCountOp(){
    let oppoints = parseInt(document.getElementById("oppoints").innerText);
    document.getElementById("oppoints").innerText = ++oppoints 

};

function roundCount(){
    let i = 0
    do{
        i++
        let roundpoint = parseInt(document.getElementById("roundpoint").innerText);
        document.getElementById("roundpoint").innerText = ++roundpoint
        if(roundpoint ===3){
            dealCards();
            sortImgPoke();
        }else if(roundpoint===6){
            dealCards();
            sortImgPoke();
        }else if(roundpoint===9){
            dealCards();
            sortImgPoke();
        }else if (roundpoint===12){
            dealCards();
            sortImgPoke();
        }else if (roundpoint===15){
            dealCards();
            sortImgPoke();

            }else if (roundpoint===18){
                dealCards(); 
                sortImgPoke();
            }else if (roundpoint===21)
            gameOver();
            break;
        }
    
    while(i<21,i++);
}



  




function selectPower(){

};

function battleSpeed(){
    let opNum3= parseInt (document.getElementsByClassName("speed")[0].innerText.replace(/\D/g,''));
    let opNum4= parseInt (document.getElementsByClassName("speed")[1].innerText.replace(/\D/g,''));
    let opNum5= parseInt (document.getElementsByClassName("speed")[2].innerText.replace(/\D/g,''));
    let arrayspeed=[];
    arrayspeed.push(opNum3,opNum4,opNum5);
    let speedrandom = Math.floor(Math.random()*3);
    let speedbattlenumrandom = arrayspeed[speedrandom];

    //my deck

    let myNum6 =  parseInt (document.getElementsByClassName("speed")[3].innerText.replace(/\D/g,''));
    let myNum7 =  parseInt (document.getElementsByClassName("speed")[4].innerText.replace(/\D/g,''));
    let myNum8 =  parseInt (document.getElementsByClassName("speed")[5].innerText.replace(/\D/g,''));

    if(myNum6 > speedbattlenumrandom ){
        alert("you win");
        alert(speedbattlenumrandom);
         roundCount();
         scoreCountYou();
         
         
      }else if(myNum7 > speedbattlenumrandom){
        alert("you win");
        alert(speedbattlenumrandom);
        roundCount();
        scoreCountYou();
 
     }else if (myNum8 > speedbattlenumrandom){
         alert("you win");
         alert(speedbattlenumrandom);
         roundCount();
         scoreCountYou();
 
 
     }else if(speedbattlenumrandom > myNum6 ){
         alert("you lost");
         alert(speedbattlenumrandom);
         scoreCountOp ();      
         roundCount();
 
     }else if(speedbattlenumrandom > myNum7){
         alert("you lost");
         alert(speedbattlenumrandom);
         scoreCountOp ();      
         roundCount();
 
 
     }else if(speedbattlenumrandom > myNum8 ){
         alert("you lost");
         alert(speedbattlenumrandom);
         scoreCountOp ();      
         roundCount();
      
      
     } else{
         
         alert("you lost");
         alert(speedbattlenumrandom);
         scoreCountOp ();      
         roundCount();
         
      } 


}

function battleStamina(){
        let opNum6= parseInt (document.getElementsByClassName("stamina")[0].innerText.replace(/\D/g,''));
        let opNum7= parseInt (document.getElementsByClassName("stamina")[1].innerText.replace(/\D/g,''));
        let opNum8= parseInt (document.getElementsByClassName("stamina")[2].innerText.replace(/\D/g,''));
        let arraystamina = [];
        arraystamina.push(opNum6,opNum7,opNum8);
        let staminarandom = Math.floor(Math.random()*3);
        let staminarandomnum = arraystamina[staminarandom];


        //my deck
        let myNum9 =  parseInt (document.getElementsByClassName("stamina")[3].innerText.replace(/\D/g,''));
        let myNum10 =  parseInt (document.getElementsByClassName("stamina")[4].innerText.replace(/\D/g,''));
        let myNum11 =  parseInt (document.getElementsByClassName("stamina")[5].innerText.replace(/\D/g,''));

        if(myNum9 > staminarandomnum ){
            alert("you win");
            alert(staminarandomnum);
             roundCount();
             scoreCountYou();
             
             
          }else if(myNum10 > staminarandomnum){
            alert("you win");
            alert(staminarandomnum);
            roundCount();
            scoreCountYou();
     
         }else if (myNum11 > staminarandomnum){
             alert("you win");
             alert(staminarandomnum);
             roundCount();
             scoreCountYou();
     
     
         }else if(myNum9 < staminarandomnum){
             alert("you lost");
             alert(staminarandomnum);
             scoreCountOp ();      
             roundCount();
     
         }else if(myNum10 < staminarandomnum){
             alert("you lost");
             alert(staminarandomnum);
             scoreCountOp ();      
             roundCount();
     
     
         }else if(myNum11 < staminarandomnum){
             alert("you lost");
             alert(staminarandomnum);
             scoreCountOp ();      
             roundCount();
          
          
         } else{
             
             alert("you lost");
             alert(staminarandomnum);
             scoreCountOp ();      
             roundCount();
             
          }
             

}



function battlePowers(){
   
    //for(let f = 0 ; f < power.length; f++){
         //this part take 3 int numbers from the class and push into array 
         
        let opNum0 =  parseInt (document.getElementsByClassName("power")[0].innerText.replace(/\D/g,''));
        let opNum1 = parseInt (document.getElementsByClassName("power")[1].innerText.replace(/\D/g,''));
        let opNum2 = parseInt (document.getElementsByClassName("power")[2].innerText.replace(/\D/g,''));
        let arraypowers=[];
        arraypowers.push(opNum0,opNum1,opNum2);
          
        //sort a random number and select a item into the array
        let powerrandom = Math.floor(Math.random()*3);
             
     //my hand deck
        let myNum3 =  parseInt (document.getElementsByClassName("power")[3].innerText.replace(/\D/g,''));
        let myNum4 =  parseInt (document.getElementsByClassName("power")[4].innerText.replace(/\D/g,''));
        let myNum5 =  parseInt (document.getElementsByClassName("power")[5].innerText.replace(/\D/g,''));
        let powerbattlenumrandom = arraypowers[powerrandom];


    
       
     if(myNum3 > powerbattlenumrandom ){
       alert("you win");
       alert(powerbattlenumrandom);
        roundCount();
        scoreCountYou();
        
        
     }else if(myNum4 > powerbattlenumrandom){
       alert("you win");
       alert(powerbattlenumrandom);
       roundCount();
       scoreCountYou();

    }else if (myNum5 > powerbattlenumrandom){
        alert("you win");
        alert(powerbattlenumrandom);
        roundCount();
        scoreCountYou();


    }else if(myNum3 < powerbattlenumrandom){
        alert("you lost");
        alert(powerbattlenumrandom);
        scoreCountOp ();      
        roundCount();

    }else if(myNum4 < powerbattlenumrandom){
        alert("you lost");
        alert(powerbattlenumrandom);
        scoreCountOp ();      
        roundCount();


    }else if(myNum5 < powerbattlenumrandom){
        alert("you lost");
        alert(powerbattlenumrandom);
        scoreCountOp ();      
        roundCount();
     
     
    } else{
        
        alert("you lost");
        alert(powerbattlenumrandom);
        scoreCountOp ();      
        roundCount();
        
     }
     
    
}
//};





function gameOver(){
    
    let yourscore = parseInt(document.getElementById("youpoints").innerText);
    let opscore = parseInt(document.getElementById("oppoints").innerText);
    

    if( yourscore > opscore ){
        
        alert("Game Over!",yourscore, "You Win");

    }else{
        alert("Game Over!",yourscore, "You Lost");
    }

};



function dealCards(){
    // it will get all elements i need 
    let imgpoke = document.getElementsByClassName("imgpoke");
    let name = document.getElementsByClassName("name");
    let power = document.getElementsByClassName("power");
    let speed = document.getElementsByClassName("speed");
    let stamina = document.getElementsByClassName("stamina");
    // interaction array of classes to sort diferent number for each card  
    for (let j = 0; j < name.length ; j++){
        for (let p = 0; p < power.length ; p++){
            for (let s = 0; s < speed.length ; s++){
                for (let a = 0; a < stamina.length ; a++){
                    for (let y = 0; y < imgpoke.length; y++){
                    if( name[j] === name[j]  ){

                       
                       const pokename = Math.floor(Math.random()*pokemons.length);
                        let power = Math.floor(Math.random()*100);
                        let speed = Math.floor(Math.random()*100);
                         let stamina = Math.floor(Math.random()*100);
                         pokemons.sort();
                          namepoke = pokemons[pokename];
                          //findMyPoke = pokepath[pokename];
                          
                          //imgpoke[y].style.backgroundImage = 'url("./assets/images/' + namepoke + '.PNG")';
                          document.getElementsByClassName("name")[j].innerHTML = namepoke;
                          document.getElementsByClassName("power")[p].innerHTML =`Power:${power}` ;
                          document.getElementsByClassName("speed")[s].innerHTML = speed;
                          document.getElementsByClassName("stamina")[a].innerHTML = `Stamina:${stamina}`;
                          //document.getElementsByClassName("imgpoke")[y].style.backgroundImage = "url(./assets/images/arbok.PNG";
                          
                         

                    }




                }
            }

        }

    }
}
         
};

function sortImgPoke(){
   
   let cardname00 = (document.getElementsByClassName("name")[0]).innerText;
   let cardname01= (document.getElementsByClassName("name")[1]).innerText;
 let   cardname02= (document.getElementsByClassName("name")[2]).innerText;
  let  cardname03 =(document.getElementsByClassName("name")[3]).innerText;
  let  cardname04 =(document.getElementsByClassName("name")[4]).innerText;
   let cardname05=(document.getElementsByClassName("name")[5]).innerText;




   
  let  imgpokes00 =(document.getElementsByClassName("imgpoke")[0]);
  let  imgpokes01 =(document.getElementsByClassName("imgpoke")[1]);
  let  imgpokes02= (document.getElementsByClassName("imgpoke")[2]);
   let imgpokes03 =(document.getElementsByClassName("imgpoke")[3]);
  let  imgpokes04 =(document.getElementsByClassName("imgpoke")[4]);
  let  imgpokes05 =(document.getElementsByClassName("imgpoke")[5]);



  imgpokes00.style.backgroundImage = 'url("./assets/images/' + cardname00 + '.PNG")';
  imgpokes01.style.backgroundImage = 'url("./assets/images/' + cardname01 + '.PNG")';
  imgpokes02.style.backgroundImage = 'url("./assets/images/' + cardname02 + '.PNG")';
  imgpokes03.style.backgroundImage = 'url("./assets/images/' + cardname03 + '.PNG")';
  imgpokes04.style.backgroundImage = 'url("./assets/images/' + cardname04 + '.PNG")';
  imgpokes05.style.backgroundImage = 'url("./assets/images/' + cardname05 + '.PNG")';
    
     



    }
        

   //Main menu
   
   function mainMenu(){
    battlecamp.style.display = 'flex'
    menu.style.display = 'none'
    
    console.log(menu);

   }
   
   

        
    
  




