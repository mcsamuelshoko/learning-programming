// Generic parameter default type syntax

/*

  <T = DefaultType>

*/


// An example

function firstOrNull<T>(array: T[]): T | null {
  return array.length === 0 ? null : array[0];
}

interface Component<T1, T2> {
  name: T1;
  props: T2;
  log: () => void;
}
