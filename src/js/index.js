const url = "https://restcountries.com/v2/all";

// DOM elements

const countriesEl = document.getElementById("countries");

const getCountries = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
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
      "max-w-[300px]",
      "mb-3"
    );
    countryEl.innerHTML = `<div>
        <img src="${item.flag}" alt="${item.name} flag" />
      </div>
      <div class="p-5">
        <h2 class="font-bold text-lg">${item.name}</h2>
        <p class="text-sm">
          <strong>Population:</strong>${item.population}
        </p>
        <p class="text-sm">
          <strong>Region:</strong>${item.region}
        </p>
        <p class="text-sm">
          <strong>Capital:</strong>${item.capital}
        </p>
      </div>`;

    countriesEl.appendChild(countryEl);
  });
};
