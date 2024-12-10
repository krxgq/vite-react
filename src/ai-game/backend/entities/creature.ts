// creature.ts

import Weapon from './weapon';
import Player from './player';

export default class Creature {
  id: number;
  name: string;
  health: number;
  maxHealth: number;
  currentWeapon: Weapon;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.health = data.health;
    this.maxHealth = data.maxHealth;
    this.currentWeapon = new Weapon(data.currentWeapon);
  }

  attack(player: Player): void {
    if (this.health - player.currentWeapon.damage > 0) {
      this.health -= player.currentWeapon.damage;
    } else {
      this.health = 0;
    }
  }

  defend(player: Player): void {
    if (this.health - player.currentWeapon.damage > 0) {
      player.health -= player.currentWeapon.damage;
    } else {
      player.health = 0;
    }
  }
}