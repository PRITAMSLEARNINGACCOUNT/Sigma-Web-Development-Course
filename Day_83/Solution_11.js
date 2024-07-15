function filterProducts(ProductArray, FilterCriteria) {
  return ProductArray.filter((Product) => {
    return Product.ProductPrice <= FilterCriteria;
  });
}
let ProductArray = [
  { ProductType: "Saree", ProductPrice: 200 },
  { ProductType: "T-Shirt", ProductPrice: 500 },
  { ProductType: "Lehenga", ProductPrice: 140 },
  { ProductType: "Kurti", ProductPrice: 2050 },
  { ProductType: "Kurti_2", ProductPrice: 100 },
  { ProductType: "Kurti_3", ProductPrice: 50 },
];

console.log("Before Filtering The Products - ", ProductArray);
console.log(
  "After Filtering The Products According The Price Criteria - ",
  filterProducts(ProductArray, 300)
);
