const modals = () => {
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    overlaySelector
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      overlay = document.querySelector(overlaySelector);

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        modal.classList.add("modal_show");
        overlay.classList.add("modal_overlay--show");

        modal.classList.remove("modal_hide");
        overlay.classList.remove("modal_overlay--hide");

        document.body.style.overflow = "hidden";
      });
    });

    close.addEventListener("click", () => {
      modal.classList.remove("modal_show");
      overlay.classList.remove("modal_overlay--show");

      modal.classList.add("modal_hide");
      overlay.classList.add("modal_overlay--hide");

      document.body.style.overflow = "";
    });

    document.body.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        modal.classList.add("modal_hide");
        overlay.classList.add("modal_overlay--hide");

        modal.classList.remove("modal_show");
        overlay.classList.remove("modal_overlay--show");
        document.body.style.overflow = "";
      }
    });

    document.body.addEventListener("click", (e) => {
      if (e.target === overlay) {
        modal.classList.add("modal_hide");
        overlay.classList.add("modal_overlay--hide");

        modal.classList.remove("modal_show");
        overlay.classList.remove("modal_overlay--show");

        document.body.style.overflow = "";
      }
    });
  }

  bindModal(".modal_btn", ".modal_popap", ".modal_close", ".modal_overlay");
  // bindModal(".modal_btn", ".modal_calc", ".modal_close", ".modal_overlay");
};

modals();

export default modals;
