import Weapon from "./weapon";

export default interface Creature{ //Interface pro postavy, používá se i pro hráče i pro nepřátele
    name: string,
    health: number;
    maxHealth: number,
    currentWeapon: Weapon;
}