// Understanding use cases for the non-null assertion operator

function duplicate(text: string | null) {
  let fixString = function() {
    if (text === null || text === undefined) {
      text = "";
    }
  };
  fixString();

  return text.concat(text);
}

console.log(duplicate("hello"));

// Non-null assertion operator syntax