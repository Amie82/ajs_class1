import Swordsman from '../swordsman';

test('Правильно создаётся объект', () => {
  const swordsman = new Swordsman('Swords');
  const correct = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Swords',
    type: 'Swords'
  }
  expect(swordsman).toEqual(correct);
});
