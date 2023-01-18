
let products = [
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499
    },
    {
        image : "https://images.bewakoof.com/t640/men-s-blue-web-slinger-graphic-printed-t-shirt-570100-1673966432-1.jpg",
        brand : "Samajhdar",
        description : "Men's Blue Web Slinger Graphic Printed T-shirt",
        price : 499
    }
]

//the span where total product numbers will be displayed
let totalDisplay = document.getElementById("total-items");

//the div in which product cards have to be appended
let display = document.getElementById("products-container");

//invoking render function on products
render(products);

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