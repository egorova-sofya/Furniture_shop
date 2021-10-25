import changeModalState from "./modules/changeModalState";
import forms from "./modules/forms";
import images from "./modules/images";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modalState = {};
  let deadline = "2021-12-29";
  changeModalState(modalState);
  modals(modalState);
  tabs(
    ".calc_list-materials",
    ".calc_item-material",
    "calc_item-material--active"
  );

  tabs(
    ".modal_icons-list",
    ".modal_icon-item",
    "modal_do-icon-more",
    ".modal_big-icon-item"
  );
  forms(modalState);

  timer(".timer", deadline);

  images();
});
