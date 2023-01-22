//fetching data from API
let promise = fetch("https://agreeable-toad-rugby-shirt.cyclic.app/data");

promise.then((res)=>{
    return res.json();
})
.then((data)=>{
    let products = data.filter((ele)=>(ele.categories!=="women's clothing" && ele.categories!=="Girls-shorts"));
    render(products);
    cartAddition(products);
    sortFun(products);

// adding sort functionality

function sortFun(arr){
let sortBtn = document.getElementById("sort");
let defaultSort = document.getElementById("defaultSort");

sortBtn.addEventListener("change",()=>{
    

    let sortedData = [...arr];

    console.log(sortedData);
    if(sortBtn.value==="low"){
        defaultSort.innerText = "Remove sort";
        sortedData.sort((a,b)=>a.price-b.price);
        render(sortedData);
        cartAddition(sortedData);
    }else if(sortBtn.value === "high"){
        defaultSort.innerText = "Remove sort";
        sortedData.sort((a,b)=>b.price-a.price);
        render(sortedData);
        cartAddition(sortedData);
    }else{
        defaultSort.innerText = "Select";
        render(arr);
        cartAddition(arr);
    }
})
}


// adding filter functionality

let checkboxValues = [];

let checkboxes = document.querySelectorAll("input[type='checkbox']");

console.log(checkboxes);

for(let i=0; i<=checkboxes.length-1; i++){
    checkboxes[i].addEventListener("change",()=>{
        
        if(checkboxes[i].checked){
            checkboxValues.push(checkboxes[i].name);

            let filteredData = products.filter((ele)=>{
                for(let val of checkboxValues){
                    if(ele.categories == val){
                        return ele;
                    }
                }
            })



            render(filteredData);
            cartAddition(filteredData);
            sortFun(filteredData);

            console.log(filteredData);
            console.log(checkboxValues);
        }else{
            if(checkboxValues.includes(checkboxes[i].name)){
                checkboxValues = checkboxValues.filter((el)=>el!==checkboxes[i].name);
            }

            let filteredData = products.filter((ele)=>{
                for(let val of checkboxValues){
                    if(ele.categories == val){
                        return ele;
                    }
                }
            })

            filteredData.length == 0 ? render(products) : render(filteredData);
            filteredData.length == 0 ? cartAddition(products) : cartAddition(filteredData);
            filteredData.length == 0 ? sortFun(products) : sortFun(filteredData);

            


            console.log(filteredData);

            console.log(checkboxValues);
        }
    })
}


})



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
        image.setAttribute("src",ele.avatar[0]);
        let desc = document.createElement("div");
        desc.innerHTML = ` 
        <h3>Samajhdar</h3>
        <p>${ele.name}`;
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

//creating a function to add event listener to cart buttons
function cartAddition(arr){
    // adding event listener to add to cart divs
    let products = arr;
    
    let sizeValues = document.querySelectorAll(".size");
    let cartBtns = document.querySelectorAll(".cart");
    
    
    
    
    for(let i=0; i<=cartBtns.length-1; i++){
    
        cartBtns[i].addEventListener("click",()=>{
    
            console.log("Hello");
            
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
}




