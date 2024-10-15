import { Account } from "./Account";

export class Customer implements Account {
  getPermissions(): string[] {
    return ['read', 'write']
  }
}
