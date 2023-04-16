import Swordsman from '../swordsman';

test('Swordsman test name', () => {
  const obj = new Swordsman('name');
  expect(obj.name).toBe('name');
});
test('Swordsman test defence', () => {
  const obj = new Swordsman('name');
  expect(obj.defence).toBe(10);
});
