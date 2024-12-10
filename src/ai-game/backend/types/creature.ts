import { Weapon } from '../types/weapon';

export interface Creature {
    id: number;
    name: string;
    health: number;
    maxHealth: number;
    currentWeapon: Weapon;
  }