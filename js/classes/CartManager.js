class CartManager {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  getProducts() {
    return this.products;
  }
  modProduct(product) {
    this.products.splice(index, 1, product);
  }
  removeProduct(index) {
    this.products.splice(index, 1);
  }
}

export default CartManager;
