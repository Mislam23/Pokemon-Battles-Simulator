//PAGE 1

let currPlayer = 'Player1'
//TITLE
let title = document.getElementById("title");
//CONTAINER
let containerPg1 = document.getElementById("middleContainer");
//TEXT ALIGN
let arrayToAlign = [title, containerPg1];
arrayToAlign.forEach( el => {
  el.style.textAlign = "center";
})

class Pokemon {
  constructor(name, hp, faint = false, icon, audio, player) {
    this.player = player
    this.name = name
    this.hp = hp
    this.faint = faint
    this.icon = icon
    this.audio = audio
  }
//Attacks
  shadowBall(){
    name: 'Shadow Ball'
    dmg: 20
    //If Player 2 is equivalent to opposite type, deal more damage.
  }
  shadowClaw(){
    name: 'Shadow Claw'
    dmg: 15
  }
  curse(){
    name: 'Curse'
    dmg: 5
  }
  astonish(){
    name: 'Astonish'
    dmg: 15
  }
  dreamEater(){
    name: 'Dream Eater'
    dmg: 25
  }
  hyperVoice(){
    name: 'Hyper Voice'
    dmg: 15
  }
  strength(){
    name: 'Strength'
    dmg: 10
  }
  headbutt(){
    name: 'Headbutt'
    dmg: 5
  }
}
   
const player1 = {
pokemon: null
}

const player2 = {
pokemon: null
}

//Battlefield
function Battlefield(){

}

//Box 1: Haunter
function haunterSelect()  {
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `You chose ${haunter.name}`
  player1.pokemon=haunter
  player1.player='Player1'
  var img = document.createElement('img')
  img.src = player1.pokemon.icon;
  document.querySelector("#leftContainer").appendChild(img)
  player2Choice.innerText = `Player 2 Select`
  currPlayer = 'Player2'
  }
  if (currPlayer === 'Player2' && player1.pokemon!=haunter) {
  player2Choice.innerText = `You chose ${haunter.name}`
  player2.pokemon=haunter
  player2.player='Player2'
  var img = document.createElement('img')
  img.src = player2.pokemon.icon;
  document.querySelector("#rightContainer").appendChild(img)
  currPlayer = null ////Sets to null until the next stage of game, prevents appending infinite Pokemon images
  }
}
//Box 2: JigglyPuff
function jigglyPuffSelect() {
  if (currPlayer === 'Player1') {
  player1Choice.innerText = `You chose ${jigglyPuff.name}`
  player1.pokemon=jigglyPuff
  player1.player='Player1'
  var img = document.createElement('img')
  img.src = player1.pokemon.icon;
  document.querySelector("#leftContainer").appendChild(img)
  player2Choice.innerText = `Player 2 Select`
  currPlayer='Player2'
}
  if (currPlayer === 'Player2' && player1.pokemon!=jigglyPuff) {
  player2Choice.innerText = `You chose ${jigglyPuff.name}`
  player2.pokemon=jigglyPuff
  player2.player='Player2'
  var img = document.createElement('img')
  img.src = player2.pokemon.icon;
  document.querySelector("#rightContainer").appendChild(img)
  currPlayer=null //Sets to null until the next stage of game, prevents appending infinite Pokemon images
  }
}

const jigglyPuff = new Pokemon('Jigglypuff', 200, false, "https://archives.bulbagarden.net/media/upload/f/fc/Spr_2c_039.png", "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3")
const haunter = new Pokemon('Haunter', 200, false, "https://archives.bulbagarden.net/media/upload/6/6d/Spr_5b_093.png")

let player1Choice = document.getElementById("player1Choice")
document.getElementById("char1").addEventListener("click", haunterSelect)


let player2Choice = document.getElementById("player2Choice")
document.getElementById("char2").addEventListener("click", jigglyPuffSelect)




  