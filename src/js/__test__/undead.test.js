import Undead from '../undead';

test('Undead test attack', () => {
  const obj = new Undead('name');
  expect(obj.attack).toBe(25);
});
test('Undead test name', () => {
  function setName() {
    return new Undead('n');
  }
  expect(setName).toThrow('Имя должно состоять от 2 до 11 символов');
});
