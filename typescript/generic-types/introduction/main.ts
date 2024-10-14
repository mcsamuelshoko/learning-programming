/**
 * 
 * https://learntypescript.dev/06/intro
 */

function firstOrNull(array: any[]): any[] | null {
  return array.length === 0 ? null : array[0];
}