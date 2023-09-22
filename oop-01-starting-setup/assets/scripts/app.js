class Product {
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}
class ProductList {
  products = [
    new Product(
      "Fashion Men's Suits Official, Wedding And Executive",
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/562074/1.jpg?6976",
      46.99,
      "Perfect for groom suit, bridegroom suit, groomsman suit, business suit and men leisure wear."
    ),
    new Product(
      "Fashion Mens Two Piece Set ( Jacket + Pant ) Fashion Blazers And Trousers XF03 Red",
      "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/171336/1.jpg?6312",
      99.99,
      "Shipped from abroad"
    ),
  ];

  constructor() {}

  renderHTML() {
    const productContainer = document.getElementById("app");
    const productList = document.createElement("ul");
    productList.className = "product-list";

    for (const product of this.products) {
      const productItem = document.createElement("li");
      productItem.className = "product-item";
      productItem.innerHTML = `
        <div>
          <img src="${product.imageUrl}">
          <div class=".product-item__content">
            <h2>${product.title}</h2>
            <h3>\$${product.price}</h3>
            <p>${product.description}</p>
            <button>Add to cart</button>
          </div>
        </div>
    `;
      productList.append(productItem);
    }
    productContainer.append(productList);
  }
}
const myProductList = new ProductList();
myProductList.renderHTML();
