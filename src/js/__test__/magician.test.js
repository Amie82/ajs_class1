import Magician from '../class/Magician';

test('Правильно создаётся объект', () => {
  const magician = new Magician('Magic');
  const correct = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: Magic,
    type: Magic
  }
  expect(Magician).toEqual(correct);
});
