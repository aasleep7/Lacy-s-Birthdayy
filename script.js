const clickHeart = document.getElementById('clickHeart');
clickHeart.addEventListener('click', () => {
  const heart = clickHeart.querySelector('.heart-shape');
  heart.style.transform = 'rotate(-45deg) scale(1.2)';
  setTimeout(() => {
    heart.style.transform = 'rotate(-45deg) scale(1)';
  }, 300);

  // Confetti
  for (let i = 0; i < 25; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * clickHeart.offsetWidth + 'px';
    c.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
    clickHeart.appendChild(c);
    setTimeout(() => { c.remove(); }, 1000);
  }
});
