/**
 *
 * @param  {...any} classes classes to be joined
 * @returns the joined classes excluding falsy values
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
