// Menambahkan interaksi pada halaman ketika link di klik
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    // Mendapatkan elemen target
    const target = document.querySelector(event.target.hash);

    // Menambahkan animasi scroll
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});