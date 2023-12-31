//array pokemons
const pokemons = [
    "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise",
    "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot",
    "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash",
    "nidoran", "nidorina", "nidoqueen", "nidoran", "nidorino", "nidoking", "clefairy", "clefable", "vulpix",
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
//scoreboard variables
let opPointsFinal = document.getElementById("oppoints").innerText;
let playerPointsFinal = document.getElementById("youpoints").innerText;

//popmessage
const btnEndGame = document.getElementById("endgame");
btnEndGame.addEventListener("click",endGame);
const popMessage = document.getElementById("popmessage");
const pokemonPlayed = [0,1,2];

//cards Op
const firstCardOp = document.getElementById("card4");
const secondCardOp = document.getElementById("card5");
const thirdCardOp = document.getElementById("card6");
const skillsPoke = document.getElementsByClassName("skillspoke");
const imgPoke = document.getElementsByClassName("imgpoke");
const namePokeCard = document.getElementsByClassName("name");

//players cards
const playerCardOne = document.getElementById("card1");
const playerCardTwo = document.getElementById("card2");
const playerCardThird = document.getElementById("card3");

// options change the theme
const classic = document.getElementsByClassName("classic");
classic[0].addEventListener("click",changeThemeClassic);
const blue = document.getElementsByClassName("blue");
blue[0].addEventListener("click",changeThemeBlue);
const purple = document.getElementsByClassName("purple");
purple[0].addEventListener("click",changeThemePurple);
const green = document.getElementsByClassName("green");
green[0].addEventListener("click",changeThemeGreen);

// display initials 
const element = document.getElementById("btn-start");
const btnShow = document.getElementById("btn-show");
btnShow.addEventListener("click",ShowMyHand);
element.addEventListener("click", runGame);

// return pages
const hpPage = document.getElementsByClassName("return");
hpPage[0].addEventListener("click", returnMenu);
hpPage[1].addEventListener("click", returnMenu);

//menu events 
const optionsPage = document.getElementById("optionpage");
const mainBackground = document.getElementById("mainbackground");
optionsPage.addEventListener("click",pageOptions);
const optionsPageGame = document.getElementById("optionspage");
const battlecamp = document.getElementById("battlecamp");
const menu = document.getElementById("mainmenu");
const start = document.getElementById("gamestart");
start.addEventListener("click",startGamePage );
menu.addEventListener("click", mainMenu);
const howTo = document.getElementById("howtoplaypage");
howTo.addEventListener("click", howToPlay);
const tutorial = document.getElementById("howtoplay");

//powers skill 
 const power = document.getElementsByClassName("power");
 const speed = document.getElementsByClassName("speed");
 const stamina = document.getElementsByClassName("stamina");

// event select powers also hidden card 
power[3].addEventListener("click",battlePowers);
power[3].addEventListener("click",hiddenMyCardOne);
power[4].addEventListener("click", battlePowers);
power[4].addEventListener("click",hiddenMyCardTwo);
power[5].addEventListener("click", battlePowers);
power[5].addEventListener("click",hiddenMyCardThird);
speed[3].addEventListener("click", battleSpeed);
speed[3].addEventListener("click",hiddenMyCardOne);
speed[4].addEventListener("click", battleSpeed);
speed[4].addEventListener("click",hiddenMyCardTwo);
speed[5].addEventListener("click", battleSpeed);
speed[5].addEventListener("click",hiddenMyCardThird);
stamina[3].addEventListener("click", battleStamina);
stamina[3].addEventListener("click",hiddenMyCardOne);
stamina[4].addEventListener("click", battleStamina);
stamina[4].addEventListener("click",hiddenMyCardTwo);
stamina[5].addEventListener("click", battleStamina);
stamina[5].addEventListener("click",hiddenMyCardThird);

function runGame(){
    dealCards();
    sortImgPoke();
    hidenCardOp();
    HiddenButton();
}

//score points board
function scoreCountYou(){ 
    playerPointsFinal.innerText = ++playerPointsFinal ;
    document.getElementById("youpoints").innerText = playerPointsFinal;
}

function scoreCountOp(){     
    opPointsFinal.innerText = ++opPointsFinal ;
    document.getElementById("oppoints").innerText = opPointsFinal;
}

//function round count very round
function roundCount(){
    let i = 0  ; 
    do{
        i++;
       let roundpoint = parseInt(document.getElementById("roundpoint").innerText);    
       document.getElementById("roundpoint").innerText = ++roundpoint;
        if(roundpoint ===3){  
            sortImgPoke();
            showMyCardButton();
           break;
        }else if(roundpoint===6){         
            sortImgPoke();
            showMyCardButton();             
        }else if(roundpoint===9){          
            sortImgPoke();
            showMyCardButton();
        }else if (roundpoint===12){  
            sortImgPoke();
            showMyCardButton();
        }else if (roundpoint===15){
            sortImgPoke();
            showMyCardButton();
            }else if (roundpoint===18){ 
                sortImgPoke();
                showMyCardButton();  
            }else if (roundpoint===21)
            gameOver();
            break;
        }   
    while(i<21,i++);
}

// Comparative of speed
function battleSpeed(){
    let opNum3= parseInt (document.getElementsByClassName("speed")[0].innerText.replace(/\D/g,''));
    let opNum4= parseInt (document.getElementsByClassName("speed")[1].innerText.replace(/\D/g,''));
    let opNum5= parseInt (document.getElementsByClassName("speed")[2].innerText.replace(/\D/g,''));
    let arrayspeed=[];
    arrayspeed.push(opNum3,opNum4,opNum5);
    let speedrandom = Math.floor(Math.random() * pokemonPlayed.length);
    let speedbattlenumrandom = arrayspeed[speedrandom];
    let cpuCardPlayed = pokemonPlayed[speedrandom];
    pokemonPlayed.splice(speedrandom, 1);
//my deck
    const myNum6 = this.innerHTML;
    const myNum7 = this.innerHTML;
    const myNum8 = this.innerHTML;
    if(myNum6 > speedbattlenumrandom ){
        alert("you win");
        alert(speedbattlenumrandom);
         roundCount();
         scoreCountYou();
         showOpCard(cpuCardPlayed);   
      }else if(myNum7 > speedbattlenumrandom){
        alert("you win");
        alert(speedbattlenumrandom);
        roundCount();
        scoreCountYou();
        showOpCard(cpuCardPlayed);
     }else if (myNum8 > speedbattlenumrandom){
         alert("you win");
         alert(speedbattlenumrandom);
         roundCount();
         scoreCountYou();
         showOpCard(cpuCardPlayed);
     }else if(speedbattlenumrandom > myNum6 ){
         alert("you lost");
         alert(speedbattlenumrandom);
         scoreCountOp ();      
         roundCount();
         showOpCard(cpuCardPlayed);
     }else if(speedbattlenumrandom > myNum7){
         alert("you lost");
         alert(speedbattlenumrandom);
         scoreCountOp ();      
         roundCount();
         showOpCard(cpuCardPlayed);
     }else if(speedbattlenumrandom > myNum8 ){
         alert("you lost");
         alert(speedbattlenumrandom);
         scoreCountOp ();      
         roundCount();
         showOpCard(cpuCardPlayed);
     } else{  
         alert("you lost");
         alert(speedbattlenumrandom);
         scoreCountOp ();      
         roundCount();
         showOpCard(cpuCardPlayed); 
      } 
}

// comparative of stamina
function battleStamina(){
        let opNum6= parseInt (document.getElementsByClassName("stamina")[0].innerText.replace(/\D/g,''));
        let opNum7= parseInt (document.getElementsByClassName("stamina")[1].innerText.replace(/\D/g,''));
        let opNum8= parseInt (document.getElementsByClassName("stamina")[2].innerText.replace(/\D/g,''));
        let arraystamina = [];
        arraystamina.push(opNum6,opNum7,opNum8);
        const staminarandom = Math.floor(Math.random()*pokemonPlayed.length);
        let staminarandomnum = arraystamina[staminarandom];
        let cpuCardPlayed = pokemonPlayed[staminarandom];
        pokemonPlayed.splice(staminarandom, 1);       
//my deck
        let myNum9 =  this.innerText;
        let myNum10 = this.innerText;
        let myNum11 =  this.innerText;
        if(myNum9 > staminarandomnum ){
            alert("you win");
            alert(staminarandomnum);
             roundCount();
             scoreCountYou();
             showOpCard(cpuCardPlayed);            
          }else if(myNum10 > staminarandomnum){
            alert("you win");
            alert(staminarandomnum);
            roundCount();
            scoreCountYou();
            showOpCard(cpuCardPlayed);     
         }else if (myNum11 > staminarandomnum){
             alert("you win");
             alert(staminarandomnum);
             roundCount();
             scoreCountYou();
             showOpCard(cpuCardPlayed);     
         }else if(myNum9 < staminarandomnum){
             alert("you lost");
             alert(staminarandomnum);
             scoreCountOp ();      
             roundCount();
             showOpCard(cpuCardPlayed);    
         }else if(myNum10 < staminarandomnum){
             alert("you lost");
             alert(staminarandomnum);
             scoreCountOp ();      
             roundCount();
             showOpCard(cpuCardPlayed);   
         }else if(myNum11 < staminarandomnum){
             alert("you lost");
             alert(staminarandomnum);
             scoreCountOp ();      
             roundCount();
             showOpCard(cpuCardPlayed);        
         } else{            
             alert("you lost");
             alert(staminarandomnum);
             scoreCountOp ();      
             roundCount();
             showOpCard(cpuCardPlayed);    
          }
}

//comparative of Power
function battlePowers(){ 
//this part take 3 int numbers from the class and push into array  
        let opNum0 =  parseInt (document.getElementsByClassName("power")[0].innerText.replace(/\D/g,''));
        let opNum1 = parseInt (document.getElementsByClassName("power")[1].innerText.replace(/\D/g,''));
        let opNum2 = parseInt (document.getElementsByClassName("power")[2].innerText.replace(/\D/g,''));
        const arraypowers=[];
        arraypowers.push(opNum0,opNum1,opNum2); 
 //sort a random number and select a item into the array
        const powerrandom = Math.floor(Math.random()*pokemonPlayed.length);
//my hand deck
        const myNum3 = this.innerText;
        const myNum4 =  this.innerText;
        const myNum5 =  this.innerText;
        const powerbattlenumrandom = arraypowers[powerrandom];
        let cpuCardPlayed = pokemonPlayed[powerrandom];
        pokemonPlayed.splice(powerrandom, 1);
     if(myNum3 > powerbattlenumrandom ){
       alert("you win");
       alert(powerbattlenumrandom);
        roundCount();
        scoreCountYou();
        showOpCard(cpuCardPlayed); 
     }else if(myNum4 > powerbattlenumrandom){
       alert("you win");
       alert(powerbattlenumrandom);
       roundCount();
       scoreCountYou();
       showOpCard(cpuCardPlayed);
    }else if (myNum5 > powerbattlenumrandom){
        alert("you win");
        alert(powerbattlenumrandom);
        roundCount();
        scoreCountYou();
        showOpCard(cpuCardPlayed);
    }else if(myNum3 < powerbattlenumrandom){
        alert("you lost");
        alert(powerbattlenumrandom);
        scoreCountOp ();      
        roundCount();
        showOpCard(cpuCardPlayed);
    }else if(myNum4 < powerbattlenumrandom){
        alert("you lost");
        alert(powerbattlenumrandom);
        scoreCountOp ();      
        roundCount();
        showOpCard(cpuCardPlayed);
    }else if(myNum5 < powerbattlenumrandom){
        alert("you lost");
        alert(powerbattlenumrandom);
        scoreCountOp ();      
        roundCount();
        showOpCard(cpuCardPlayed);    
    } else{        
        alert("you lost");
        alert(powerbattlenumrandom);
        scoreCountOp ();      
        roundCount();
        showOpCard(cpuCardPlayed);       
     }    
}

//end of the game
function gameOver(){
    if(playerPointsFinal > opPointsFinal){
    popMessage.style.display = "flex";
     document.getElementById("messageresult").innerHTML = "YOU Win";
     document.getElementById("messagepoints").innerHTML = `Your Points ${playerPointsFinal}`; 
    }else{
        popMessage.style.display = "flex";
        document.getElementById("messageresult").innerHTML = "YOU Have Been Defeat";
        document.getElementById("messagepoints").innerHTML = `Your Points ${playerPointsFinal}`;
    }
}

//Deal random cards and sort the random numbers
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
                         //pokemons.sort();
                         var namepoke = pokemons[pokename];                                                                        
                          document.getElementsByClassName("name")[j].innerHTML = namepoke;
                          document.getElementsByClassName("power")[p].innerHTML = power ;
                          document.getElementsByClassName("speed")[s].innerHTML = speed;
                          document.getElementsByClassName("stamina")[a].innerHTML = stamina;
                    }
              }
            }
        }
    }  
}
}
//sort images pokemons
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
   
//return to main menu 
function returnMenu(){
    tutorial.style.display = "none";
    battlecamp.style.display = "none";
    menu.style.display = "flex";
    optionsPageGame.style.display = "none";   
}

function howToPlay(){  
    tutorial.style.display = "flex";
    battlecamp.style.display = "none";
    menu.style.display = "none";
    optionsPageGame.style.display = "none";
}

function startGamePage(){
    battlecamp.style.display = "flex";
   mainBackground.style.backgroundColor ="#804533";
    menu.style.display = "none";
    howTo.style.display = "none";
    optionsPageGame.style.display = "none";
}

function pageOptions(){
    optionsPageGame.style.display = "flex";
    battlecamp.style.display = "none";
    menu.style.display = "none";
    tutorial.style.display = "none";
}

function changeThemeClassic(){
    mainBackground.style.backgroundColor = "#d2d2d4";
    document.getElementById("gameboyscreen").style.backgroundImage = 'url("./assets/images/gameboyclassic.PNG")';
    document.getElementById("gameboyscreen").style.backgroundPositionX = "0px";
    document.getElementById("gameboyscreen").style.height = "299px";
    document.getElementsByClassName("color")[0].style.backgroundColor = "#57244b";
    document.getElementsByClassName("color")[1].style.backgroundColor = "#57244b";
    document.getElementsByClassName("picagif")[0].style.height = "192px";
    document.getElementsByClassName("picagif")[0].style.width = "192px";   
}

function changeThemeBlue(){
    mainBackground.style.backgroundColor = "#05a9c5";
    document.getElementById("gameboyscreen").style.backgroundImage = 'url("./assets/images/gameboyblue.PNG")';
    document.getElementById("gameboyscreen").style.height = "260px";
    document.getElementById("gameboyscreen").style.width = "324px";
    document.getElementById("gameboyscreen").style.backgroundPositionX = "0px";
    document.getElementsByClassName("color")[0].style.backgroundColor = "#333f49";
    document.getElementsByClassName("color")[1].style.backgroundColor = "#333f49";  
}

function changeThemePurple(){
    mainBackground.style.backgroundColor = "#b14cf1";
    document.getElementById("gameboyscreen").style.height = "260px";
    document.getElementById("gameboyscreen").style.width = "324px";
    document.getElementById("gameboyscreen").style.backgroundPositionX = "1px";
    document.getElementById("gameboyscreen").style.backgroundImage = 'url("./assets/images/gameboypurple.PNG")';
    document.getElementsByClassName("color")[0].style.backgroundColor = "#5e5e53";
    document.getElementsByClassName("color")[1].style.backgroundColor = "#5e5e53";  
}

function changeThemeGreen(){
    mainBackground.style.backgroundColor = "#7cc901";
    document.getElementById("gameboyscreen").style.height = "260px";
    document.getElementById("gameboyscreen").style.width = "324px";
    document.getElementById("gameboyscreen").style.backgroundPositionX = "0px";
    document.getElementById("gameboyscreen").style.backgroundImage = 'url("./assets/images/gameboyscreen.PNG")';
    document.getElementsByClassName("color")[0].style.backgroundColor = "#FFFF00";
    document.getElementsByClassName("color")[1].style.backgroundColor = "#FFFF00";
}

//hide cards of my  OP
function hidenCardOp(){
  firstCardOp.style.backgroundImage = 'url("./assets/images/pokecardback.PNG")';
  secondCardOp.style.backgroundImage = 'url("./assets/images/pokecardback.PNG")';
  thirdCardOp.style.backgroundImage = 'url("./assets/images/pokecardback.PNG")';
  for (let i = 0 ; i < 3; i++){
  skillsPoke[i].style.display= "none";
  imgPoke[i].style.display= "none";
  namePokeCard[i].style.display= "none";  
  }
}

// Show OP cards
function showOpCard(card){
   if (card === 0){
        firstCardOp.style.backgroundImage = 'url("./assets/images/frontcard.jpg")'; 
        skillsPoke[0].style.display= "block";
        imgPoke[0].style.display= "block";
       namePokeCard[0].style.display= "block";
    }else if (card === 1){
        secondCardOp.style.backgroundImage = 'url("./assets/images/frontcard.jpg")'; 
        skillsPoke[1].style.display= "block";
        imgPoke[1].style.display= "block";
        namePokeCard[1].style.display= "block";
   }else if (card ===2){
        thirdCardOp.style.backgroundImage = 'url("./assets/images/frontcard.jpg")'; 
        skillsPoke[2].style.display= "block";
        imgPoke[2].style.display= "block";
        namePokeCard[2].style.display= "block";
    }else if (card === card){
    }  
}

//hide my cards after play
function hiddenMyCardOne(){
    playerCardOne.style.backgroundImage = 'url("./assets/images/pokecardback.PNG")';
    skillsPoke[3].style.display= "none";
    imgPoke[3].style.display= "none";
    namePokeCard[3].style.display= "none";  
}

function hiddenMyCardTwo(){
    playerCardTwo.style.backgroundImage = 'url("./assets/images/pokecardback.PNG")';
    skillsPoke[4].style.display= "none";
    imgPoke[4].style.display= "none";
    namePokeCard[4].style.display= "none";
    }

function hiddenMyCardThird(){
    playerCardThird.style.backgroundImage = 'url("./assets/images/pokecardback.PNG")';
    skillsPoke[5].style.display= "none";
    imgPoke[5].style.display= "none";
    namePokeCard[5].style.display= "none";
    }

//show my hand
function ShowMyHand(){
    playerCardOne.style.backgroundImage = 'url("./assets/images/frontcard.jpg")';
    playerCardTwo.style.backgroundImage = 'url("./assets/images/frontcard.jpg")';
    playerCardThird.style.backgroundImage = 'url("./assets/images/frontcard.jpg")';
    for (let i = 3; i < 6; i++){
        skillsPoke[i].style.display= "block";
        imgPoke[i].style.display= "block";
        namePokeCard[i].style.display= "block";
    }
    dealCards();
    sortImgPoke();
    hidenCardOp();
    ResetArray();
    HiddenButton();
}

function HiddenButton(){
    element.style.display = "none";
    btnShow.style.display = "none";
}

function ResetArray() {
   pokemonPlayed.push(0,1,2);
}

function endGame(){
    location.reload();
}

function showMyCardButton(){
    btnShow.style.display = "block";
}

function mainMenu(){   
}