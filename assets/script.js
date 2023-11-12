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

let pokename ="notdefined";

let element = document.getElementById("btn-start")
element.addEventListener("click", runGame);








 let power = document.getElementsByClassName("power");


power[3].addEventListener("click", battlePowers);
power[4].addEventListener("click", battlePowers);
power[5].addEventListener("click", battlePowers);



function runGame(){

       
        dealCards();

    

};





function scoreCountYou(){
    let youscore = parseInt(document.getElementById("youpoints").innerText);
    document.getElementById("youpoints").innerText = ++youscore 

};



function scoreCountOp(){
    let opscore = parseInt(document.getElementById("oppoints").innerText);
    document.getElementById("oppoints").innerText = ++opscore 

};

function roundCount(){
    let opscore = parseInt(document.getElementById("roundpoint").innerText);
    document.getElementById("roundpoint").innerText = ++opscore

}


function selectPower(){

};







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
        let battlenumrandom = arraypowers[powerrandom];
     if(myNum3 > battlenumrandom ){
        alert("you win");
        alert(battlenumrandom);
        roundCount();
        scoreCountYou();
        
        
     }else{
        
        alert("you lost");
        alert(battlenumrandom);
        scoreCountOp ();      
        roundCount();
        
     }
         
    
}
//};





function gameOver(){

};



function dealCards(){
    // it will get all elements i need 
    let name = document.getElementsByClassName("name");
    let power = document.getElementsByClassName("power");
    let speed = document.getElementsByClassName("speed");
    let stamina = document.getElementsByClassName("stamina");
    // interaction array of classes to sort diferent number for each card  
    for (let j = 0; j < name.length ; j++){
        for (let p = 0; p < power.length ; p++){
            for (let s = 0; s < speed.length ; s++){
                for (let a = 0; a < stamina.length ; a++){
                    if( name[j] === name[j]  ){


                        pokename = Math.floor(Math.random()*pokemons.length);
                        let power = Math.floor(Math.random()*100);
                        let speed = Math.floor(Math.random()*100);
                         let stamina = Math.floor(Math.random()*100);
                          namepoke = pokemons[pokename];

                          document.getElementsByClassName("name")[j].innerHTML = namepoke;
                          document.getElementsByClassName("power")[p].innerHTML =`Power:${power}` ;
                          document.getElementsByClassName("speed")[s].innerHTML = `Speed:${speed}`;
                          document.getElementsByClassName("stamina")[a].innerHTML = `Stamina:${stamina}`;


                    }




                }
            }

        }

    }
         
};


