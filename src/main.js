const navBottomElement = document.querySelectorAll(".nav-bottom-element");
const navBottomHoverContent = document.querySelector(".nav-bottom-hover-content");

navBottomElement.forEach((e) => {
  e.addEventListener("mouseover", (e) => {
    navBottomHoverContent.style.height = "12.5rem";
  });
});
navBottomElement.forEach((e) => {
  e.addEventListener("mouseout", (e) => {
    navBottomHoverContent.style.height = "0";
  });
});
navBottomHoverContent.addEventListener("mouseover", () => {
  navBottomHoverContent.style.height = "12.5rem";
});
navBottomHoverContent.addEventListener("mouseout", () => {
  navBottomHoverContent.style.height = "0rem";
});
