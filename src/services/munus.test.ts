import { minus } from '@/services/minus';

test('1-1は0になること', () => {
  const result = minus(1, 1);
  expect(result).toEqual(0);
});
