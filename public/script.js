
const foodData = [

    {
        image:"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
        description:"Fries and chicken",
        price:"$20"

    },

    {
        image:"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
        description:"Fries and chicken",
        price:"$20"

    },

    {
        image:"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
        description:"Fries and chicken",
        price:"$20"

    },

      {
        image:"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
        description:"Fries and chicken",
        price:"$20"

    },

    {
        image:"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
        description:"Fries and chicken",
        price:"$20"

    },

    {
        image:"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
        description:"Fries and chicken",
        price:"$20"

    },

      {
        image:"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
        description:"Fries and chicken",
        price:"$20"

    },
]

function  centerOne(data){
    const Panel1 = document.getElementById("center1")
  

    data.map(cardInfo =>{
        const cards = document.createElement('div')
        cards.className = "cards";
        
        cards.innerHTML =   
        `
            <img class="food-image" src="${cardInfo.image}" style="width: 100%;">
            <h3 class="food-descriptions">${cardInfo.description}</h3>
            <h4 class="price">${cardInfo.price}</h4>
            <button class="add-to-cart">Add to Foods</button>
       `
        Panel1.appendChild(cards)
       
        
    })
   
}

centerOne(foodData)

function  centerTwo(data){
    const Panel2 = document.getElementById("center2")
  

    data.map(cardInfo =>{
        const cards = document.createElement('div')
        cards.className = "cards";
        
        cards.innerHTML =   
        `
            <img class="food-image" src="${cardInfo.image}" style="width: 100%;">
            <h3 class="food-descriptions">${cardInfo.description}</h3>
            <h4 class="price">${cardInfo.price}</h4>
            <button class="add-to-cart">Add to Foods</button>
       `
        Panel2.appendChild(cards)
       
        
    })
   
}

centerTwo(foodData)

function addToCart() {
    const count = document.getElementById("count");
    const addButtons = document.querySelectorAll('.add-to-cart');

    let numItems = localStorage.getItem("cartCount") || 0;
    count.innerHTML = numItems;

    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            numItems++;
            localStorage.setItem("cartCount", numItems);
            count.innerHTML = numItems;
        });
    });
}

addToCart();

async function getData() {
    const res = await fetch("/api/data")
    const data = await res.json()
    console.log(data)
}
getData()