import Weapon from '../types/weapon';

export interface Player {
    id: number;
    name: string;
    health: number;
    maxHealth: number;
    currentWeapon: Weapon;
  }