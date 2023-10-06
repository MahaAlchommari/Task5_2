fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const flagsDropdown = document.getElementById("flagsDropdown");

    data.forEach((country) => {
      const flag = country.flags.png;
      const countryCode = country.cca2;

      const flagItem = document.createElement("li");
      flagItem.classList.add("dropdown-item");
      flagItem.innerHTML = `<img src="${flag}" alt="${country.name.common}" class="flag"> ${countryCode}`;

      flagsDropdown.appendChild(flagItem);
    });
  });
var selectedOption = document.getElementById("dropdownMenuButton").value;
document.getElementById("flagsDropdown").innerText = selectedOption;

fetch("https://dummyjson.com/products")
  .then(function (result) {
    return result.json();
  })
  .then(function (result) {
    console.log(result);
    display(result);
  });
const card = document.querySelector(".products");
function display(result) {
  for (let index = 0; index < 5; index++) {
    const element = result[index];
  }
}
