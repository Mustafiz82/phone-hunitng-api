// console.log("hello world")

const searchPhone = () => {
    let input = document.getElementById("search-input").value




    fetch(`https://openapi.programming-hero.com/api/phones?search=${input}`)
        .then(res => res.json())
        .then(json => loadData(json))


}


function loadData(json) {


    const phoneContainer = document.getElementById("phone-container")
    phoneContainer.innerHTML = ``

    console.log(json.data.length)

    if (json.data.length > 9){
        // let json.data  = slice(0,9)
    }
    else{
        let phone = json.data
    }



    phone.forEach(element => {
        // console.log(element.slug)
    

    // console.log(phoneContainer)

    const div = document.createElement("div")
    div.classList = "card  bg-base-100 border-[1px] p-6"


    div.innerHTML = `
    <figure class=" p-10 bg-sky-100 ">
    <img src="${element?.image}" alt="Shoes"
        class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="text-2xl font-bold card-title my-5">${element?.phone_name}</h2>
        <p class="text-lg">There are many variations of passages of available, but the majority have
            suffered</p>
        <p class="text-2xl font-bold">$<SPan>999</SPan></p>
        <div class="card-actions">
            <button onclick="showDetail('${element.slug}')" class="btn btn-primary">Show detail</button>
        </div>
    </div>
    
    `
    // console.log()
    phoneContainer.appendChild(div)

     
    
});

let  showAll = document.getElementById("show-all-btn").addEventListener("click" , function(){
    console.log("hello world")
  })

}

function showDetail(id){
    console.log(id)
}

