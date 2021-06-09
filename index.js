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
        acc = callback(acc, arg[i], arg)
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
  },

  flatten: function(collection, shallow = false, storageArray = []){/*Moved storageArray into argument with a default of an empty array, 
    so that when the function loops, the filled storageArray is passed in as the argument instead of an empty array which is what 
    happens when you add the variable assignment in the function itself */

    //checks to see if the collection is an object and if so, turns object into an array, must end with semi-colon 
    /*const arg = Array.isArray(collection) ? collection : Object.values(collection); - Had to remove this from this function
    as the next part of the function (if !Array) checks arg to see if it is an array, where arg is not, it is a reference to an array*/

    //loops through through the supplied array and pushes the each value into the new array
    let arg = collection
    const pushing = function(newArray, oldArray) {
      for (let value of oldArray) {
          newArray.push(value);
      }}
      if (!Array.isArray(arg)) return storageArray.push(arg)
      //checks to see if the shallow argument is true, if it is, checks to see if each value in the supplied array is
      //an array itself, if it is an array is calls the function pushing, if it is not an array it just pushes that value
      //into the new array.
      if (shallow) {
          for (let val of arg)
              Array.isArray(val) ? pushing(storageArray, val) : storageArray.push(val)
      } else {
        //if shallow is not supplied as true it defaults to false and it calls this function on each value of the supplied array
          for (let val of arg) {
              this.flatten(val, false, storageArray)
          }
      }
      //returns the new array
    return storageArray
  },

  uniq: function(array, isSorted = false, callback = false){
    let newArray = []
    let computedArray = []
    let sortedArray = []
    function sorting(array){
      sortedArray = array.sort(function(a,b){return a - b})
      return sortedArray
    }

    //checks if the array is sorted, calls new Set on the original array and sets that as newArray. new Set() returns an array with
    //no duplicate values. We could also do thhe same as in the sorting() function where we loop through the array and push only 
    //the value that does not match the value before it, but this is less code
    function checkIfSorted(){
    if (isSorted){
      newArray = Array.from(new Set(array))
    } else {
      let sorts = sorting(array)
      newArray = Array.from(new Set(sorts))
    }
  }

    checkIfSorted()

    let changedArray = []
    let theMostUniq = []
    if(callback){
      for (let x = 0; x<newArray.length; x++){
        let modified = callback(x)
        if (!changedArray.includes(modified)){
          changedArray.push(modified)
          theMostUniq.push(newArray[x])
        }
    }
    return theMostUniq
    } else {
    return newArray}},

  keys: function(){

  },

  values: function(obj){

  },

  functions: function(obj){

  },


}})()

fi.libraryMethod()
