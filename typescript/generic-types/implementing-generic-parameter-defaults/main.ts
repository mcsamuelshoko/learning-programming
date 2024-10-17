// Generic parameter default type syntax

/*

  <T = DefaultType>

*/


// An example

function firstOrNull<T = string>(array: T[]): T | null {
  return array.length === 0 ? null : array[0];
}

interface Component<T1 = string, T2 = any> {
  name: T1;
  props: T2;
  log: () => void;
}


const button: Component = {
  name: 'button',
  props: {
    text: 'save',
  },
  log: () => console.log("save button")
}

console.log(button.props.text);
console.log(button.props.text2)

const first = firstOrNull([1, 2, 3])
console.log(first);
