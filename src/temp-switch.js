let tempUnit = "c";

function switchTempUnit() {
  if (tempUnit === "c") {
    tempUnit = "f";
  } else {
    tempUnit = "c";
  }
}

export {tempUnit, switchTempUnit}