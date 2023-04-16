import Zombie from '../zombie';

test('Zombie test name', () => {
  const obj = new Zombie('name');
  expect(obj.name).toBe('name');
});

test('Zombie test defence', () => {
  const obj = new Zombie('name');
  expect(obj.defence).toBe(10);
});
