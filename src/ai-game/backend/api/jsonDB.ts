import axios from 'axios';
import { Weapon } from '../types/weapon';
import { Creature } from '../types/creature';
import { Player } from '../types/player';
import { StoryNode } from '../types/storyTypes';

// Base URL for JSON Server
const BASE_URL = 'http://localhost:3001';

// ** Functions for Weapons **
export const getWeapons = async (): Promise<Weapon[]> => {
  const response = await axios.get(`${BASE_URL}/weapons`);
  return response.data as Weapon[];
};

// ** Functions for Creatures **
export const getCreatures = async (): Promise<Creature[]> => {
  const response = await axios.get(`${BASE_URL}/creatures`);
  return response.data as Creature[];
};

export const getCreature = async (creatureId: number): Promise<Creature> => {
  const response = await axios.get(`${BASE_URL}/creatures/${creatureId}`);
  return response.data as Creature;
};

export const updateCreatureHealth = async (creatureId: number, newHealth: number): Promise<void> => {
  await axios.patch(`${BASE_URL}/creatures/${creatureId}`, { health: newHealth });
};

// ** Functions for Story Nodes **
export const getStoryNode = async (nodeId: string): Promise<StoryNode> => {
  const response = await axios.get(`${BASE_URL}/story/${nodeId}`);
  return response.data as StoryNode;
};

// **Player Functions**

// Get player data
export const getPlayer = async (): Promise<Player> => {
  const response = await axios.get(`${BASE_URL}/player/1`);
  return response.data as Player;
};

// Update player's health
export const updatePlayerHealth = async (newHealth: number): Promise<void> => {
  await axios.patch(`${BASE_URL}/player/1`, { health: newHealth });
};

// Update player's weapon
export const updatePlayerWeapon = async (weaponId: number): Promise<void> => {
  await axios.patch(`${BASE_URL}/player/1`, { currentWeapon: weaponId });
};