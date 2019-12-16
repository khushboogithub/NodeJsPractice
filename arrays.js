var counter = function(a){
      return ('the array is ' + a + ' and the length is ' + a.length)
}

// a=['khushboo','gupta','india']
// console.log(counter(a));

var adder = function(a,b){
      return 'the sum is ${a+b}'
}

var pi = 3.42

module.exports.counter=counter
module.exports.adder=adder
module.exports.pi=pi