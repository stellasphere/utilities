var utilities = {
  timestampToWrittenTime: function(ms) {
    var date = (new Date(ms)).toString().split(" ")
    var timearray = date[4].split(":")
    var hours = timearray > 12? timearray[0]-12 : timearray[0]
    var minutes = timearray[1]
    var tod = timearray > 12? "PM" : "AM"
    return `${hours}:${minutes} ${tod}`
  },
  millisecondsToRelativeWrittenTime: function(target,capitalized) {
    const now = Date.now();
    var difference = target - now;

    function plural(unit) {
      if(Math.round(difference/unit)>1) {
        return "s"
      } else {
        return ""
      }
    }
    var past = false;
    if (difference < 0) {
      past = true
      difference = Math.abs(difference)
    }
    var writtendifference = "Beyond Comprehension"
    if(difference < 1000) {
      writtendifference = `Less Than A Second`;
    } else {
      if(difference < 60000) {
        writtendifference = `${Math.round(difference/1000)} Second${plural(1000)}`;
      } else {
        if(difference < 3600000) {
          writtendifference = `${Math.round(difference/60000)} Minute${plural(60000)}`;
        } else {
          if(difference < 86400000) {
            writtendifference = `About ${Math.round(difference/3600000)} Hour${plural(3600000)}`;
          } else {
            if(difference < 604800000) {
              writtendifference = `About ${Math.round(difference/86400000)} Day${plural(86400000)}`;
            } else {
              if(difference < 2629800000) {
                writtendifference = `About ${Math.round(difference/604800000)} Week${plural(604800000)}`;
              } else {
                writtendifference = `About ${Math.round(difference/2629800000)} Month${plural(2629800000)}`;
              }
            }
          }
        }
      }
    }
    return capitalized === true?`${writtendifference}${past ? ` In The Past`:""}`:`${writtendifference}${past ? ` In The Past`:""}`.toLocaleLowerCase();
  },
  arrayRemoveDuplicates: function(array) {
    return [...new Set(array)];
  },
  millisecondsToRelativeTime: function(ms) {
    var hours = Math.floor(ms/360000);
    ms -= hours*360000;
    var minutes = Math.floor(ms/60000);
    ms -= minutes*60000;
    var seconds = Math.floor(ms/1000);

    if(minutes < 10) minutes = `0${minutes}`
    if(seconds < 10) seconds = `0${seconds}`

    if(hours > 0) {
      return `${hours}:${minutes}:${seconds}`
    } else if(minutes > 0) {
      return `${minutes}:${seconds}`
    } else if(seconds > 0) {
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