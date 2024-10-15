import { Admin } from './Admin'
import { Customer } from './Customer'
import { Guest } from './Guest'
import { Account } from './Account'

export class AccountFactory {
  static createAccount(accountType: string): Account {
    switch (accountType) {
      case 'admin':
        return new Admin()
      case 'customer':
        return new Customer()
      case 'guest':
        return new Guest()
      default:
        throw new Error('Invalid account type')
    }
  }
}
