
function check (){
    var  user  = document.getElementById("user").value;
    var  pass  = document.getElementById("pass").value;
    if (!user || !pass) { 
    alert("Vui lòng nhập đầy đủ thông tin");
    }else {
         if(checkuser()){
            // local();
         }
    }
}

function checkuser(){
   
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    var storedAccountInfo = localStorage.getItem("accountInfo");
    if (storedAccountInfo) {
        var accountInfo = JSON.parse(storedAccountInfo);
        if (username === accountInfo.username && password === accountInfo.password) {
           
            window.location ="web2.html" ;
           
          } else {
           
            alert("Tên đăng nhập hoặc mật khẩu không đúng.");
          }
        } else {
          alert("Không tìm thấy thông tin tài khoản.");
        }
    
}

// function local(){
//     var username = document.getElementById("user").value;
//     var password = document.getElementById("pass").value;

   
//     var accountInfo = {
//       username: username,
//       password: password
//     };


//     var accountInfoJSON = JSON.stringify(accountInfo);

  
//     localStorage.setItem("accountInfo", accountInfoJSON);

//     // alert("Thông tin tài khoản đã được lưu vào local storage.");
//     window.location = "web2.html";
// }



$(document).ready(function(){
    document.getElementById("submit").addEventListener("click", function() {
       check();
    });
    



    
    
})
