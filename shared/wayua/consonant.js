//var vowel = ['a', 'e', 'i','o','u'];

function checkCons(cons){
	var consonants= "bcdfghjklmnpqrstvwxyz";
	
	var conslen = consonants.length;
	for (var j = 0; j < conslen; j++){
		if (cons === consonants[j]){
			return true;

		}
			
		}
		return false;

}

function convert_cons(string){
	var strlen = string.length;
	new_string = "";

	for (var i = 0; i < strlen; i++){
		if (checkCons(string[i])){
			new_string += "i";
		} else {
			new_string += string[i];
		}
	}
	return new_string;
}
	
console.log(convert_cons("bootcamp"));	


	