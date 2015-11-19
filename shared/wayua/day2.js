var day2 = function types(info){
	var result = typeof info;

	if (info instanceof Array){
		return result[1];
	}else if (result == 'null'){
		return "null";
	}else if (result == 'string'){
		return info.length;
	}else if (result == 'number'){
		return info * 2;
	}else if (result =='boolean'){
		return info;
	}else if (result == 'function'){
		return info(true);
	}else if (result == 'object'){
	    return Object.keys(info)[0];
}
};	
//testing array
console.log (day2(['cow','sheep','goat','donkey']));

//testing number
console.log (day2(2 === 2));

//testing string
console.log (day2('pencil'));

//testing boolean
console.log (day2('45 != 34'));

//testing object
console.log (day2({'age':15}));

//testing function
console.log (day2(day2));

//testing null
console.log(day2());