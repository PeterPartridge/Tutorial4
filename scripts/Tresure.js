/*jslint node:true "es6": true */
//var exports = module.exports = {};
//export const
define( function(){
return{
  build : function(id, Sprite, stage) {
     //Make the treasure box using the alias
    'use strict';
  let treasure = new Sprite(id["Treasure.png"]);
  stage.addChild(treasure);

  //Position the treasure next to the right edge of the canvas
  treasure.x = stage.width - treasure.width - 58;
  treasure.y = stage.height / 2 - treasure.height / 2;
stage.addChild(treasure);
}
};
});
