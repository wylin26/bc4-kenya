function shape(){
	this.name = '';
	this.area = 2;
};

shape.prototype.area = 10;

var circle = new shape ();

circle.name;
circle.area;

//area inside function shape will override shape.prototype.area. 
//values inside the constructor are given first priority