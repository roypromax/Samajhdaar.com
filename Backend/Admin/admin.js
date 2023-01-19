var selectedRow = null
function onFormSubmit(){

}
function readFormData(){
    var formData = {}
    formData["ProductName"]=document.getElementById("ProductName").value
    formData["discription"]=document.getElementById("discription").value
    formData["Price"]=document.getElementById("Price").value
    formData["strikedOffprice"]=document.getElementById("strikedOffprice").value
    formData["qty"]=document.getElementById("qty").value
}