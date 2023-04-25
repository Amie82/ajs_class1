import Zombie from '../zombie';

test('Правильно создаётся объект', () => {
  const zombie = new Zombie('Zomb');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Zomb',
    type: 'Zomb'
  }
  expect(zombie).toEqual(correct);
});
