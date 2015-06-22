// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var type = typeof obj;
  var contains = [];
  if (obj === null) {
    return 'null';
  } else if ((type === 'boolean') || (type ==='number')) {
    return obj.toString();
  } else if (type === 'string') {
    return '"'+obj+'"';
  } else if ((type === 'function') || (type ==='undefined')){
    return null;
  } else if (Array.isArray(obj)) {
    contains = obj.map(function(item) {
      return stringifyJSON(item);
    });
    return '['+contains.join(',')+']';
  } else if (type === 'object') {
    each(obj, function(value, item,obj) {
      if (stringifyJSON(value) !== null) {
        contains.push('"'+item+'":'+stringifyJSON(value));
      }
    });
    return '{' + contains.join(',')+'}';
  }
};


// helper function 
var each = function(collection, iterator) {
      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          iterator(collection[i], i, collection);
        }
      } else {
        for (var item in collection) {
          iterator(collection[item], item, collection);
        }
      }
    
  };