// Parameter constraint syntax

/**
 * The syntax for a parameter constraint is to put the type that 
 * the parameter must be compatible with after the extends keyword:
 * 
 *  <T extends ContrainingType>
 * 
 */

// A simple example

interface Logable {
  log: () => void;
}
function logItems<T>(items: T[]): void {
  items.forEach(item => item.log());
}
