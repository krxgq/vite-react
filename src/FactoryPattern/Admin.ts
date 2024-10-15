import { Account } from "./Account";

export class Admin implements Account {
  getPermissions(): string[] {
    return ['read', 'write', 'delete']
  }
}
