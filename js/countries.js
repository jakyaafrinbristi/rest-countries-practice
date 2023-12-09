const loadCountries = () => {
  fetch(`
  https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => showData(data.slice(0, 5)))
}
loadCountries()

const showData = (countries) => {
  const cardContainer = document.getElementById('country-info');
  cardContainer.innerHTML='';
  countries.forEach(country => {
    console.log(country.currencies)
    const card = document.createElement('div');
    card.innerHTML = `<div class="card w-full bg-base-100 shadow-2xl">
    <figure><img class="w-full h-40"  src="${country.flags.png}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        ${country.name.common}
        <div class="badge badge-secondary">${country.cca2}</div>
      </h2>
      <p class="text-xl">  Capital: ${country?.capital ? country?.capital[0]: "Not Found"}</p>
      <p class="text-xl">Population:${country.population}</p>
      <p class="text-xl">Currency:${country.currencies ? Object.keys(country.currencies)[0] : "Not Found"
      }</p>
      
  
      <div class="card-actions justify-end">
      <div class="btn btn-primary"onClick=>Details</div>
      </div>
    </div>
  </div>`
cardContainer.appendChild(card);
  });

}