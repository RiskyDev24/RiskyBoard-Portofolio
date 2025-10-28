// ============================
// RiskyBoard Frontend Script
// ============================

const toggleSidebar = document.getElementById("toggleSidebar");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

// Simple random animation on bars
const bars = document.querySelectorAll(".bar");
setInterval(() => {
  bars.forEach((bar) => {
    const height = Math.floor(Math.random() * 90) + 30;
    bar.style.height = `${height}%`;
  });
}, 2500);
