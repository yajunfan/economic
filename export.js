// var Main = require('./main');
// Main.world.aa();
// Main.world.bb();
// Main.world.ccc();
var Utils =require('./utils');
var utils = new Utils();
utils.aa();
utils.bb();
utils.cc();

function add(sunfn,value){
    sunfn(value)
}
add(function(value){
    console.log(value)
},'fyj')