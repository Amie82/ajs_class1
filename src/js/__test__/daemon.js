import Daemon from '../deamon';

test('Daemon test name', () => {
  const obj = new Daemon('name');
  expect(obj.name).toBe('name');
});

test('Daemon test attack', () => {
  const obj = new Daemon('name');
  expect(obj.attack).toBe(10);
});
