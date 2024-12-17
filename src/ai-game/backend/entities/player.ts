import Weapon from '../types/weapon';
import Creature from '../types/creature';
import { getPlayer as getPlayerAPI, updatePlayerHealth as updatePlayerHealthAPI, updatePlayerWeapon as updatePlayerWeaponAPI } from '../api/jsonDB';
import { Player } from '../types/player';

export async function createPlayer(): Promise<Player> {
  const playerData: Player = await getPlayerAPI();
  const currentWeapon: Weapon = playerData.currentWeapon;

  if (!currentWeapon) {
    throw new Error('Current weapon not found');
  }

  return {
    id: playerData.id,
    name: playerData.name,
    health: playerData.health,
    maxHealth: playerData.maxHealth,
    currentWeapon: currentWeapon,
  };
}

export async function playerUpdateHealth(player: Player, newHealth: number): Promise<void> {
  player.health = newHealth;
  await updatePlayerHealthAPI(newHealth);
}

export async function playerChangeWeapon(player: Player, newWeaponId: number): Promise<void> {
  await updatePlayerWeaponAPI(newWeaponId);
  const updatedPlayer = await getPlayerAPI();
  player.currentWeapon = updatedPlayer.currentWeapon;
}

export function playerAttack(player: Player, target: Creature): void {
  if (target.health - player.currentWeapon.damage > 0) {
    target.health -= player.currentWeapon.damage;
  } else {
    target.health = 0;
  }
}

export function playerDefend(player: Player): void {
  player.health += 10;
}