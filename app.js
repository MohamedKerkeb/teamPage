const card = document.querySelectorAll(".card");
const container = document.querySelector(".container");

card.forEach((c, i) => {
  const newLocal = window.screen.width;
  if (i % 2 && newLocal <= 520) {
    card[i].classList.add("down");
  }
  if (newLocal > 520) {
    card[1].classList.add("down");
    card[4].classList.add("down");
  }
});
