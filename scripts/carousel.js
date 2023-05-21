let cards_div = document.getElementsByClassName("carousel_cards");

let card_0 = document.getElementById("0_card");
let card_1 = document.getElementById("1_card");
let card_2 = document.getElementById("2_card");
let card_3 = document.getElementById("3_card");
let card_4 = document.getElementById("4_card");
let card_5 = document.getElementById("5_card");
let card_0_repr = document.getElementById("0_card_repr");
let card_1_repr = document.getElementById("1_card_repr");
let card_2_repr = document.getElementById("2_card_repr");
let card_3_repr = document.getElementById("3_card_repr");

card_3.style.display = "none";
card_4.style.display = "none";
card_5.style.display = "none";
card_0.style.display = "block";
card_1.style.display = "block";
card_2.style.display = "block";

// representatives cards intial states
card_0_repr.style.display = "block";
card_1_repr.style.display = "block";
card_2_repr.style.display = "block";
card_3_repr.style.display = "none";

function carousel(n) {
  //   n -1 = left n 1 = right
  if (n == -1) {
    card_3.style.display = "none";
    card_4.style.display = "none";
    card_5.style.display = "none";
    card_0.style.display = "block";
    card_1.style.display = "block";
    card_2.style.display = "block";
  } else if (n == 1) {
    card_3.style.display = "block";
    card_4.style.display = "block";
    card_5.style.display = "block";
    card_0.style.display = "none";
    card_1.style.display = "none";
    card_2.style.display = "none";
  }
}
function carousel_repr(m) {
  if (m == -1) {
    card_0_repr.style.display = "block";
    card_1_repr.style.display = "block";
    card_2_repr.style.display = "block";
    card_3_repr.style.display = "none";
  } else if (m == 1) {
    card_0_repr.style.display = "none";
    card_1_repr.style.display = "none";
    card_2_repr.style.display = "none";
    card_3_repr.style.display = "block";
  }
}
