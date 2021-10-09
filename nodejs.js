module.exports = {
  keyValueObjectToArrays: function(keyValueObject) {
    var keys = Object.keys(keyValueObject);
    var values = [];
    for(i in keys) {
      var key = keys[i];
      values.push(keyValueObject[key]);
    }
    return [keys,values]
  },
  keyValueObjectToArrayObjects: function(keyValueObject) {
    var keys = Object.keys(keyValueObject);
    var objects = [];
    for(i in keys) {
      var key = keys[i];
      var keyValue = {};
      keyValue.key = key;
      keyValue.value = keyValueObject[key];
      objects.push(keyValue);
    }
    return objects
  }
}