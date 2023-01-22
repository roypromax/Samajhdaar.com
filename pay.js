// Show/hide card details based on payment method selection
document.querySelector("#payment-method").addEventListener("change", function() {
    if (this.value === "card") {
      document.querySelector("#card-details").style.display = "block";
    } else {
      document.querySelector("#card-details").style.display = "none";
    }
  });
  
  // Form submission event listener
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form from submitting
  
    // Get form data
    var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var address = document.querySelector("#address").value;
  var paymentMethod = document.querySelector("#payment-method").value;
  var cardNumber = document.querySelector("#card-number").value;
  var expirationDate = document.querySelector("#expiration-date").value;
  var cvv = document.querySelector("#cvv").value;

  
  // Validate form data
  if (name == "" || email == "" || address == "" || paymentMethod == "" || amount == "") {
  alert("Please fill out all fields.");
  return;
  }
  
  if (paymentMethod == "card" && (cardNumber == "" || expirationDate == "" || cvv == "")) {
  alert("Please fill out all card details.");
  return;
  }
  
  // Update order summary
  document.querySelector("#summary-name").textContent = name;
  document.querySelector("#summary-email").textContent = email;
  document.querySelector("#summary-address").textContent = address;
  document.querySelector("#summary-payment-method").textContent = paymentMethod;
  if (paymentMethod == "card") {
  document.querySelector("#summary-card-details").style.display = "block";
  document.querySelector("#summary-card-number").textContent = cardNumber;
  document.querySelector("#summary-expiration-date").textContent = expirationDate;
  document.querySelector("#summary-cvv").textContent = cvv;
  } else {
  document.querySelector("#summary-card-details").style.display = "none";
  }
  document.querySelector("#summary-amount").textContent = "₹"+total;
  });

  var amount = document.querySelector("#amount");
  let total = JSON.parse(localStorage.getItem("amount"))
  window.addEventListener("load", (event) => {
    amount.innerText=total;
  });
  window.addEventListener("submit", (event) => {
    event.preventDefault();
    setTimeout(() => {
        alert("Payment successful");
        event.target.submit();
        window.location="index.html";
    }, 2000);
});
  