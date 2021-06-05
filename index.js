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
      const arg = Array.isArray(collection) ? collection : Object.values(collection);
      let newCollection = []
      for (let i=0; i<arg.length; i++){
        newCollection.push(callback(arg[i]))
      }
      return newCollection
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
