/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convert = document.getElementById("convert-btn");
let input = document.getElementById("input-btn");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let clear = document.getElementById("clear-btn");

function converter(value, parameter) {
  if (parameter === "m-f") {
    return (value * 3.281).toFixed(3);
  } else if (parameter == "f-m") {
    return (value / 3.281).toFixed(3);
  } else if (parameter == "l-g") {
    return (value * 0.264).toFixed(3);
  } else if (parameter === "g-l") {
    return (value / 0.264).toFixed(3);
  } else if (parameter === "k-p") {
    return (value * 2.204).toFixed(3);
  } else if (parameter === "p-k") {
    return (value / 2.204).toFixed(3);
  }
}

convert.addEventListener("click", function () {
  length.innerHTML += `<p>${input.value} meters = ${converter(
    input.value,
    "m-f"
  )} feet | ${input.value} feet = ${converter(input.value, "f-m")} meters</p>`;
  volume.innerHTML += `<p>${input.value} leters = ${converter(
    input.value,
    "l-g"
  )} gallons | ${input.value} gallons = ${converter(
    input.value,
    "g-l"
  )} liters</p>`;
  mass.innerHTML += `<p>${input.value} kilograms = ${converter(
    input.value,
    "k-p"
  )} pounds | ${input.value} pounds = ${converter(
    input.value,
    "p-k"
  )} kilograms</p>`;

  input.value = "";
});

clear.addEventListener("click", function () {
  volume.innerHTML = "<h2>Volume(Litres/Gallons)</h2>";
  length.innerHTML = "<h2>Length(Meter/Feet)</h2>";
  mass.innerHTML = "<h2>Mass(Kilograms/Pounds)</h2>";
});
