import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";

import "./index.css";

const tontu_r = document.getElementById("tonus-arrow-right");
const tontu_l = document.getElementById("tonus-arrow-left");
const phone_list = document.getElementsByClassName("phone-screen");
const phone1 = document.getElementById("phone-screen1");
const phone2 = document.getElementById("phone-screen2");
const phone3 = document.getElementById("phone-screen3");
const phone4 = document.getElementById("phone-screen4");

tontu_r.addEventListener("click", (e) => {
  for (let x = 0; x < 4; x++) {
    if (phone_list[x].classList.contains("hidden")) {
      //pass
    } else {
      if (x !== 3) {
        phone_list[x].classList.add("hidden");
        phone_list[x + 1].classList.remove("hidden");
      }
      break;
    }
  }
});

tontu_l.addEventListener("click", (e) => {
  for (let x = 0; x < 4; x++) {
    if (phone_list[x].classList.contains("hidden")) {
      //pass
    } else {
      if (x !== 0) {
        phone_list[x].classList.add("hidden");
        phone_list[x - 1].classList.remove("hidden");
      }
      break;
    }
  }
});
