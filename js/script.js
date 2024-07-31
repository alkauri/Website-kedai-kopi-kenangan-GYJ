document.addEventListener("DOMContentLoaded", () => {
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburger-menu");

  // Klik pada hamburger untuk toggle menu
  hamburger.addEventListener("click", (e) => {
    navbarNav.classList.toggle("active");
    e.stopPropagation(); // Menghindari event click dari menyebar ke dokumen
  });

  // Klik di luar sidebar untuk menghilangkan nav
  document.addEventListener("click", function (e) {
    // Pastikan navbarNav juga ada
    if (navbarNav && !hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
});
