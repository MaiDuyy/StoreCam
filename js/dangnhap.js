
function check (){
    var  user  = document.getElementById("user").value;
    var  pass  = document.getElementById("pass").value;
    if (!user || !pass) { 
    alert("Vui lòng nhập đầy đủ thông tin");
    }else {

    }
}

function checkuser(){
    var  user  = document.getElementById("user").value;
    var tbuser = document.getElementById("tbUser");
    var rg = /[A-Za-z]{3,}/ ; 
    if(!rg.test(user)){
        tbuser.innerText = "Username từ 3 kí tự"
        return false ;
    }else {
       
        return true;
    }
}



$(document).ready(function(){
 document.getElementById("submit").addEventListener("click" , function(){
 if(check()){
    checkuser ();
 }
 })

 document.getElementById("user").addEventListener("blur" , function(){
       checkuser ();
    }) 
})
