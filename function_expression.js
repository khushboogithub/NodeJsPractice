//normal function
function sayHi(){
      console.log('hi')
}

sayHi();
//function expression
var sayWorld=function(){
      console.log('world')
}

sayWorld();

//function calling

function callsayWorld(x){
      x();
}
callsayWorld(sayWorld); 