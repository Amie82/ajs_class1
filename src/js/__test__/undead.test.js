import Undead from '../class/Undead';

test('Правильно создаётся объект', () => {
  const undead = new Undead('Und');
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: Und,
    type: Und
  }
  expect(Undead).toEqual(correct);
});
