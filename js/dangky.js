
function check (){
    var  user  = document.getElementById("user").value;
    var  pass  = document.getElementById("pass").value;
    var  email = document.getElementById("email").value;
    if (!user || !pass || !email) { 
    alert("Vui lòng nhập đầy đủ thông tin");
    }else {
         if(checkuser() && checkpass()&& checkemail()){
            local();
         }
    }
}

function checkuser(){
    var  user  = document.getElementById("user").value;

    var rg = /[A-Za-z]{3,}/ ; 
    if(!rg.test(user)){
        alert("Username từ 3 kí tự");
        return false ;
    }else {
       
        return true;
    }
}
function checkpass(){
    var  pass  = document.getElementById("pass").value;
  
    var rg = /[A-Za-z]{3,}/ ; 
    if(!rg.test(pass)){
        alert("Pass từ 3 kí tự");
        return false ;
    }else {
       
        return true;
    }
}
function checkemail(){
    var  email  = document.getElementById("email").value;
  
    var rg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ; 
    if(!rg.test(email)){
        alert("Chưa đúng định dạng email");
        return false ;
    }else {
       
        return true;
    }
}

function local(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var email = document.getElementById("email").value;

   
    var acc = {
      username: username,
      password: password,
      email: email
    };


    var accountInfoJSON = JSON.stringify(acc);

  
    localStorage.setItem("acc", accountInfoJSON);

    // alert("Thông tin tài khoản đã được lưu vào local storage.");
    window.location = "dangnhap.html" ;
}



$(document).ready(function(){
    document.getElementById("submit").addEventListener("click", function() {
       check();
    });
    



    
    
})
