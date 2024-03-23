const sidebar = document.querySelector(".sidebar");
const sliderBtn = document.querySelector(".sliderBtn");

function toggleSidebar() {
  sidebar.classList.toggle("extend");
}

sliderBtn.addEventListener("click", function () {
  toggleSidebar();
});

document.addEventListener("click", function (event) {
  const isClickedInsideSidebar = sidebar.contains(event.target);
  const isClickedOnSliderBtn = sliderBtn.contains(event.target);

  if (!isClickedInsideSidebar && !isClickedOnSliderBtn) {
    sidebar.classList.remove("extend");
  }
});