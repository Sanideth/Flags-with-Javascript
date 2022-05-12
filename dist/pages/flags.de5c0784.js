const url = "https://restcountries.com/v2/all";
// DOM elements
const countries = document.getElementById("countries");
const getCountries = async ()=>{
    const res = await fetch(url);
    const data = await res.json();
    displayCountries(data);
};
getCountries();
const displayCountries = (data)=>{
    data.forEach((item)=>{
        const country = document.createElement("div");
        country.classList.add("rounded", "bg-white", "shadow-sm", "overflow-hidden", "max-w-[300px]", "mb-3");
        country.innerHTML = `<div>
        <img src="https://flagcdn.com/de.svg" alt="" />
      </div>
      <div class="p-5">
        <h2 class="font-bold text-lg">Germany</h2>
        <p class="text-sm">
          <strong>Population:</strong>4324342
        </p>
        <p class="text-sm">
          <strong>Region:</strong>Europe
        </p>
        <p class="text-sm">
          <strong>Capital:</strong>Berlin
        </p>
      </div>`;
        countries.appendChild(country);
    });
};

//# sourceMappingURL=flags.de5c0784.js.map
