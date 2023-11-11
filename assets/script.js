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

function runGame(){
for(let i = 0 ; i < pokemons.length; i++){
    if(pokename === pokemons[i]){
        alert("ready to play");
    }else{
       
        dealCards();
    }

}
    

};





function scoreCount(){

};







function selectPower(){

};







function battlePowers(){

};





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
        
    //ends here sort cards




    // pokename = Math.floor(Math.random()*pokemons.length);
   //  let power = Math.floor(Math.random()*100);
   //  let speed = Math.floor(Math.random()*100);
  //   let stamina = Math.floor(Math.random()*100);
 //   namepoke = pokemons[pokename];
   



    //document.getElementsByClassName("name")[0].innerHTML = namepoke;
   // document.getElementsByClassName("name")[1].innerHTML = namepoke;
   // document.getElementsByClassName("name")[2].innerHTML = namepoke;

   // document.getElementsByClassName("power")[0].innerHTML =`Power:${power}` ;
   // document.getElementsByClassName("power")[1].innerHTML =`Power:${power}` ;
  //  document.getElementsByClassName("power")[2].innerHTML =`Power:${power}` ;


   // document.getElementsByClassName("speed")[0].innerHTML = `Speed:${speed}`;
   // document.getElementsByClassName("speed")[1].innerHTML = `Speed:${speed}`;
   // document.getElementsByClassName("speed")[2].innerHTML = `Speed:${speed}`;




   // document.getElementsByClassName("stamina")[0].innerHTML = `Stamina:${stamina}`;
   // document.getElementsByClassName("stamina")[1].innerHTML = `Stamina:${stamina}`;
   // document.getElementsByClassName("stamina")[2].innerHTML = `Stamina:${stamina}`;



    
};

