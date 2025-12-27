// Day 12 – JavaScript Objects (Product Catalog)

const productCatalog = {
  products: [
    {
      name: "Laptop",
      price: 50000,
      stock: 10,

      updateStock(qty) {
        this.stock += qty;
      },

      totalValue() {
        return this.price * this.stock;
      }
    },
    {
      name: "Mobile",
      price: 20000,
      stock: 5,

      updateStock(qty) {
        this.stock += qty;
      },

      totalValue() {
        return this.price * this.stock;
      }
    }
  ],

  getCatalogTotal() {
    return this.products.reduce(
      (sum, item) => sum + item.totalValue(),
      0
    );
  }
};

// Destructuring example
const { name, price } = productCatalog.products[0];
console.log(name, price);

// JSON conversion
const jsonData = JSON.stringify(productCatalog);
console.log(jsonData);
