//if num is multiple of 3, print "fizz"; 
//if multpiple of 5, print "buzz";
//if multiple of 3 and 5, print "fizzbuzz"
function fizz_buzz(num){

	if (isNaN(num)){
		return false;
	}
	
	//if (typeof num) !== "number") also works but is not best choice cos "typeof NaN is a number"
	//so if num = NaN there will be an error
	if (num % 15 === 0){
		return "FizzBuzz";
	}

	if (num % 3 === 0){
		return "fizz";
	}

	if (num % 5 === 0){
		return "buzz";
	}
	
	//this is the default aka
	//not a multiple of 3 or 5
	//has passed all the other tests
	return num;


};