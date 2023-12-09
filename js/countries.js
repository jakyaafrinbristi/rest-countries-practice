const loadAllData=()=>{
  fetch(`https://restcountries.com/v3.1/all`)
  .then(res=>res.json())
  .then(data=>showData(data.slice(0,9)))
}
const showAllData=()=>{
  fetch(`https://restcountries.com/v3.1/all`)
  .then(res=>res.json())
  .then(data=>showData(data))

}

const showData =(data)=>{
  const cardContainer =document.getElementById('country-info');
  cardContainer.innerHTML='';
  data.forEach(country => {
    console.log(country)
    const card =document.createElement('div');
    card.innerHTML=`<div class="card w-full bg-base-100 shadow-2xl">
    <figure >
      <img  w-full h-96 src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${country.name.common}
      <div class="badge badge-secondary">${country.cca2}</div>
      </h2>
      <p class="font-bold">Capital:${country?.capital?country?.capital?.[0] : "Not Found"}</p>
      <p class="font-bold">Population:${country.population}</p>
      <p>Currency: ${
        country.currencies ? Object.keys(country.currencies)[0] : "Not Found"
      }</p>
      <div class="card-actions justify-end">
      <label onClick="getDetailsData('${
        country.cca2
      }')" for="my-modal" class="btn">Details</label>
    </div>
    </div>
  </div>`
  cardContainer.appendChild(card);
    
  });
}
const getDetailsData =(id)=>{
  const url=`https://restcountries.com/v3.1/alpha/${id}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>showSingleData (data[0]))
  
}
const container = document.getElementById("modal-info");
const showSingleData = (singleCountryData) => {
  console.log(singleCountryData);
  container.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("modal-box");
  div.innerHTML = `
  <img src="${singleCountryData.flags.png}"/>
  <h3 class="font-bold text-lg">
 <span class="text-xl">Name: </span> ${singleCountryData.name.common}
 <div class="badge badge-secondary">${country.cca2}</div>
  </h3>
  <p class="py-4">
  <span class="text-xl">Population: </span>${singleCountryData.population}
  </p>
  <p><span class="text-xl">Currency: </span> ${
    singleCountryData.currencies
      ? Object.keys(singleCountryData.currencies)[0]
      : "Not Found"
  }</p>
  <div class="modal-action">
    <label for="my-modal" class="btn">Close!</label>
  </div>
  
  `;
  container.appendChild(div);
};


loadAllData();