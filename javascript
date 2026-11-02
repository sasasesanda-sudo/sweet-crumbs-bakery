function validateForm(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
if(name==""){alert("Name must be filled");return false;}
if(!email.includes("@")){alert("Valid email required");return false;}
alert("Thank you! Your order was received");
return true;
}
