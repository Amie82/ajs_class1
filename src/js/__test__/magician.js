import Magician from '../magician';

test('Magician test name', () => {
  const obj = new Magician('name');
  expect(obj.name).toBe('name');
});

test('Magician test attack', () => {
  const obj = new Magician('name');
  expect(obj.attack).toBe(10);
});
