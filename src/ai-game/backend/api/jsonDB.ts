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

export const getCreature = async (creatureId: number): Promise<Creature | undefined> => {
  const creatures = await getCreatures();
  return creatures.find(creature => creature.id === creatureId);
};

export const updateCreatureHealth = async (creatureId: number, newHealth: number): Promise<void> => {
  const creature = await getCreature(creatureId);
  if (creature) {
    creature.health = newHealth;
    await axios.put(`${BASE_URL}/creatures`, creature); // Assuming the entire creatures array is updated
  } else {
    throw new Error('Creature not found');
  }
};

// ** Functions for Story Nodes **
export const getStoryNodes = async (): Promise<StoryNode[]> => {
  const response = await axios.get(`${BASE_URL}/story`);
  return response.data as StoryNode[];
};

export const getStoryNode = async (nodeId: string): Promise<StoryNode | undefined> => {
  const storyNodes = await getStoryNodes();
  return storyNodes.find(node => node.id === nodeId);
};

// **Player Functions**

// Get player data
export const getPlayer = async (): Promise<Player> => {
  const response = await axios.get(`${BASE_URL}/player`);
  return response.data as Player;
};

// Update player's health
export const updatePlayerHealth = async (newHealth: number): Promise<void> => {
  const player = await getPlayer();
  player.health = newHealth;
  await axios.put(`${BASE_URL}/player`, player);
};

// Update player's weapon
export const updatePlayerWeapon = async (weaponId: number): Promise<void> => {
  const weapons = await getWeapons();
  const newWeapon = weapons.find(weapon => weapon.id === weaponId);
  if (newWeapon) {
    const player = await getPlayer();
    player.currentWeapon = newWeapon;
    await axios.put(`${BASE_URL}/player`, player);
  } else {
    throw new Error('Weapon not found');
  }
};