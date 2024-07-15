function calculateTotal(ProductArray) {
  let NewProductArray = [];
  NewProductArray = ProductArray.map((Product) => {
    let Total_Price = Product.ProductPrice * Product.Product_Quantity;
    let Product_Name = Product.ProductType;
    return { [Product_Name]: Total_Price };
  });
  console.log(NewProductArray);
}

let ProductArray = [
  { ProductType: "Saree", ProductPrice: 200, Product_Quantity: 10 },
  { ProductType: "T-Shirt", ProductPrice: 500, Product_Quantity: 5 },
  { ProductType: "Lehenga", ProductPrice: 140, Product_Quantity: 3 },
  { ProductType: "Kurti", ProductPrice: 2050, Product_Quantity: 2 },
  { ProductType: "Kurti_2", ProductPrice: 100, Product_Quantity: 11 },
  { ProductType: "Kurti_3", ProductPrice: 50, Product_Quantity: 50 },
];
calculateTotal(ProductArray);
