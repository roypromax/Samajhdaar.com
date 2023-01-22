// login functionality

let myForm = document.getElementById("login");

myForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    loginFunction();   
})



// creating login function

function loginFunction(){

    if(myForm.username.value == "" || myForm.password.value == ""){
        alert("Please enter details")
    }else if(myForm.username.value == "admin" && myForm.password.value == "admin"){
        window.location = "Admin.html";
    }else{

        let userArr = JSON.parse(localStorage.getItem("users")) || [];

        let login = JSON.parse(localStorage.getItem("login")) ;

        let user = false;


        for(let i=0; i<=userArr.length-1; i++){
            if(myForm.username.value == userArr[i].username){
    
                user = true;
                
                if(myForm.password.value == userArr[i].password){
                    login = true;
                    localStorage.setItem("login",login);
                    

                    alert("Welcome Back");

                    window.location = "cart.html"
                }else{
                    alert("Please enter correct credentials");
                }
            }
        }


        if(user == false){
            
            let obj = {
                "username" : myForm.username.value,
                "password" : myForm.password.value
            }
        
            userArr.push(obj);
        
            localStorage.setItem("users",JSON.stringify(userArr));

            alert("You have been signed up");

            login = true;
            localStorage.setItem("login",login);
        
            window.location = "cart.html";
        
        }

        



    }

}

