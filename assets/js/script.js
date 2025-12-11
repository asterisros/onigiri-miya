const footerSubscribeQuickLink = document.querySelector(
  ".footer-subscribe-link"
);
const subscribeSection = document.getElementById("subscribe");

footerSubscribeQuickLink.addEventListener("click", (e) => {
  e.preventDefault();

  // Scroll to subscribe section smoothly
  subscribeSection.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  // Add class highlight for visual effect
  subscribeSection.classList.add("highlight");

  // Delete class highlight after 3 seconds
  setTimeout(() => {
    subscribeSection.classList.remove("highlight");
  }, 3000);
});
