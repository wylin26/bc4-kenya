var cb = function (p, j) {

return [j, p];

};

var checkNum =  function (i, k, callback) {
 var result = callback[i]; 

 //array will contain 46, 43
 return typeof result || array.isArray(result); //should return type object

 //instantiated class is always truthy
 //even an array
};

checkNum(46, 43, cb);

