
var InputName=document.getElementById("signInputName");
var InputEmail=document.getElementById("signInputEmail");
var InputPassword=document.getElementById("signInputPassword");
var signUpBtn=document.getElementById("signUpBtn");
var unavailableAccountMsg=document.getElementsByClassName("lead");
var alertBox=document.getElementById("alert");
 var flag=false;
//console.log(unavailableAccountMsg);

var usersAccounts=[];
if(localStorage.getItem("USERS")!=null){
    usersAccounts = JSON.parse(localStorage.getItem("USERS"));
}
//console.log(usersAccounts);


//validation
InputName.addEventListener("input",function(){
       validation('signInputName');  
}) 
InputEmail.addEventListener("input",function(){
       validation('signInputEmail');  
}) 
InputPassword.addEventListener("input",function(){//error
       validation('signInputPassword');  
}) 


function validation(id){
    var myString=document.getElementById(id).value;  
    var regex={
        signInputName:/^[a-zA-z][a-zA-z ]{2,30}$/,
        signInputEmail:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        //signInputPassword:"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$",
        signInputPassword:"^[a-zA-z1-9 ]{8,30}$",
    }

    if(id=="signInputPassword"){
        //console.log(myString);
        if(myString.match(regex.signInputPassword)){
            document.getElementById(id).classList.add("is-valid");
            document.getElementById(id).classList.remove("is-invalid");
            return true;
        }
        else{
            document.getElementById(id).classList.remove("is-valid");
            document.getElementById(id).classList.add("is-invalid");
            return false;
        }
    }
    else{
         if(regex[id].test(myString))
        {
            document.getElementById(id).classList.add("is-valid");
            document.getElementById(id).classList.remove("is-invalid");
            return true;
        }
        else{
            document.getElementById(id).classList.remove("is-valid");
            document.getElementById(id).classList.add("is-invalid");
            return false;
        }
    }
}


//add user account
signUpBtn.addEventListener("click",function(){
    add();
})

 function add(){
   flag=false;
   if(validation('signInputName')&&validation('signInputEmail') && validation('signInputPassword'))
   {
        var user={
           name:InputName.value,   
           email:InputEmail.value,
           password:InputPassword.value,
       }
       repeat(user.name,user.email,user.password);
        if(flag==true){
           unavailableAccountMsg[0].classList.remove("d-none");
           clear();
        }
        else{
           
           unavailableAccountMsg[0].classList.add("d-none");
           usersAccounts.push(user);
           setForLocalStorage();
           clear(); 
           window.open("index.html","_self");
        }
   }else{
      alertBox.classList.remove("d-none");
      unavailableAccountMsg[0].classList.add("d-none");
   }
}

//local storage
function setForLocalStorage(){
    localStorage.setItem("USERS",JSON.stringify(usersAccounts));
}

//clear
function clear(){
    InputName.value=null;
    InputEmail.value=null;
    InputPassword.value=null;
    InputName.classList.remove("is-valid");
    InputEmail.classList.remove("is-valid");
    InputPassword.classList.remove("is-valid");
    alertBox.classList.add("d-none");
}


//user repeat
function repeat(user,email,password){

       for(var i=0;i<usersAccounts.length;i++) {
          if(usersAccounts[i].name==user || usersAccounts[i].email ==email || usersAccounts[i].password ==password )
          {
             flag=true;
          }
       }
}











 