import { Account } from './Account'

export class Guest implements Account {
  getPermissions(): string[] {
    return ['read']
  }
}
