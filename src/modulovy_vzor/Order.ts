import { Product } from './Product'

export class Order {
  private products: Product[] = []

  addProduct(product: Product) {
    this.products.push(product)
  }

  showOrder() {
    this.products.forEach((product) => {
      console.log(`${product.name} - $${product.price}`)
    })
  }
}
