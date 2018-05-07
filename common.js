//var requirejs = require('JavaScript/require');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
     baseUrl:"scripts",
     paths:{
       pixxi:['pixi.js/dist/pixi.min'],
       Key:['Keyboard'],
       monster:['Monster'],
       gold:['Tresure']
     }
    //nodeRequire: require
});

require(['Game']);
