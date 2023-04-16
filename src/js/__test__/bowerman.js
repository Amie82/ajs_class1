import Bowerman from '../bowerman';

test('Bowerman test name', () => {
  const obj = new Bowerman('name');
  expect(obj.name).toBe('name');
});

test('Bowerman test attack', () => {
  const obj = new Bowerman('name');
  expect(obj.attack).toBe(25);
});