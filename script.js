let modal = document.querySelector(".dropdown");
let servicesButton = document.querySelector(".nav-services");
let moreButton = document.querySelector(".nav-more");
let body = document.querySelector("body");

servicesButton.addEventListener("mouseenter", () => {
  modal.showModal();
});
servicesButton.addEventListener("click", () => {
  modal.showModal();
});
moreButton.addEventListener("mouseenter", () => {
  modal.showModal();
});
moreButton.addEventListener("click", () => {
  modal.showModal();
});
modal.addEventListener("click", (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    console.log(e.clientX, dialogDimensions.left);
    modal.close();
  }
});
