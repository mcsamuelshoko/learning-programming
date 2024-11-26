//* Using `Object.freeze` on arrays

//? Object.freeze is a JavaScript method 
//? that can make objects and arrays immutable at runtime

let billScores = Object.freeze([90, 65, 80]);

// billScores.push(100); //! error
console.log(billScores);


//* Using `Object.freeze` on objects

let bill = Object.freeze({
  name: "Bill",
  age: 30,
  scores: [90, 65, 80],
  profile: {
    level: 1,
  },
})

// bill.age = 31 //! error
bill.scores.push(100)
bill.profile.level = 2;
console.log(bill);

/**
 *? Summary
 * 
 * Object-freeze with the readonly modifier allows us to 
 * create immutable arrays and objects at runtime and 
 * compile-time. It is important to note that Object.freeze
 * only performs a shallow freeze. 
 * 
 */