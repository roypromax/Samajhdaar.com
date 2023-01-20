
let products = [
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499,
        id:1
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-black-deathnote-ryuk-oversized-t-shirt-568923-1673597452-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 99,
        id : 2
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-black-riot-xxxtentican-oversized-t-shirt-568930-1673612996-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 399,
        id: 3
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499,
        id : 4
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 999,
        id : 5
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499,
        id : 6
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 699,
        id : 7
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 799,
        id : 8
    }
]

//the span where total product numbers will be displayed
let totalDisplay = document.getElementById("total-items");

//the div in which product cards have to be appended
let display = document.getElementById("products-container");

//creating a function that will create and append product cards
function render(arr){

    display.innerHTML = null;
    let total = arr.length;

    totalDisplay.innerText = `(${total})`

    arr.forEach((ele,i)=>{
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",ele.image);
        let desc = document.createElement("div");
        desc.innerHTML = ` 
        <h3>${ele.brand}</h3>
        <p>${ele.description}`;
        let actions = document.createElement("div");
        actions.setAttribute("class","buttons-div")
        actions.innerHTML = `
        <select class="size">
        <option value="null">Select Size</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">X-Large</option>
        </select>
        <div class="cart"><img src="https://images.bewakoof.com/web/ic-web-head-cart.svg"><span>Add to Bag</span></div>`;
        let price = document.createElement("div");
        price.innerHTML = `<h3>₹${ele.price}</h3>`;

        card.append(image,desc,actions,price);
        display.append(card);
    })



}

//invoking render function on products
render(products);

// adding sort functionality
let sortBtn = document.getElementById("sort");
let defaultSort = document.getElementById("defaultSort");

sortBtn.addEventListener("change",()=>{
    
    let sortedData = [...products];
    if(sortBtn.value==="low"){
        defaultSort.innerText = "Remove sort";
        sortedData.sort((a,b)=>a.price-b.price);
        render(sortedData);
    }else if(sortBtn.value === "high"){
        defaultSort.innerText = "Remove sort";
        sortedData.sort((a,b)=>b.price-a.price);
        render(sortedData);
    }else{
        defaultSort.innerText = "Select";
        render(products);
    }
})

// adding event listener to add to cart divs

let sizeValues = document.querySelectorAll(".size");
let cartBtns = document.querySelectorAll(".cart");


for(let i=0; i<=cartBtns.length-1; i++){

    cartBtns[i].addEventListener("click",()=>{
        
        if(sizeValues[i].value === "null"){
            alert("Please select a size");
        }else{
            let cartItems  = JSON.parse(localStorage.getItem("cart")) || [];
            let obj = {...products[i]};
            obj.size = sizeValues[i].value;
            obj.quantity = 1;

            let duplicate = false;

            for(let i=0; i<=cartItems.length-1; i++){
                if(cartItems[i].id == obj.id){
                    if(cartItems[i].size == obj.size){
                        duplicate = true;
                        break;
                    }              
                }
            }

            if(duplicate){
                alert("Product is already in cart");
            }else{
                cartItems.push(obj);
                localStorage.setItem("cart",JSON.stringify(cartItems));
                alert("Product added to cart");
            }
        }
    })
}

