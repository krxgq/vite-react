// creature.ts
import { Player } from '../types/player';
import { Creature } from '../types/creature';

export function creatureAttack(creature: Creature, player: Player): void {
  if (player.health - creature.currentWeapon.damage > 0) {
    player.health -= creature.currentWeapon.damage;
  } else {
    player.health = 0;
  }
}

export function creatureDefend(creature: Creature, damage: number): void {
  if (creature.health - damage > 0) {
    creature.health -= damage;
  } else {
    creature.health = 0;
  }
}