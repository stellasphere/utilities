var utilities = {
  formToObject: function(formid) {
    var inputs = document.querySelectorAll(`#${formid} > input`);
    var results = {}
    inputs.forEach(function(input){
      if(input.type == "submit") return
      results[input.name || input.id] = input.value
    })
    return results
  },
  arraySwapPositions: function(array,position1,position2) {
    var temporary1 = array[position1];
    var temporary2 = array[position2];
    var newArray = array;
    newArray[position1] = temporary2;
    newArray[position2] = temporary1;
    return newArray
  },
  arrayObjectsToArrays: function(arrayObjects) {
    var objectProperties = [];
    for(i in arrayObjects) {
      var object = arrayObjects[i];
      var keys = Object.keys(object);
      for(n in keys) {
        var key = keys[n];
        if(objectProperties.indexOf(key) == "-1") objectProperties.push(key);
      }
    }
    var result = {};
    for(i in objectProperties) {
      var property = objectProperties[i];
      result[property] = [];
    }
    for(i in arrayObjects) {
      var object = arrayObjects[i];
      for(n in objectProperties) {
        var property = objectProperties[n];
        result[property].push(object[property]);
      }
    }
    return result
  },
  arrayObjectsToProperties: function(arrayObjects) {
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