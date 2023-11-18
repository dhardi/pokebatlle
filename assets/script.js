let pokemons = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise",
    "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
    "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash",
    "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix",
    "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect",
    "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape",
    "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke",
    "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem",
    "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel",
    "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee",
    "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee",
    "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea",
    "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar",
    "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon",
    "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres",
    "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
];


let pokepath =["abra.PNG",
"aerodactyl.PNG",
"alakazam.PNG",
"arbok.PNG",
"arcanine.PNG",
"articuno.PNG",
"beedrill.PNG",
"bellsprout.PNG",
"blastoise.PNG",
"bulbasaur.PNG",
"butterfree.PNG",
"caterpie.PNG",
"chansey.PNG",
"charizard.PNG",
"charmander.PNG",
"charmeleon.PNG",
"clefable.PNG",
"clefairy.PNG",
"cloyster.PNG",
"cubone.PNG",
"dewgong.PNG",
"diglett.PNG",
"ditto.PNG",
"dodrio.PNG",
"doduo.PNG",
"dragonair.PNG",
"dragonite.PNG",
"dratini.PNG",
"drowzee.PNG",
"dugtrio.PNG",
"eevee.PNG",
"ekans.PNG",
"electabuzz.PNG",
"electrode.PNG",
"exeggcute.PNG",
"exeggutor.PNG",
"farfetchd.PNG",
"fearow.PNG",
"flareon.PNG",
"gastly.PNG",
"gengar.PNG",
"geodude.PNG",
"gloom.PNG",
"golbat.PNG",
"goldeen.PNG",
"golduck.PNG",
"golem.PNG",
"graveler.PNG",
"grimer.PNG",
"growlithe.PNG",
"gyarados.PNG",
"haunter.PNG",
"hitmonchan.PNG",
"hitmonlee.PNG",
"horsea.PNG",
"hypno.PNG",
"ivysaur.PNG",
"jigglypuff.PNG",
"jolteon.PNG",
"jynx.PNG",
"kabuto.PNG",
"kabutops.PNG",
"kadabra.PNG",
"kakuna.PNG",
"kangaskhan.PNG",
"kingler.PNG",
"koffing.PNG",
"krabby.PNG",
"lapras.PNG",
"lickitung.PNG",
"machamp.PNG",
"machoke.PNG",
"machop.PNG",
"magikarp.PNG",
"magmar.PNG",
"magnemite.PNG",
"magneton.PNG",
"mankey.PNG",
"marowak.PNG",
"meowth.PNG",
"metapod.PNG",
"mew.PNG",
"mewtwo.PNG",
"moltres.PNG",
"mrmime.PNG",
"muk.PNG",
"nidoking.PNG",
"nidoqueen.PNG",
"nidoran.PNG",
"nidoranf.PNG",
"nidorina.PNG",
"nidorino.PNG",
"ninetales.PNG",
"oddish.PNG",
"omanyte.PNG",
"omastar.PNG",
"onix.PNG",
"paras.PNG",
"parasect.PNG",
"persian.PNG",
"pidgeot.PNG",
"pidgeotto.PNG",
"pidgey.PNG",
"pikachu.PNG",
"pinsir.PNG",
"poliwag.PNG",
"poliwhirl.PNG",
"poliwrath.PNG",
"ponyta.PNG",
"porygon.PNG",
"primeape.PNG",
"psyduck.PNG",
"raichu.PNG",
"rapidash.PNG",
"raticate.PNG",
"rattata.PNG",
"rhydon.PNG",
"rhyhorn.PNG",
"sandshrew.PNG",
"sandslash.PNG",
"scyther.PNG",
"seadra.PNG",
"seaking.PNG",
"seel.PNG",
"shellder.PNG",
"slowbro.PNG",
"slowpoke.PNG",
"snorlax.PNG",
"spearow.PNG",
"squirtle.PNG",
"starmie.PNG",
"staryu.PNG",
"tangela.PNG",
"tauros.PNG",
"tentacool.PNG",
"tentacruel.PNG",
"vaporeon.PNG",
"venomoth.PNG",
"venonat.PNG",
"venusaur.PNG",
"victreebel.PNG",
"vileplume.PNG",
"voltorb.PNG",
"vulpix.PNG",
"wartortle.PNG",
"weedle.PNG",
"weepinbell.PNG",
"weezing.PNG",
"wigglytuff.PNG",
"zapdos.PNG",
"zubat.PNG",



];

let pokename ="notdefined";
let findMyPoke = "notdefined";
let element = document.getElementById("btn-start")
element.addEventListener("click", runGame);








 let power = document.getElementsByClassName("power");
 let speed = document.getElementsByClassName("speed");
 let stamina = document.getElementsByClassName("stamina");


power[3].addEventListener("click", battlePowers);
power[4].addEventListener("click", battlePowers);
power[5].addEventListener("click", battlePowers);
speed[3].addEventListener("click", battleSpeed);
speed[4].addEventListener("click", battleSpeed);
speed[5].addEventListener("click", battleSpeed);
stamina[3].addEventListener("click", battleStamina);
stamina[4].addEventListener("click", battleStamina);
stamina[5].addEventListener("click", battleStamina);


function runGame(){

    pokemons.sort();
        dealCards();

    

};





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
        }else if(roundpoint===6){
            dealCards();
        }else if(roundpoint===9){
            dealCards();
        }else if (roundpoint===12){
            dealCards();
        }else if (roundpoint===15){
            dealCards();

            }else if (roundpoint===18){
                dealCards(); 
            }else if (roundpoint===21)
            gameOver();
            break;
        }
    
    while(i<21,i++);
}



   // }else if(roundpoint=== 3 && roundpoint=== 6 && roundpoint=== 9 && roundpoint=== 12 && roundpoint=== 12 && roundpoint=== 15 && roundpoint=== 18  ){
        
   //     dealCards();
  //  }else if (roundpoint === 21){
   //     gameOver();
  //  }





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
 
 
     }else if(myNum6 < speedbattlenumrandom){
         alert("you lost");
         alert(speedbattlenumrandom);
         scoreCountOp ();      
         roundCount();
 
     }else if(myNum7 < speedbattlenumrandom){
         alert("you lost");
         alert(speedbattlenumrandom);
         scoreCountOp ();      
         roundCount();
 
 
     }else if(myNum8 < speedbattlenumrandom){
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


                        pokename = Math.floor(Math.random()*pokemons.length);
                        let power = Math.floor(Math.random()*100);
                        let speed = Math.floor(Math.random()*100);
                         let stamina = Math.floor(Math.random()*100);
                          namepoke = pokemons[pokename];
                          findMyPoke = pokepath[pokename];
                          
                          document.getElementsByClassName("name")[j].innerHTML = namepoke;
                          document.getElementsByClassName("power")[p].innerHTML =`Power:${power}` ;
                          document.getElementsByClassName("speed")[s].innerHTML = `Speed:${speed}`;
                          document.getElementsByClassName("stamina")[a].innerHTML = `Stamina:${stamina}`;
                          //document.getElementsByClassName("imgpoke")[y].style.backgroundImage = "url(./assets/images/arbok.PNG";
                          imgpoke[y].style.backgroundImage = 'url("./assets/images/' + findMyPoke + '")';
                         

                    }




                }
            }

        }

    }
}
         
};

function sortImgPoke(){
    let name = document.getElementsByClassName("name");
    let imgpoke = document.getElementsByClassName("imgpoke");

    for (let i = 0 ;i < name.length ; i++){
        for (let r = 0 ; r < pokepath.length; r++){

            if(name[i]==pokepath[r]){
                
            }




        }
    }



}
