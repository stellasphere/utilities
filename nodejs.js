module.exports = {
  objectsToProperties: function(arrayObjects) {
    var objectProperties = [];
    for(i in arrayObjects) {
      var object = arrayObjects[i];
      var keys = Object.keys(object);
      for(n in keys) {
        var key = keys[n];
        if(objectProperties.indexOf(key) == "-1") objectProperties.push(key);
      }
    }
    return objectProperties
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
  },
  keyValueObjectToArrays: function(keyValueObject) {
    var keys = Object.keys(keyValueObject);
    var values = [];
    for(i in keys) {
      var key = keys[i];
      values.push(keyValueObject[key]);
    }
    return [keys,values]
  }
}