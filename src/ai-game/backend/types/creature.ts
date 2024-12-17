import Weapon from '../types/weapon';

export default interface Creature {
    id: number;
    name: string;
    health: number;
    maxHealth: number;
    currentWeapon: Weapon;
  }