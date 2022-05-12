const url = "https://restcountries.com/v2/all";

const getCountries = async () => {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
};

getCountries();
