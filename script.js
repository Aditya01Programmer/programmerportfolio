document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.stack-item');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show');
    }, index * 300); // Delay 300ms between each item
  });
});
const stackItems = document.querySelectorAll(".stack-item");

function isMobile() {
  return window.innerWidth <= 768;
}

stackItems.forEach((item) => {
  if (isMobile()) {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  }
});