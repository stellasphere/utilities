var utilities = {
  millisecondsToRelativeTime: function(ms) {
    var hours = Math.floor(ms/3600000);
    ms -= hours*3600000;
    var minutes = Math.floor(ms/60000);
    ms -= minutes*60000;
    var seconds = Math.floor(ms/1000);
    if(hours > 0) {
      if(minutes < 10) minutes = `0${minutes}`
      return `${hours}:${minutes}`
    } else if(minutes > 0) {
      if(seconds < 10) seconds = `0${seconds}`
      return `${minutes}:${seconds}`
    } else if(seconds > 0) {
      if(seconds < 10) seconds = `0${seconds}`
      return `0:${seconds}`
    } else {
      return `0:00`
    }
  },
  inputsToObject: function(selector) {
    var inputs = document.querySelectorAll(selector);
    var results = {}
    inputs.forEach(function(input){
      if(input.type == "submit") {
        return
      } else if(input.type == "checkbox") {
        results[input.name || input.id] = input.checked.toString();
      } else {
        results[input.name || input.id] = input.value
      }
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