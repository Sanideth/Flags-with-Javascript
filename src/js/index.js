const url = "https://restcountries.com/v2/all";

// DOM elements

const countriesEl = document.getElementById("countries");
const searchEl = document.getElementById("search");
const filterEl = document.getElementById("filter");
const listButtons = document.querySelectorAll("li");

const getCountries = async () => {
  const res = await fetch(url);
  const data = await res.json();
  displayCountries(data);
};

getCountries();

const displayCountries = (data) => {
  countriesEl.innerHTML = "";
  data.forEach((item) => {
    const countryEl = document.createElement("div");
    countryEl.classList.add(
      "rounded",
      "bg-white",
      "shadow-sm",
      "overflow-hidden",
      "w-[300px]",
      "mb-3"
    );
    countryEl.innerHTML = `<div>
        <img src="${item.flag}" alt="${item.name} flag" />
      </div>
      <div class="p-5">
        <h2 class="font-bold text-lg heading">${item.name}</h2>
        <p class="text-sm">
          <strong>Population:</strong>${item.population}
        </p>
        <p class="text-sm region">
          <strong>Region:</strong>${item.region}
        </p>
        <p class="text-sm">
          <strong>Capital:</strong>${item.capital}
        </p>
      </div>`;

    countriesEl.appendChild(countryEl);
  });
};

searchEl.addEventListener("input", (e) => {
  const value = e.target.value;
  const countryNames = document.querySelectorAll(".heading");
  countryNames.forEach((name) => {
    if (name.innerText.toLowerCase().includes(value.toLowerCase())) {
      name.parentElement.parentElement.style.display = "block";
    } else {
      name.parentElement.parentElement.style.display = "none";
    }
  });
});

filterEl.addEventListener("click", (e) => {
  const filterList = document.getElementById("filter-list");
  filterList.classList.toggle("hidden");
});

listButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const countryRegions = document.querySelectorAll(".region");
    countryRegions.forEach((name) => {
      if (
        name.innerText.toLowerCase().includes(button.innerText.toLowerCase())
      ) {
        name.parentElement.parentElement.style.display = "block";
      } else {
        name.parentElement.parentElement.style.display = "none";
      }
    });
  });
});
