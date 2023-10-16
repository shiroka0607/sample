import { add } from '@/services/add';

test('1+1は2になること', () => {
  const result = add(1, 1);
  expect(result).toEqual(2);
});
