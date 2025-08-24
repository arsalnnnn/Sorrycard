function openMessage() {
  document.getElementById("flap").classList.add("open");
  setTimeout(() => {
    document.getElementById("envelopeContainer").style.display = "none";
    let msg = document.getElementById("message");
    msg.style.display = "block";
    msg.classList.add("show");
    startConfetti();
  }, 1000);
}

function closeMessage() {
  document.getElementById("message").style.display = "none";
  document.getElementById("message").classList.remove("show");
  document.getElementById("envelopeContainer").style.display = "flex";
  document.getElementById("flap").classList.remove("open");
}

function startConfetti() {
  for (let i = 0; i < 25; i++) createHeart();
}
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  const emojis = ["💖", "💝", "💞", "💓", "🎀", "✨"];
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
