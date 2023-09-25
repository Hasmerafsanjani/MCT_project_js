// display some product  onload in the  page  
let searchText=10

function searchHandler(isShowAll){
    loading(true);
    const searchField=document.getElementById("searchField");
    searchText=searchField.value;
    loadPhone(searchText,isShowAll);
    
}
const loading= (isLoading)=>{
    const loading= document.getElementById("loading");
    if(isLoading)
    {
        loading.classList.remove('hidden');
    }
    else{
        loading.classList.add('hidden');
    }
}
// fetch the api and access the data 

const loadPhone= async(searchText,isShowAll)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data =await res.json();
    const phones = data.data;
    displayPhones(phones,isShowAll); 
}

loadPhone(searchText);
const displayPhones = (phones,isShowAll)=>{
    //console.log(phones);
    const phoneContainer= document.getElementById("phone-container");
    phoneContainer.textContent='';
    
    const showAll= document.getElementById("showALLBtn");
    if(phones.length>12 && !isShowAll)
    {
        showAll.classList.remove('hidden');
        
        
    }
    else
    {
        showAll.classList.add('hidden');
    }
    //display first 10
    if(!isShowAll)
    {
        phones=phones.slice(0,12);
    }
    
    phones.forEach(phone => {
        //console.log(phone);
        //1 create a div
        const phoneCard=document.createElement('div');
        phoneCard.classList=`card bg-green-100 shadow-xl p-5 items-center rounded-lg`;
        phoneCard.innerHTML=`
        <section class="px-10 pt-10 flex items-center justify-center ">
                      <img src="${phone.image}" alt="phone" class="rounded-xl" />
                    </section>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title font-bold text-xl my-2">${phone.phone_name}</h2>
                      <p class="font-semibold" >This is One of  the model <br> of ${phone.brand} and there are many  models <br> in this brand </p>
                      <div class="card-actions">
                        <button onclick="showDetailsHandler('${phone.slug}')" class="btn btn-primary text-white bg-pink-600 p-2 font-bold">Show Details</button>
                      </div>
                    </div>

        `;
        phoneContainer.appendChild(phoneCard);
        
    });
    //hide loading spinner
    loading(false);
}

// show All Button
function showBtn()
{
   searchHandler(true);
}
// Show Details
const showDetailsHandler = async (id)=>{
    // load data
    const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data=await res.json();
    
    const phone=data.data;
    showPhoneDetails(phone);
    //console.log(phone);
}
const showPhoneDetails=(details)=>{
    my_modal.showModal();
    const modelName= document.getElementById('detailsPhoneName');
    const brandName= document.getElementById('detailsBrand');
    const detailsSpec= document.getElementById('detailsSpec');
    const releaseDate= document.getElementById('releaseDate');
    const imageDiv= document.getElementById('imgContainer');

    imageDiv.innerHTML=`<img src="${details.image}" alt="">`;
    modelName.innerText=details.name;
    brandName.innerText=`Brand: ${details.brand}`;
    const features=details.mainFeatures;
    //console.log(features.storage);
    console.log(details.image);
    let string="";
    for (const key in features) {
        string=string+`${key}: ${features[key]} \n`;
    }
    detailsSpec.innerText=string;
    releaseDate.innerText=`${details.releaseDate}`;
}