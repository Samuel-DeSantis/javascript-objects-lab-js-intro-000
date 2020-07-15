function updateObjectWithKeyAndValue(object, key, value) {object[key] = value;}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key] ? return newObj : pass;
}

function destructivelyDeleteFromObjectByKey(object, key) {delete object[key] ? return object : pass;}
