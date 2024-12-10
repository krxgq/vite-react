import Weapon from './weapon';
import Creature from './creature';
import { getPlayer, updatePlayerHealth, updatePlayerWeapon } from '../api/jsonDB';

export default class Player {
  id: number;
  name: string;
  health: number;
  maxHealth: number;
  currentWeapon: Weapon;

  constructor(id: number, name: string, health: number, maxHealth: number, currentWeapon: Weapon) {
    this.id = id;
    this.name = name;
    this.health = health;
    this.maxHealth = maxHealth;
    this.currentWeapon = currentWeapon;
  }

  static async create(): Promise<Player> {
    const playerData = await getPlayer();
    const weaponData = await getWeapons();
    const currentWeapon = weaponData.find(weapon => weapon.id === playerData.currentWeapon);
    if (!currentWeapon) {
      throw new Error('Current weapon not found');
    }
    return new Player(playerData.id, playerData.name, playerData.health, playerData.maxHealth, currentWeapon);
  }

  async updateHealth(newHealth: number): Promise<void> {
    this.health = newHealth;
    await updatePlayerHealth(newHealth);
  }

  async changeWeapon(newWeaponId: number): Promise<void> {
    const weaponData = await getWeapons();
    const newWeapon = weaponData.find(weapon => weapon.id === newWeaponId);
    if (!newWeapon) {
      throw new Error('New weapon not found');
    }
    this.currentWeapon = newWeapon;
    await updatePlayerWeapon(newWeaponId);
  }

  attack(target: Creature): void {
    target.health -= this.currentWeapon.damage;
  }

  defend(): void {
    this.health += 10;
  }
}