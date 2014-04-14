// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  var result = [];
  var temp = "";
  for(var index = 0; index < json.length; index++){
    
    if(json[index] === ","){
      if(temp === "false"){
        result.push(false);
        temp = "";
        continue;
      }
      if(temp === "true"){
        result.push(true);
        temp = "";
        continue;
      }
      if(temp === "null"){
        result.push(null);
        temp = "";
        continue;
      }
      if(temp.match(/[^\d\.]/) === null){
        result.push(parseFloat(temp));
        temp = "";
        continue;
      }
      if(temp === "false"){
        result.push(false);
        temp = "";
        continue;
      }
      if(temp === "false"){
        result.push(false);
        temp = "";
        continue;
      }
      else{
        result.push(temp); 
        temp = "";
        continue;
      }
    }
    
    if(json[index] === "["){
      result.push(parseJSON(json.slice(index+1)));
      // continue;
    }
    if(json[index] === "]"){
      return result;
    }
    
    if(json[index] === '"'){
      if(temp.length !== 0){
        result.push(temp);
        temp = "";
        continue;
      }
      else{
        continue;
      }
    }
    if(json[index] === "{"){}
    
    if(json[index] === "}"){}
    
    else{temp += json[index];}
  }
  return result;
};
