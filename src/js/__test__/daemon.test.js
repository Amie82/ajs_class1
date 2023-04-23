import Daemon from '../class/Daemon';

test('Правильно создаётся объект', () => {
  const daemon = new Daemon('Dmon');
  const correct = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: Dmon,
    type: Dmon
  }
  expect(Daemon).toEqual(correct);
});
