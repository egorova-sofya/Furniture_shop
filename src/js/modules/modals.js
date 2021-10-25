const modals = (state) => {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    closeOverlay = true
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelectorAll(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      scroll = calcScroll();

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        if (item.getAttribute("data-fill") === "fill") {
          if (!state.amount) {
            item.disabled = true;
          }
          const amount = document.querySelector(".modal_input-amount");
          amount.addEventListener("input", function () {
            if (amount.validity.valueMissing) {
              item.disabled = true;
            } else {
              item.disabled = false;
            }
          });
        }

        if (item.disabled === false) {
          windows.forEach((item) => {
            item.style.display = "none";
          });
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
          document.body.style.marginRight = `${scroll}px`;
        }
      });
    });
    close.forEach((item) => {
      item.addEventListener("click", () => {
        windows.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "none";

        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      });
    });

    document.body.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeOverlay) {
        windows.forEach((item) => {
          item.style.display = "none";
        });
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrolWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrolWidth;
  }

  // bindModal(".modal_btn", ".modal_popap", ".modal_close", ".modal_overlay");
  bindModal(".modal_btn", ".modal_overlay", ".modal_close");
  bindModal(".calc_button", ".modal-calc_overlay", ".modal_close");
  bindModal(
    ".modal_button-calc",
    ".modal-calc-end_overlay",
    ".modal_close",
    false
  );
};

export default modals;
