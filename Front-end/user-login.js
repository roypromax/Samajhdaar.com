// login functionality

let myForm = document.getElementById("login");

myForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(myForm.username.value == "" || myForm.password.value == ""){
        alert("Please enter details")
    }else if(myForm.username.value == "admin" && myForm.password.value == "admin"){
        window.location = "../Backend/fashionfuion/fashionfuion/Admin.html";
    }
})

