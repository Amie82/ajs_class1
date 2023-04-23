export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно состоять от 2 до 11 символов');
    } else if (typeof type !== 'string') {
      throw new Error('Тип должен быть строчным значением');
    }
    if (
      ![
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
      ].includes(type)
    ) {
      throw new Error('Персонаж не существует');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
