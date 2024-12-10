// weapon.ts

export default class Weapon {
  id: number;
  name: string;
  damage: number;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.damage = data.damage;
  }

  attack(): void {
    console.log(`${this.name} inflicts ${this.damage} damage.`);
  }
}