import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const furnitureType = document.querySelectorAll(".modal_icon-item"),
    furnitureAmount = document.querySelectorAll("#amount"),
    furnitureMaterial = document.querySelectorAll(".calc_img");

  checkNumInputs("#amount");

  const bindActiontoElems = (event, elem, prop) => {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "LI":
            state[prop] = i;
            break;
          case "INPUT":
            state[prop] = item.value;
            break;
          case "IMG":
            state[prop] = item.alt;
            break;
        }
        console.log(state);
      });
    });
  };

  bindActiontoElems("click", furnitureType, "type");
  bindActiontoElems("input", furnitureAmount, "amount");
  bindActiontoElems("click", furnitureMaterial, "material");
};

export default changeModalState;
