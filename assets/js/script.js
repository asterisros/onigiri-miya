const footerSubLink = document.querySelector(".footer-subscribe-link");
const subscribeSection = document.getElementById("subscribe");

footerSubLink.addEventListener("click", (e) => {
  e.preventDefault();

  // Scroll ke section subscribe dengan animasi halus
  subscribeSection.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  // Menambah class highlight
  subscribeSection.classList.add("highlight");

  // Menghapus class highlight setelah 3 detik
  setTimeout(() => {
    subscribeSection.classList.remove("highlight");
  }, 3000);
});
