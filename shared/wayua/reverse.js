
 
   var reverseString = function(string) {
       
       if (string === ""){
           return null;
       }
       else {
           var result = "";
        var wordArray = string.split("");
        for(var i = wordArray.length - 1; i >= 0; i--) {
            result += wordArray[i] + " ";
        }
        result = result.replace(/\s/g,''); 
        if (result === string){
            return true;
        }
        else{
        return result; 
        }
       }
       
    };

