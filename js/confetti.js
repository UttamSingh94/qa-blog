const confettiContainer = document.querySelector('.confetti');

for (let i = 0; i < 30; i++) {
  const span = document.createElement('span');
  span.style.left = `${Math.random() * 100}%`;
  span.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
  span.style.animationDelay = `${Math.random() * 3}s`;
  confettiContainer.appendChild(span);
}
