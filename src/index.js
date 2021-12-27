import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";

import "./index.css";

const tontu_r = document.getElementById("tontu-arrow-right");
const tontu_r_faded = document.getElementById("tontu-arrow-right-faded");
const tontu_l = document.getElementById("tontu-arrow-left");
const tontu_l_faded = document.getElementById("tontu-arrow-right-faded");
const phone_list = document.getElementsByClassName("phone-screen");
const skydda_r = document.getElementById("skydda-arrow-right");
const skydda_r_faded = document.getElementById("skydda-arrow-right-faded");
const skydda_l = document.getElementById("skydda-arrow-left");
const skydda_l_faded = document.getElementById("skydda-arrow-left-faded");
const skydda_list = document.getElementsByClassName("skydda-list");
const skydda_r_md = document.getElementById("skydda-arrow-right-md");
const skydda_r_faded_md = document.getElementById(
  "skydda-arrow-right-faded-md"
);
const skydda_l_md = document.getElementById("skydda-arrow-left-md");
const skydda_l_faded_md = document.getElementById("skydda-arrow-left-faded-md");
const skydda_list_md = document.getElementsByClassName("skydda-list-md");

const buttons = [
  {
    name: tontu_r,
    direction: "right",
    faded: false,
    siblings: [tontu_l, tontu_l_faded, tontu_r_faded],
    list: phone_list,
  },
  {
    name: tontu_l,
    direction: "left",
    faded: false,
    siblings: [tontu_r, tontu_r_faded, tontu_l_faded],
    list: phone_list,
  },
  {
    name: skydda_r,
    direction: "right",
    faded: false,
    siblings: [skydda_l, skydda_l_faded, skydda_r_faded],
    list: skydda_list,
  },
  {
    name: skydda_l,
    direction: "left",
    faded: false,
    siblings: [skydda_r, skydda_r_faded, skydda_l_faded],
    list: skydda_list,
  },
  {
    name: tontu_r_faded,
    direction: "right",
    faded: true,
    siblings: null,
    list: phone_list,
  },
  {
    name: tontu_l_faded,
    direction: "left",
    faded: true,
    siblings: null,
    list: phone_list,
  },
  {
    name: skydda_r_faded,
    direction: "right",
    faded: true,
    siblings: null,
    list: skydda_list,
  },
  {
    name: skydda_l_faded,
    direction: "left",
    faded: true,
    siblings: null,
    list: skydda_list,
  },
  {
    name: skydda_r_md,
    direction: "right",
    faded: false,
    siblings: [skydda_l_md, skydda_l_faded_md, skydda_r_faded_md],
    list: skydda_list_md,
  },
  {
    name: skydda_l_md,
    direction: "left",
    faded: false,
    siblings: [skydda_r_md, skydda_r_faded_md, skydda_l_faded_md],
    list: skydda_list_md,
  },
  {
    name: skydda_r_faded_md,
    direction: "right",
    faded: true,
    siblings: null,
    list: skydda_list_md,
  },
  {
    name: skydda_l_faded_md,
    direction: "left",
    faded: true,
    siblings: null,
    list: skydda_list_md,
  },
];

const rightClick = function (name, siblings, list) {
  console.log("hi");
  for (let x = 0; x < list.length; x++) {
    if (list[x].classList.contains("hidden")) {
      //pass
    } else {
      if (list !== skydda_list_md) {
        if (x !== list.length - 1) {
          list[x].classList.add("hidden");
          list[x + 1].classList.remove("hidden");
          if (x === 0) {
            siblings[1].classList.add("opacity-0");
            siblings[0].classList.remove("opacity-0");
          }
          if (x === list.length - 2) {
            name.classList.add("opacity-0");
            siblings[2].classList.remove("opacity-0");
          }
        }
      } else {
        if (x !== list.length - 2) {
          list[x].classList.add("hidden");
          list[x + 2].classList.remove("hidden");
          if (x === 0) {
            siblings[1].classList.add("opacity-0");
            siblings[0].classList.remove("opacity-0");
          }
          if (x === list.length - 3) {
            name.classList.add("opacity-0");
            siblings[2].classList.remove("opacity-0");
          }
        }
      }
      break;
    }
  }
};

const leftClick = function (name, siblings, list) {
  for (let x = 0; x < list.length; x++) {
    if (list[x].classList.contains("hidden")) {
      //pass
    } else {
      if (list !== skydda_list_md) {
        if (x !== 0) {
          list[x].classList.add("hidden");
          list[x - 1].classList.remove("hidden");
          if (x === list.length - 1) {
            siblings[1].classList.add("opacity-0");
            siblings[0].classList.remove("opacity-0");
          }
          if (x === 1) {
            name.classList.add("opacity-0");
            siblings[2].classList.remove("opacity-0");
          }
        }
      } else {
        list[x + 1].classList.add("hidden");
        list[x - 1].classList.remove("hidden");
        if (x === list.length - 2) {
          siblings[1].classList.add("opacity-0");
          siblings[0].classList.remove("opacity-0");
        }
        if (x === 1) {
          name.classList.add("opacity-0");
          siblings[2].classList.remove("opacity-0");
        }
      }
      break;
    }
  }
};

for (let x = 0; x < buttons.length; x++) {
  if (buttons[x].name !== null) {
    buttons[x].name.addEventListener("click", (e) => {
      if (buttons[x].faded === false) {
        if (buttons[x].direction === "right") {
          rightClick(buttons[x].name, buttons[x].siblings, buttons[x].list);
        } else {
          leftClick(buttons[x].name, buttons[x].siblings, buttons[x].list);
        }
      }
    });
  }
}
