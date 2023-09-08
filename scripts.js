function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.style.width = Math.random() * 3 + "px";
  star.style.height = star.style.width;
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDelay = Math.random() * 3 + "s";
  star.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(star);
}

function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.className = "shooting-star";
  shootingStar.style.left = Math.random() * 100 + "vw";
  shootingStar.style.top = Math.random() * 100 + "vh";
  shootingStar.style.animationDelay = Math.random() * 10 + "s";
  shootingStar.style.animationDuration = Math.random() * 2 + 1 + "s";
  document.body.appendChild(shootingStar);
}

function createStars() {
  for (let i = 0; i < 200; i++) {
    createStar();
  }
}

function createShootingStars() {
  for (let i = 0; i < 20; i++) {
    createShootingStar();
  }
}

createStars();
createShootingStars();