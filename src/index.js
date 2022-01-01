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
const UR_r = document.getElementById("UR-arrow-right");
const UR_r_faded = document.getElementById("UR-arrow-right-faded");
const UR_l = document.getElementById("UR-arrow-left");
const UR_l_faded = document.getElementById("UR-arrow-left-faded");
const UR_list = document.getElementsByClassName("UR-list");
const BG_r = document.getElementById("BG-arrow-right");
const BG_r_faded = document.getElementById("BG-arrow-right-faded");
const BG_l = document.getElementById("BG-arrow-left");
const BG_l_faded = document.getElementById("BG-arrow-left-faded");
const BG_list = document.getElementsByClassName("BG-list");
const tic_r = document.getElementById("tic-arrow-right");
const tic_r_faded = document.getElementById("tic-arrow-right-faded");
const tic_l = document.getElementById("tic-arrow-left");
const tic_l_faded = document.getElementById("tic-arrow-left-faded");
const tic_list = document.getElementsByClassName("tic-list");
const home_content = document.getElementById("home-content");
const about_text = document.getElementById("about-text");
const about_cross = document.getElementById("about-cross");
const about_button = document.getElementById("about");
const body_xl = document.getElementById("body-xl");
const about_text_xl = document.getElementById("about-text-xl");
const about_cross_xl = document.getElementById("about-cross-xl");
const about_button_xl = document.getElementById("about-xl");
const P1_r = document.getElementById("P1-arrow-right");
const P1_r_faded = document.getElementById("P1-arrow-right-faded");
const P1_l = document.getElementById("P1-arrow-left");
const P1_l_faded = document.getElementById("P1-arrow-left-faded");
const P1_list = document.getElementsByClassName("P1-list");
const P2_r = document.getElementById("P2-arrow-right");
const P2_r_faded = document.getElementById("P2-arrow-right-faded");
const P2_l = document.getElementById("P2-arrow-left");
const P2_l_faded = document.getElementById("P2-arrow-left-faded");
const P2_list = document.getElementsByClassName("P2-list");
const prototype_section = document.getElementById("prototype");
const prototype_clicked = document.getElementById("prototype-clicked");
const prototype_unclicked = document.getElementById("prototype-unclicked");
const app_section = document.getElementById("app");
const app_clicked = document.getElementById("app-clicked");
const app_unclicked = document.getElementById("app-unclicked");
const cad_section = document.getElementById("cad");
const cad_clicked = document.getElementById("cad-clicked");
const cad_unclicked = document.getElementById("cad-unclicked");
const A1_r = document.getElementById("A1-arrow-right");
const A1_r_faded = document.getElementById("A1-arrow-right-faded");
const A1_l = document.getElementById("A1-arrow-left");
const A1_l_faded = document.getElementById("A1-arrow-left-faded");
const A1_list = document.getElementsByClassName("A1-list");

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
    name: UR_r,
    direction: "right",
    faded: false,
    siblings: [UR_l, UR_l_faded, UR_r_faded],
    list: UR_list,
  },
  {
    name: UR_l,
    direction: "left",
    faded: false,
    siblings: [UR_r, UR_r_faded, UR_l_faded],
    list: UR_list,
  },
  {
    name: BG_r,
    direction: "right",
    faded: false,
    siblings: [BG_l, BG_l_faded, BG_r_faded],
    list: BG_list,
  },
  {
    name: BG_l,
    direction: "left",
    faded: false,
    siblings: [BG_r, BG_r_faded, BG_l_faded],
    list: BG_list,
  },
  {
    name: tic_r,
    direction: "right",
    faded: false,
    siblings: [tic_l, tic_l_faded, tic_r_faded],
    list: tic_list,
  },
  {
    name: tic_l,
    direction: "left",
    faded: false,
    siblings: [tic_r, tic_r_faded, tic_l_faded],
    list: tic_list,
  },
  {
    name: P1_r,
    direction: "right",
    faded: false,
    siblings: [P1_l, P1_l_faded, P1_r_faded],
    list: P1_list,
  },
  {
    name: P1_l,
    direction: "left",
    faded: false,
    siblings: [P1_r, P1_r_faded, P1_l_faded],
    list: P1_list,
  },
  {
    name: P2_r,
    direction: "right",
    faded: false,
    siblings: [P2_l, P2_l_faded, P2_r_faded],
    list: P2_list,
  },
  {
    name: P2_l,
    direction: "left",
    faded: false,
    siblings: [P2_r, P2_r_faded, P2_l_faded],
    list: P2_list,
  },
  {
    name: A1_r,
    direction: "right",
    faded: false,
    siblings: [A1_l, A1_l_faded, A1_r_faded],
    list: A1_list,
  },
  {
    name: A1_l,
    direction: "left",
    faded: false,
    siblings: [A1_r, A1_r_faded, A1_l_faded],
    list: A1_list,
  },
];

const tonus_buttons = [
  {
    clicked: true,
    btn_clicked: prototype_clicked,
    btn_unclicked: prototype_unclicked,
    section: prototype_section,
  },
  {
    clicked: false,
    btn_clicked: app_clicked,
    btn_unclicked: app_unclicked,
    section: app_section,
  },
  {
    clicked: false,
    btn_clicked: cad_clicked,
    btn_unclicked: cad_unclicked,
    section: cad_section,
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
        if (x !== 0) {
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

if (about_button !== null) {
  about_button.addEventListener("click", (e) => {
    console.log("hi");
    home_content.classList.add("blur");
    about_text.classList.remove("opacity-0");
    about_text.classList.remove("z-0");
    about_text.classList.add("z-50");
  });

  about_cross.addEventListener("click", (e) => {
    console.log("hi");
    home_content.classList.remove("blur");
    about_text.classList.add("opacity-0");
    about_text.classList.add("z-0");
    about_text.classList.remove("z-50");
  });

  about_button_xl.addEventListener("click", (e) => {
    body_xl.classList.add("blur");
    about_text_xl.classList.remove("opacity-0");
    about_text_xl.classList.remove("z-0");
    about_text_xl.classList.add("z-50");
  });

  about_cross_xl.addEventListener("click", (e) => {
    body_xl.classList.remove("blur");
    about_text_xl.classList.add("opacity-0");
    about_text_xl.classList.add("z-0");
    about_text_xl.classList.remove("z-50");
  });
}

for (let x = 0; x < tonus_buttons.length; x++) {
  if (tonus_buttons[x].section !== null) {
    tonus_buttons[x].btn_unclicked.addEventListener("click", (e) => {
      for (let y = 0; y < tonus_buttons.length; y++) {
        if (tonus_buttons[y] === tonus_buttons[x]) {
          tonus_buttons[y].btn_clicked.classList.remove("opacity-0");
          tonus_buttons[y].btn_unclicked.classList.add("opacity-0");
          tonus_buttons[y].section.classList.remove("hidden");
          tonus_buttons[y].clicked = true;
        } else if (tonus_buttons[y].clicked === true) {
          tonus_buttons[y].btn_clicked.classList.add("opacity-0");
          tonus_buttons[y].btn_unclicked.classList.remove("opacity-0");
          tonus_buttons[y].section.classList.add("hidden");
          tonus_buttons[y].clicked = false;
        }
      }
    });
  }
}

function onReady(callback) {
  var intervalId = window.setInterval(function () {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}

onReady(function () {
  setVisible(".page", true);
  setVisible("#loading", false);
});
