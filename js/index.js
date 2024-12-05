
var InputEmail=document.getElementById("signInputEmail");
var InputPassword=document.getElementById("signInputPassword");
var signInBtn=document.getElementById("signInBtn");
var msg=document.getElementById("incorrectAccount");

// console.log(InputEmail);
// console.log(InputPassword);
var Accounts=[];
if(localStorage.getItem("USERS")!=null){
    Accounts = JSON.parse(localStorage.getItem("USERS"));
}
// console.log(Accounts);

signInBtn.addEventListener("click",function(){
    searchUser()
})

function searchUser(){
   
  for(var i=0;i<Accounts.length;i++){
    // console.log(Accounts[i].password);
    // console.log(Accounts[i].email);
    if(Accounts[i].email == InputEmail.value && Accounts[i].password == InputPassword.value )
    { 
        localStorage.setItem("user Name", Accounts[i].name)
        window.open("welcome.html","_self");
    }
  }

  if(localStorage.getItem("user Name")==null){
    msg.classList.remove("d-none");
  }
}