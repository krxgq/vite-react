import axios from 'axios';
import Weapon from '../entities/weapon';
import Creature from '../entities/creature';
import Player from '../entities/player';
import StoryNode from '../entities/storyNode';

// Base URL for JSON Server
const BASE_URL = 'http://localhost:3001';

// ** Functions for Weapons **
export const getWeapons = async (): Promise<Weapon[]> => {
  const response = await axios.get(`${BASE_URL}/weapons`);
  return response.data.map((weaponData: any) => new Weapon(weaponData));
};

// ** Functions for Creatures **
export const getCreatures = async (): Promise<Creature[]> => {
  const response = await axios.get(`${BASE_URL}/creatures`);
  return response.data.map((creatureData: any) => new Creature(creatureData));
};

// ** Functions for Story Nodes **
export const getStoryNode = async (nodeId: string): Promise<StoryNode> => {
  const response = await axios.get(`${BASE_URL}/story/${nodeId}`);
  return new StoryNode(response.data);
};

// **Player Functions**

// Get player data
export const getPlayer = async (): Promise<Player> => {
  const response = await axios.get(`${BASE_URL}/player/1`); // Assuming player has ID 1
  return response.data;
};

// Update player's health
export const updatePlayerHealth = async (newHealth: number): Promise<Player> => {
  const response = await axios.patch(`${BASE_URL}/player/1`, { health: newHealth });
  return response.data;
};

// Update player's weapon
export const updatePlayerWeapon = async (weaponId: number): Promise<Player> => {
  const response = await axios.patch(`${BASE_URL}/player/1`, { currentWeapon: weaponId });
  return response.data;
};