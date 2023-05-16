const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");
const logo = document.querySelector(".logo");

let activeIndex;

shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");
  logo.classList.toggle("hide");

  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});


search.addEventListener("click", () => {
  document.body.classList.remove("shrink");
  search.lastElementChild.focus();
});

function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;

  if (activeIndex > 3) {
    topPosition += shortcuts.clientHeight;
  }

  active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");

  activeIndex = this.dataset.active;

  moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

const sidebar = document.querySelector("nav");
const shrinkBtn = document.querySelector(".shrink-btn");
const icons = document.querySelectorAll(".icon");

shrinkBtn.addEventListener("click", () => {
  sidebar.classList.toggle("shrink");
});

icons.forEach((icon) => {
  icon.addEventListener("mouseover", function() {
    if (sidebar.classList.contains("shrink")) {
      const tooltip = this.querySelector(".tooltip");
      tooltip.classList.add("show");
    }
  });

  icon.addEventListener("mouseout", function() {
    if (sidebar.classList.contains("shrink")) {
      const tooltip = this.querySelector(".tooltip");
      tooltip.classList.remove("show");
    }
  });
});
