



let contaner=document.getElementById("card")
 let cartItems=JSON.parse(localStorage.getItem("cart")) || [];
 let total=document.getElementById("total")


    
    
   
    displayProduct(cartItems)
    function displayProduct(data){
      contaner.innerHTML=null;
      data.forEach((element,index)=>{
        let card=document.createElement("div")
        card.setAttribute("class","appendproduct")
        let imgdiv=document.createElement("div")
        imgdiv.setAttribute("class","eleimg")
        let datadiv=document.createElement("div")
        datadiv.setAttribute("class","dataele")
        let image=document.createElement("img")
        image.setAttribute("src",element.avatar)
        let brand=document.createElement("p")
        brand.innerText=element.name
        let price=document.createElement("span")
        price.innerText= element.price
        let size=document.createElement("span")
        size.innerText=element.size
        let Categorys=document.createElement("p")
        Categorys.innerText=element.type
       let inc=document.createElement("button")
       inc.innerText="+"
       let qty=document.createElement("span")
       qty.innerText=element.quantity
       let decriment=document.createElement("button")
       decriment.innerText="-"
       let remove=document.createElement("button")
       remove.innerText="Remove"
       
       remove.addEventListener("click",()=>{
       

        data.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(data))
        displayProduct(cartdata)
        total.innerText=""
        
       })
       
       inc.addEventListener("click",()=>{
        
       qty.innerText= Number(qty.innerText)+1
       

       })
       decriment.addEventListener("click",()=>{
        if(Number(qty.innerText)>1){
        qty.innerText= Number(qty.innerText)-1
      }
       })
       
       let MRP=document.getElementById("mrp")
       MRP.innerText= Number(MRP.innerText)+Number(price.innerText)*Number(qty.innerText)
       let discount=document.getElementById("discounta")
       let subtotal=document.getElementById("subtotal")
       subtotal.innerText=Number(mrp.innerText)-Number(discount.innerText)
       
       total.innerText=subtotal.innerText
       datadiv.append(brand,price,Categorys,size,inc,qty,decriment,remove)
       imgdiv.append(image)

        card.append(datadiv,imgdiv)
        

        contaner.append(card)
       
       
       
      })
    }
    
let conti=document.getElementById("conti")

conti.addEventListener("click",()=>{
  let loginstatus=JSON.parse(localStorage.getItem("login"))
  if(loginstatus==true){

    let payments=total.innerText
    localStorage.setItem("amount",JSON.stringify(payments))
    window.location=""
  }else{
    window.location="user-login.html"
  }
})
    