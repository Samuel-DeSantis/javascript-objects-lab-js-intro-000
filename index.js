function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {return object[key] = value;}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  return delete newObj[key] ? newObj : pass;
}
function destructivelyDeleteFromObjectByKey(object, key) {return delete object[key] ? object : pass;}
