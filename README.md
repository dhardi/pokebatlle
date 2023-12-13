# PokeBattle

  PokeBattle was created for Pokemon lovers like me, I play Pokemon from the Gameboy Classic to the current Nitendo consoles, the old games from the Pokemon franchise were my aspiration for creating this game and design also.

![responsive](https://github.com/dhardi/pokebatlle/blob/main/docs/responsive.PNG)

## Features Home Page

 This is a responsive website with options to change design and colors within the game.

### Existing Features
  
- The website has a menu with three options:
  - Star Game
  - How To Play
  - Option 

  ![Main Menu](https://github.com/dhardi/pokebatlle/blob/main/docs/menu.PNG)

## The Game 

   - The game will give you three cards with three different pokemons. The card will have three attributes and each attribute has a value linked to it. The winner will be the one who scores the most points when they reach round twenty one and the game ends. each round is equivalent to one point each round you must choose your pokemon's attribute and battle until the last round.
  
  ![Gameplay](https://github.com/dhardi/pokebatlle/blob/main/docs/gameplay.PNG)

## How the Game Works
   As soon as the player selects the start game menu option the game will open you will see a start button when you press the game it will draw three cards for the player and three cards for the CPU each round you must choose an attribute among your three pokemons and click in the attribute value to continue the battle.
The winner will be the one with the highest value of the chosen attribute.
At the end of twenty-one rounds the value of the player's points will be compared and his opponent, the winner of the game will be the one with the most points.



## BoardScore
 No BoardScore o player vai conseguir acompanhar seus pontos e de seu oponente ao lado voce vera tambem a contagem dos rounds bem ao lado do boardscore.

![BoardScore](https://github.com/dhardi/pokebatlle/blob/main/docs/boardscore.PNG)

## Pokemon Card
  -the card, the player will be able to see the name of the pokemon that was drawn, the pokemon's image and its attributes right below the pokemon's image. To select the attribute, place the hovered effect to highlight the attribute value and direct the player where to click.
  
![Pokemon Card](https://github.com/dhardi/pokebatlle/blob/main/docs/card.PNG)

## Game Over
  - The Game Over window will appear when the game reaches twenty one rounds and the player will be able to see the result and also the final score he achieved.When the player clicks on the gameover button, he will be directed to the main page where he can start the game again or change the game theme.

![Game Over](https://github.com/dhardi/pokebatlle/blob/main/docs/gameover.PNG)


### Tips and Funfacts
  Each Pokemon card will only be allowed to be used once, so be smart and select the highest tribute value. At the end of the round, your card will be turned over and your opponent's card will be turned over and reveals the card that the CPU selected. Don't stay if you get a strong pokemon, the values are random for all pokemons so don't be scared if you get MewTwo and your opponent defeats you with a Metapoid.

 ![End of round](https://github.com/dhardi/pokebatlle/blob/main/docs/round.PNG)

 ### End of cycle
   every three rounds the cycle ends and the game will give you three more cards when pressing the Show my cards button will reveal your three new cards and a new cycle will begin.

  ![End of Cycle](https://github.com/dhardi/pokebatlle/blob/main/docs/endcycle.PNG)


# Design and Colors
- The design was based on the Pokémon franchise games, the GameBoy Color and Classic versions. The colors will be based on laptops from the 90s and 2000s.



## Colors 
 The colors was based on the Pokémon franchise games, the GameBoy Color and Classic versions. The colors will be based on portable consoles from the 90s and 2000s.

![GameBoy Colors](https://github.com/dhardi/pokebatlle/blob/main/docs/gameboycollection.PNG)

## design
 the design of the game is based on the old pokemon games from the series YELLOW, RED, BLUE and GREEN the textures the font family were implemented exactly as in the Pokemon Games Franchise the border to make the menu was used the same as used in the game.

![textures](https://github.com/dhardi/pokebatlle/blob/main/docs/menu.PNG)

## Options 
- In the options section you can change the theme of the website, causing the website to change colors and also the gameboy screen above the menu.

![Options](https://github.com/dhardi/pokebatlle/blob/main/docs/options.PNG)

### Blue
![Blue](https://github.com/dhardi/pokebatlle/blob/main/docs/blue.PNG)

### Purple
![Purple](https://github.com/dhardi/pokebatlle/blob/main/docs/purple.PNG)


### Green
![Green](https://github.com/dhardi/pokebatlle/blob/main/docs/green.PNG)


### Classic
![Classic](https://github.com/dhardi/pokebatlle/blob/main/docs/classico.PNG)


### BattleCamp

- BattleCamp wont change the backgound after changed the theme because the only color matches with the backgound Image is rgb(128, 69, 51).

![Color]()

### Footer
 - Footer includes all liks to the relevant social media sites for this project .The links will open to a new tab to allow easy navigation for the user.

 ![Footer](https://github.com/dhardi/pokebatlle/blob/main/docs/footer.PNG)

## Future Ideas to Implement 

- SuperCards
- Rank System 
- Expand Pokemons add add first second and third generation of pokemon
- System of levels Hard Normal and Easy
 

## Testing 

During my project I set the objective of making a pokemon game with a first generation of 150 pokemons. The first challenge was to create a system that would generate a random value for each attribute and assign it to all 150 pokemons.
After this challenge, the gameplay would come, so I created a number comparison system that in the end would compare the highest value of the attribute. To test the gameplay, I had my eight-year-old son play and explore the game.I also put my wife to play and it was vitally important for someone who is not familiar with games. 
The game will guide you how to play, for players who still have questions about how to play, I have implemented a how to play section.
I had a lot of problems with the game mechanics when adding events and how to compare the selected object. These problems helped me learn how the event click system works best and the type of variable we should use, but the biggest challenge was making the CPU selects a random card and a random attribute value without repeating for the entire cycle after that the array system was absorbed by me.

### Validator Testing 

- W3c Html Validator

![htmlvalidator](https://github.com/dhardi/pokebatlle/blob/main/docs/html-validator.PNG)

- Jigsaw Validator 

![cssvalidator](https://github.com/dhardi/pokebatlle/blob/main/docs/css-validator.PNG)

- Performace Lighthouse Desktop
  
![lighthouse](https://github.com/dhardi/pokebatlle/blob/main/docs/lighthouse-desktop.PNG)

- Performace Lighthouse Mobile

![lighthousemobile](https://github.com/dhardi/pokebatlle/blob/main/docs/lighthousetest.PNG)

- Performace Lighthouse Mobile

![JsHint](https://github.com/dhardi/pokebatlle/blob/main/docs/javahint.PNG)


### Unfixed Bugs

I had to use global Var one of my variables otherwise it will crash the game, i Know it not recommended to use Global variables.


## Deployment 
- The Site was Deployed to GitHub. The steps to deploy are as Fallows
  - From the project's repository, go to the Settings tab.
  - From the left-hand menu, select the Pages tab.
  - Under the Source section, select the Main branch from the drop-down menu and click Save.
  - A message will be displayed to indicate a successful deployment to GitHub pages and provide the live link.

You can find the live site via the following URL - [PokeBattle](https://dhardi.github.io/pokebatlle/)


## Credits

 Firstly, I would like to mention my tutor who was a great help to my development, I would like to thank my wife for her help with color choices. Below I will provide the links to the content to produce the website.

 - textures and Font [Luttge](https://luttje.github.io/css-pokemon-gameboy/)
 - Content
   -  [Pokemon Images](https://www.pinterest.ie/search/pins/?q=pokemons&rs=typed)
   -  [©2023 Pokémon. ©1995 - 2023 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.](https://www.pokemon.com/us/copyright//)