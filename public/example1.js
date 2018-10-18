ReactDOM.render(
	<h1>Hello world</h1>
	,document.getElementById('root')
);

// function Person(name,id){
// 	this.name = name;
// 	this.id = id;
// }

// var p = new Person('vhd',88);
// console.log(p);

class Person {
	constructor(name,id){
		this.name = name;
		this.id = id;
	}

	greeting(){
		return "Hallo " + this.name + ". Your id is " + this.id;
	}
}
// var p = new Person('vhd',88);
// console.log(p.greeting());
class Child extends Person{
	constructor(name,id,land){
		super(name,id);
		this.land = land;
	}
	greeting(){
		return this.name + ' - ' + this.id + ' - ' +this.land;
	}
}

var ch = new Child('vhd',88,'QNg');
console.log(ch.greeting());
