define( function(){
return{

build:function(id, Sprite, stage) {
  //Make the blobs
    let numberOfBlobs = 6,
        spacing = 48,
        xOffset = 150;

  for (let i = 0; i < numberOfBlobs; i++) {

    //Make a monster
    let blob = new Sprite(id["Monster.png"]);

    //Space each blob horizontally according to the `spacing` value.
    //`xOffset` determines the point from the left of the screen
    //at which the first blob should be added.
    let x = spacing * i + xOffset;

    //Give the blob a random y position
    //(`randomInt` is a custom function - see below)
    let y = randomInt(0, stage.height - blob.height);

    //Set the blob's position
    blob.x = x;
    blob.y = y;

    //Add the blob sprite to the stage
    stage.addChild(blob);
}
}
};
});

function randomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
