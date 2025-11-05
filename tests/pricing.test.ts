import { calculateTotal, formatRupees } from '../src/pricing';

test('empty basket is zero', () => {
  expect(calculateTotal([])).toBe(0);
});

test('single apple costs 1 rupee', () => {
  expect(calculateTotal(['Apple'])).toBe(1);
});

test('two apples and a banana', () => {
  expect(calculateTotal(['Apple', 'Apple', 'Banana'])).toBe(1 * 2 + 2);
});

test('melons are buy one get one free', () => {
  expect(calculateTotal(['Melon'])).toBe(3);
  expect(calculateTotal(['Melon', 'Melon'])).toBe(3);
  expect(calculateTotal(['Melon', 'Melon', 'Melon'])).toBe(6);
  expect(calculateTotal(['Melon', 'Melon', 'Melon', 'Melon'])).toBe(6);
});

test('limes are three for two', () => {
  expect(calculateTotal(['Lime'])).toBe(4);
  expect(calculateTotal(['Lime','Lime','Lime'])).toBe(8);
  expect(calculateTotal(['Lime','Lime','Lime','Lime'])).toBe(12);
  expect(calculateTotal(['Lime','Lime','Lime','Lime','Lime','Lime'])).toBe(16);
});

test('combination basket', () => {
  const items = ['Apple','Apple','Banana','Melon','Melon','Lime','Lime','Lime'];
  expect(calculateTotal(items)).toBe(15);
  expect(formatRupees(15)).toBe('Rs15.00');
});

test('unknown items are ignored', () => {
  expect(calculateTotal(['Apple','Dragonfruit','Banana'])).toBe(1 + 2);
});
