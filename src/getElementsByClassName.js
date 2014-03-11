// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
   
  var iterator = function(results,currentNode) {

  	// Checks if currentNode has className.
  	if (typeof(currentNode.classList) != "undefined") {
  		for (var i = 0; i < currentNode.classList.length; i++) {
  			if (currentNode.classList[i] == className) {results.push(currentNode);}
  		}
  	}

  	// Recursively call iterator on each child node of currentNode.
  	if (currentNode.childNodes.length > 0) {
  		for (var j = 0; j < currentNode.childNodes.length; j++) {
  			iterator(results, currentNode.childNodes[j]);
  		}
  	}

  	return results;
  };

  return iterator([], document.body);
};
