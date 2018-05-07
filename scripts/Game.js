// using declerations

//import * as tre from 'Tresure';
//let tres = requirejs('./Tresure');
define(['require','pixxi', 'Keyboard', 'Monster','Tresure'],function(require){
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle;

//Create a Pixi Appliexplorerion
let app = new Application({
  width: 800,
  height: 600,
  antialias: true,
  transparent: false,
  resolution: 1
});

document.body.appendChild(app.view);


//stage for actors
let stage = app.stage;

loader.add("images/ImagePack.json").load(setup);

let dungeon, explorer, tresure, id;

function setup(){
// using statments
let keyboard = require('Keyboard');
let monster = require('Monster');
let gold = require('Tresure');


 let left = keyboard.Key(37) ,
   up =  keyboard.Key(38),
   right = keyboard.Key(39),
   down = keyboard.Key(40);

let dungeonTextures = TextureCache["map.png"]
dungeon = new Sprite(dungeonTextures);
stage.addChild(dungeon);

//2. Access the texture using through the loader's `resources`:
explorer = new Sprite(
  resources["images/ImagePack.json"].textures["Hero.png"]
);
explorer.vx = 0;
explorer.vy = 0;

explorer.y = app.stage.height / 2 - explorer.height / 2;
explorer.x = 25;
//Center the explorer vertically
app.stage.addChild(explorer);


//Left arrow key `press` method
left.press = () => {
 //Change the explorer's velocity when the key is pressed
 explorer.vx = -5;
 explorer.vy = 0;
};

//Left arrow key `release` method
left.release = () => {
 //If the left arrow has been released, and the right arrow isn't down,
 //and the explorer isn't moving vertically:
 //Stop the explorer
 if (!right.isDown && explorer.vy === 0) {
   explorer.vx = 0;
 }
};

//Up
up.press = () => {
 explorer.vy = -5;
 explorer.vx = 0;
};
up.release = () => {
 if (!down.isDown && explorer.vx === 0) {
   explorer.vy = 0;
 }
};

//Right
right.press = () => {
 explorer.vx = 5;
 explorer.vy = 0;
};
right.release = () => {
 if (!left.isDown && explorer.vy === 0) {
   explorer.vx = 0;
 }
};

//Down
down.press = () => {
 explorer.vy = 5;
 explorer.vx = 0;
};
down.release = () => {
 if (!up.isDown && explorer.vx === 0) {
   explorer.vy = 0;
 }
};

//Set the game state
state = play;

//3. Create an optional alias called `id` for all the texture atlas
//frame id textures.
id = PIXI.loader.resources["images/ImagePack.json"].textures;

gold.build(id, Sprite, stage);

//monster
monster.build(id, Sprite, stage);

app.ticker.add(delta => gameLoop(delta));

}

function gameLoop(delta){
//update current game state
state(delta)
}
function play(delta) {

//Use the explorer's velocity to make it move
explorer.x += explorer.vx;
explorer.y += explorer.vy
}

//The `randomInt` helper function

});
