// Always wait at least 6 seconds before removing the loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Optional fade out animation
  setTimeout(() => {
    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // wait for fade out
  }, 3000); // 6 seconds delay
});
