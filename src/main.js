
const nav2product = document.querySelector("#nv2-pd");
const navBottomProduct = document.querySelector(".nav2-products-section");
const nav2products = document.querySelectorAll(".nv2-product");

console.log(nav2product);
console.log(navBottomProduct);



nav2product.addEventListener("mouseover", () => {
  navBottomProduct.style.height = "20rem";
  navBottomProduct.style.opacity = "1";

  nav2products.forEach((e) => {
    e.style.display = "block";
    e.style.color = "var(--clr-white)";
  })
})

nav2product.addEventListener("mouseout", () => {
  navBottomProduct.style.height = "0rem";
  
  nav2products.forEach((e) => {
    e.style.color = "var(--clr-black)";
  })
})

navBottomProduct.addEventListener("mouseover", () => {
  navBottomProduct.style.height = "20rem";
})

navBottomProduct.addEventListener("mouseout", () => {
  navBottomProduct.style.height = "0rem";
})