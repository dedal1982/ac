const moreButton = document.querySelector(".in-demand__more");
const preItems = document.querySelector(".in-demand__grid-pre");
const mainItems = document.querySelector(".in-demand__swiper");
const backButton = document.querySelector(".in-demand__back");

if (moreButton) {
  moreButton.addEventListener("click", () => {
    preItems.classList.add("active");
    mainItems.classList.add("active");
    moreButton.classList.add("active");
    backButton.classList.add("active");
  });
}

if (backButton) {
  backButton.addEventListener("click", () => {
    preItems.classList.remove("active");
    mainItems.classList.remove("active");
    moreButton.classList.remove("active");
    backButton.classList.remove("active");
  });
}
