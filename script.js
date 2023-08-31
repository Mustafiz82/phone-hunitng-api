// console.log("hello world")

const searchPhone = (istrue) => {
    let input = document.getElementById("search-input").value || "iphone"
    
console.log(input)


    fetch(`https://openapi.programming-hero.com/api/phones?search=${input}`)
        .then(res => res.json())
        .then(json => loadData(json ,istrue))


}


function loadData(json , isTrue) {


    const phoneContainer = document.getElementById("phone-container")
    phoneContainer.innerHTML = ``

    console.log(json.data.length)

    let show = document.getElementById("show-all-btn")
    console.log(show)

    // if(json.data.length > 9){
    
       

    // }


    if (json.data.length > 9  && isTrue == true){
        show.classList.remove("hidden")
        json  = json.data.slice(0,9)
        
        
    }
    else{
        show.classList.add("hidden")
        json = json.data
    }

    // console.log(show)


    

    json.forEach(element => {
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
            <button onclick="showDetails.showModal('${element.slug}')" class="btn btn-primary">Show detail</button>
        </div>
    </div>
    
    `
    // console.log()
    phoneContainer.appendChild(div)

     
    
});




}


// document.getElementById("show-all-btn").addEventListener("click" , function(){
//     // console.log("hello world")
//     // let input = document.getElementById("")
//     searchPhone()
//   })


function showDetail(id){

    let modal = document.getElementById("showDetails")
    console.log(modal)
}

searchPhone(true)