let tempUnit = "c";
const toggler = document.querySelector(".switch-indicator");

function switchTempUnit() {
  toggler.classList.toggle("degrees-c");
  toggler.classList.toggle("degrees-f");

  if (tempUnit === "c") {
    tempUnit = "f";
  } else {
    tempUnit = "c";
  }
}

export {tempUnit, switchTempUnit}