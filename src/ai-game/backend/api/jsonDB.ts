import axios from 'axios';
import Weapon from '../types/weapon';
import Creature from '../types/creature';
import { Player } from '../types/player';
import { StoryNode } from '../types/storyTypes';

// Base URL for JSON Server
const BASE_URL = 'http://localhost:3001';

// ** Functions for Weapons **
export const getWeapons = async (): Promise<Weapon[]> => {
  const response = await axios.get(`${BASE_URL}/weapons`);
  const parsedWeapons = JSON.parse(JSON.stringify(response.data));
  return parsedWeapons as Weapon[];
};

// ** Functions for Creatures **
export const getCreatures = async (): Promise<Creature[]> => {
  const response = await axios.get(`${BASE_URL}/creatures`);
  const parsedCreatures = JSON.parse(JSON.stringify(response.data));
  return parsedCreatures as Creature[];
};

export const getCreature = async (creatureId: number): Promise<Creature | undefined> => {
  const creatures = await getCreatures();
  const parsedCreatures = JSON.parse(JSON.stringify(creatures));
  return parsedCreatures.find((creature: Creature) => creature.id === creatureId);
};

export const updateCreatureHealth = async (creatureId: number, newHealth: number): Promise<void> => {
  const creature = await getCreature(creatureId);
  if (creature) {
    creature.health = newHealth;
    await axios.put(`${BASE_URL}/creatures`, creature); 
  } else {
    throw new Error('Creature not found');
  }
};

// ** Functions for Story Nodes **
export const getStoryNodes = async (): Promise<StoryNode[]> => {
  const response = await axios.get(`${BASE_URL}/story`);
  const parsedStoryNodes = JSON.parse(JSON.stringify(response.data));
  return parsedStoryNodes as StoryNode[];
};

export const getStoryNode = async (nodeId: string): Promise<StoryNode | undefined> => {
  const storyNodes = await getStoryNodes();
  return storyNodes.find((node: StoryNode) => node.id === nodeId);
};

// **Player Functions**

// Get player data
export const getPlayer = async (): Promise<Player> => {
  const response = await axios.get(`${BASE_URL}/player`);
  const parsedPlayer = JSON.parse(JSON.stringify(response.data));
  return parsedPlayer as Player;
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
  const parsedWeapons = JSON.parse(JSON.stringify(weapons));
  const newWeapon = parsedWeapons.find((weapon: Weapon) => weapon.id === weaponId);
  if (newWeapon) {
    const player = await getPlayer();
    const parsedPlayer = JSON.parse(JSON.stringify(player));
    parsedPlayer.currentWeapon = newWeapon;
    await axios.put(`${BASE_URL}/player`, parsedPlayer);
  } else {
    throw new Error('Weapon not found');
  }
};