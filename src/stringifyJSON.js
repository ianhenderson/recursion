// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // Handles most base cases.
  if (typeof obj === "number") {return  obj.toString();}
  if (typeof obj === "boolean") {return  obj.toString();}
  if (typeof obj === "string" ) {return  '"' + obj + '"' ;}
  if (obj === null) {return 'null';}
  // Handles array objects.
  if (Array.isArray(obj) === true) {
  	var results = [];
  	for (var i=0; i< obj.length; i++){
  		results.push(stringifyJSON(obj[i]));
  	}
  	return ("[" + results.join(",") + "]");
  }
  // Handles hash objects.
  if (typeof obj === "object") {
  	var results2 = [];
  	for (var key in obj) {
  		// Skips over functions and undefined values.
  		if (typeof obj[key] === "function" || typeof obj[key] === "undefined") {continue;}
  		results2.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
  	}
  	return ("{" + results2.join(",") + "}");
  }
};
