//





var fs = require('fs');

// mkdir, readFile, writeFile
/* fs.mkdir('stuff', function () {
    fs.readFile('readMe.txt', 'utf8', function (err, data) {
        fs.writeFile('./stuff/writeMe.txt', data);
    });
}); 
//Remove file and Directory
fs.unlink('./stuff/writeMe.txt, function(){
    fs.rmdir('stuff');
});

*/

//var readme = fs.readFileSync('readme.txt', 'utf8');
//fs.writeFileSync('writeMe.txt', readme);

// Asynchronus non blocking code
/* fs.readFile('readme.txt','utf8', function(err,data){
   fs.writeFile('writeMe.txt',data);
}); */

//var file = 

fs.readFile('readme.txt', 'utf8', function (err, data) {
    fs.writeFile('writeme.txt', data);
    //console.log(data);
});

console.log('This is an instruction outside the sync file system.');

/* var events = require('events');
var util = require('util');

var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter)

var james = new Person('james'); var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log(person.name + 'said:' + mssg);
    });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want some curry');
 




/* var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function (mssg) {
    console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emitted'); 
*/


/* var stuff = require('./stuff');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));
 */
/* var time = 0;

var timer = setInterval(function () {
    time += 2;
    console.log(time + 'seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000); */

/* console.log(__dirname);
console.log(__filename);

function sayHi() {
    console.log('Hi');
}
sayHi();
var sayBye = function () {
    console.log('bye');
};
sayBye();
 */