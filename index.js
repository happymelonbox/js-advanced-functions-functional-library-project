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
      //checks to see if the collection is an object and if so, turns object into an array, must end in semi-colon
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      //returns the total number of elements  in the array
      return arg.length
    },

    first: function(collection, n=false){
      //checks to see if the collection is an object and if so, turns object into an array, must end in semi-colon
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      //if n (starting point) is provided, n will equal to true as a value is equal
      // to true, and the code will execute, returning the first slice from starting point n
      if(n){
        return arg.slice(0, n)
    }
    //if n is not supplied, just return the 0th element of the array.
    return arg[0]
  },

  last: function(collection, n=false){
      //checks to see if the collection is an object and if so, turns object into an array, must end in semi-colon
    const arg = Array.isArray(collection) ? collection : Object.values(collection);
    //assigning the end value of the array to end
    let end = arg.slice(arg.length-1)
      //if n (starting point) is provided, n will equal to true as a value is equal
      // to true, and the code will execute, returning the slice containing last elements from starting point n
      if(n){
      end = arg.slice(arg.length-n, arg.length)
      return end
    }
    //if n not provided, return the 0th element of end - which only contains one element, the end element that
    //we sliced and assigned.
    return end[0]
},

  compact: function(collection){
    //checks to see if the collection is an object and if so, turns object into an array, must end in semi-colon
    const arg = Array.isArray(collection) ? collection : Object.values(collection);
    //creates new array for the compact array
    let newArray = []
    //loops through array
    for (let i=0; i<arg.length; i++){
    //checks to see if the element is true and if it is, push it to the new array
      if(arg[i])
      newArray.push(arg[i])
    }
    //returns the new array of true values
    return newArray
  },

  sortBy: function(collection, callback){
      //checks to see if the collection is an object and if so, turns object into an array, must end in semi-colon
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      //creates new array containing a copy of the supplied array using spread operator
      let newArray = [...arg]
      //Sorts the array using the compare function on the results of calling callback
      //on each item of the array. When the sort() function compares two values, it sends the values to
      //the compare function, and sorts the values according to the returned (negative, zero, positive) value.
      //If the result is negative a is sorted before b. If the result is positive b is sorted before a.
      //If the result is 0 no changes are done with the sort order of the two values.
      newArray.sort(function(a,b){return callback(a)-callback(b)})
      //returns the sorted array leaving original array unchanged
      return newArray
}
}})()

fi.libraryMethod()
