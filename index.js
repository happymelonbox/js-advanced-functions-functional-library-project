const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      //Ternary operator to check if collection is an array, if is array
      //we assign it as it is, if it is and object we use Object.values which returns an array and is assigned to arg.
      for (let i=0; i<arg.length; i++){
        let j = i
        callback(arg[j])
      }
      //looping through the resulting array(arg) and call the callback function on each value
      return collection
      // Return the original array
    },
    map: function(collection, callback) {
      //Ternary to check if object (must have semi-colon at end to work)
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      //New array to assign into
      let newCollection = []
      //loop old array and push into new array
      for (let i=0; i<arg.length; i++){
      newCollection.push(callback(arg[i]))
      }
      //Return new array
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      //checks to see if accumulator is assigned, if not, assigns the accumulator to the
      //first value in the provided array and removes the accumulator from the rest of the values
      // in the array otherwise it adds itself to itself (it would start with the value of collection[0]
      //but then add collection[0], it needs to start with collection[0] then move on to collection[1])
      if(acc === NaN || acc === undefined){
        acc = collection[0]
        collection = collection.slice(1)
      }
      //checks to see if the collection is an object and if so, turns object into an array, must end with semi-colon
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      //loops through and calls callback function on each iteration.
      for (let i=0; i<arg.length; i++){
        acc = callback(acc, collection[i], collection)
        }
      //returns the accumulator
        return acc
    },

    find: function(collection, predicate) {
      //checks to see if the collection is an object and if so, turns object into an array, must end in semi-colon
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      //loops through array and checks if predicate is equal to current value, if so, stops and returns the current value
      //if not returns undefined
      for (let i=0; i<arg.length; i++){
        if (predicate(arg[i])){
          return arg[i]
          return undefined
      }}
    },

    filter: function(collection, predicate) {
      //checks to see if the collection is an object and if so, turns object into an array, must end in semi-colon
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      //loops through array and checks if predicate is equal to current value, if so, stops and returns the current value
      //if not returns undefined
      let newArray = []
      for (let i=0; i<arg.length; i++){
        if (predicate(arg[i])){
          newArray.push(arg[i])
          }
      }
      return newArray
    },

    size: function(collection){
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      return arg.length
    },

    first: function(collection, n=false){
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      if(n){
        return arg.slice(0, n)
    }
    return arg[0]
  },

  last: function(collection, n=false){
    const arg = Array.isArray(collection) ? collection : Object.values(collection);
    let end = arg.slice(arg.length-1)
    if(n){
      end = arg.slice(arg.length-n, arg.length)
      return end
    }
    return end[0]
},

  }})()

fi.libraryMethod()
