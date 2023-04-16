import Character from '../app';

test('Character type test', () => {
  const obj = new Character('name', 'parent', 15, 20);
  expect(obj.name).toBe('name');
});

test('Character test name', () => {
  function setName() {
    return new Character('n', 'parent', 15, 20);
  }
  expect(setName).toThrow('Имя должно состоять от 2 до 11 символов');
});

test('Character test type', () => {
  function setName() {
    return new Character('name', 1, 15, 20);
  }
  expect(setName).toThrow('Тип должен быть строчным значением');
});

