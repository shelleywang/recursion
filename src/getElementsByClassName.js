// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = []; // array to store the elements

  function helper(doc, className) { // gets elements recursively
    if (doc.nodeType === 1) { // excludes text and comment nodes    
      if (doc.classList.contains(className)) {
        results.push(doc);
      }
      if (doc.hasChildNodes()) {
        var children = doc.childNodes;
        for (var i = 0; i < children.length; i++) {
          helper(children[i],className);
        }
    }
  }
  }

  helper(document.body,className); // call recursive helper function on document.body
  return results;
};
