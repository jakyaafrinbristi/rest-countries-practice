const loadCountries = () => {
  fetch(`
  https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => showData(data.slice(0, 5)))
}
const showAllCountries = () => {
  fetch(`
  https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => showData(data))
}


const showData = (countries) => {
  const cardContainer = document.getElementById('country-info');
  cardContainer.innerHTML='';
  countries.forEach(country => {
    console.log(country.currencies)
    const card = document.createElement('div');
    card.innerHTML = `<div class="card w-full bg-base-100 shadow-2xl">
    <figure><img class="w-full h-40"  src="${country.flags.png}"/></figure>
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
      <label onClick="getDetailsData('${country.cca2}')" for="my_modal_6" class="btn">Details</label>
    </div>
      
    </div>
  </div>`
cardContainer.appendChild(card);
  });

}
const getDetailsData=(id)=>{
  fetch(`
  https://restcountries.com/v3.1/name/${id}`)
    .then(res => res.json())
    .then(data => showSingleCountryData(data[0]))
}


  const modalContainer=document.getElementById('modal-body');
  modalContainer.innerHTML=''
  const showSingleCountryData=(singleCountryData)=>{
    console.log(singleCountryData)
    const div=document.createElement('div');
    div.classList.add("modal-box");
    div.innerHTML=`
    <img   src="${singleCountryData.flags.png}" alt="Shoes" />
    <div class="card-body">
      <h2 class="card-title">
        ${singleCountryData.name.common}
        
      </h2>
      <p class="text-xl">  Capital: ${singleCountryData?.capital ? singleCountryData?.capital[0]: "Not Found"}</p>
      <p><span class="text-xl">Population:</span>${singleCountryData.population}</p>
      <p class="text-xl">Currency:${singleCountryData.currencies ? Object.keys(singleCountryData.currencies)[0] : "Not Found"
      }</p>
    <div class="modal-action">
        <label for="my_modal_6" class="btn">Close!</label>
    </div>
    </div>`
    modalContainer.appendChild(div)




}
loadCountries()