import Weapon from "./weapon";
import Player from "./player";

export default class Creature {
    name: string;
    health: number;
    maxHealth: number;
    currentWeapon: Weapon;

    constructor(name: string, health: number, currentWeapon: Weapon) {
        this.name = name;
        this.health = health;
        this.maxHealth = health;
        this.currentWeapon = currentWeapon;
    }

    attack(player: Player): void {
      if(this.health - player.currentWeapon.damage > 0){
        this.health -= player.currentWeapon.damage;
      } else {
        this.health = 0;
      }
    }
    defend(player: Player): void{
      if(this.health - player.currentWeapon.damage > 0){
        player.health -= player.currentWeapon.damage;
    } else {
        player.health = 0;
  }
}