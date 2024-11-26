//* Using const assertions

//? A const assertion is a kind of type assertion where the 
//? keyword const is used in place of the type:
//
//    let variableName = someValue as const;
//

const bill = {
  name: "Bill",
  profile: {
    level: 1,
  },
  scores: [90, 65, 80],
};
bill.name = "Bob";
bill.profile.level = 2;
bill.scores.push(100);
