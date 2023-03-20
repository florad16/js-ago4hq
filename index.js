// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Aufgave5
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);
console.log(menu);

//Aufgabe6

let user = {
  name: "John",
  go:function() {
    console.log(this.name)
  }
}
user.go();

//Aufgabe 7

class Animal {
  constructor(name){
    this.name = name;
    

  }
}
class Rabbit extends Animal{
  constructor(name){
    super(name);
    this.created = Date.now();
  }
}
let rabbit = new Rabbit ("White Rabbit");
console.log(rabbit.name);

//Aufgabe8 



