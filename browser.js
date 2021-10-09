var utilities = {
  keyValueObjectToArrays: function(keyValueObject) {
    var keyValueObject = {train: 76, valid: 28, test: 19}
    var keys = Object.keys(keyValueObject);
    var values = [];
    for(i in keys) {
      var key = keys[i];
      values.push(keyValueObject[key]);
    }
    return [keys,values]
  }
}