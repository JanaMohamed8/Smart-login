var userName=document.getElementById("UserName");
var logOut=document.getElementById("logoutBtn");

userName.innerHTML=localStorage.getItem("user Name");

logOut.addEventListener("click",function(){
   localStorage.removeItem("user Name"); 
})

