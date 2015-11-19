function Person (age, name, status){
	this.name = name;
	this.age = age;
	this.status = status;

	//give the object behaviour

	this.sayHello = function (){
		console.log ("Hello, it's me");
	};

}

var eston = new Person();