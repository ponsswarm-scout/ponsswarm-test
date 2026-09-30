
// Returns the price after applying a percentage discount (0-100).
export function applyDiscount(price, percent) {
  if (percent < 0 || percent > 100) throw new RangeError('percent must be 0-100');
  return price - price * (percent / 100);
}
