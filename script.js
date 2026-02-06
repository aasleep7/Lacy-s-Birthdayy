const heart = document.getElementById("heart");

heart.addEventListener("click", () => {
  heart.style.transform = "rotate(-45deg) scale(1.2)";
  setTimeout(() => {
    heart.style.transform = "rotate(-45deg) scale(1)";
  }, 300);
});
