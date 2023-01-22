



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
        let price=document.createElement("p")
        price.innerText= element.price;
        let size=document.createElement("p")
        size.innerText=element.size
        // let Categorys=document.createElement("p")
        // Categorys.innerText=element.type
       let inc=document.createElement("button")
       inc.innerText="+"
       let qty=document.createElement("span")
       qty.innerText=element.quantity
       let decriment=document.createElement("button")
       decriment.innerText="-"
       let remove=document.createElement("button")
       remove.setAttribute("class","rvbtn")
       remove.innerText="Remove"
       
       remove.addEventListener("click",()=>{
       
        
        
        data.splice(index,1)
        localStorage.setItem("cart",JSON.stringify(data))
        displayProduct(cartItems)
        MRP.innerText=Number(MRP.innerText)-Number(price.innerText)
        MRP.innerText=Math.floor(Number(MRP.innerText))
        subtotal.innerText=MRP.innerText
        total.innerText=subtotal.innerText
       })
       
       inc.addEventListener("click",()=>{
        
       qty.innerText= Number(qty.innerText)+1
      // MRP.innerText=Number(MRP.innerText)-Number(price.innerText)
       MRP.innerText=Number(MRP.innerText)+Number(price.innerText)
       MRP.innerText=Math.floor(Number(MRP.innerText))
       //MRP.innerText=Number(MRP.innerText)+Number(price.innerText)
        subtotal.innerText=MRP.innerText
        total.innerText=subtotal.innerText

       })
       decriment.addEventListener("click",()=>{
        if(Number(qty.innerText)>1){
         

        qty.innerText= Number(qty.innerText)-1
        MRP.innerText=Number(MRP.innerText)-Number(price.innerText)
        MRP.innerText=Math.floor(Number(MRP.innerText))
        subtotal.innerText=MRP.innerText
        total.innerText=subtotal.innerText
      }
       })
       
       let MRP=document.getElementById("mrp")
       MRP.innerText= Number(MRP.innerText)+Number(price.innerText)
       MRP.innerText=Math.floor(Number(MRP.innerText))
       
       
       let subtotal=document.getElementById("subtotal")
       subtotal.innerText=Number(MRP.innerText)
       
       total.innerText=subtotal.innerText
       datadiv.append(brand,price,size,inc,qty,decriment,remove)
       imgdiv.append(image)

        card.append(datadiv,imgdiv)
        

        contaner.append(card)
       
       
       
      })
    }
    
let conti=document.getElementById("conti")

conti.addEventListener("click",()=>{
  let loginstatus=JSON.parse(localStorage.getItem("login"))
  console.log(loginstatus)
  if(loginstatus==true){

    let payments=total.innerText
    localStorage.setItem("amount",JSON.stringify(payments))
    cartItems=[]
    localStorage.setItem("cart",JSON.stringify(cartItems))
    window.location="pay.html"
    
  }else{
    window.location="user-login.html"
  }
})
    