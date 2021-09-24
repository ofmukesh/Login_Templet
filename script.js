
//on login button click
function login(){
    document.getElementById("passError").hidden = true;
    document.getElementById("userError").hidden = true;
    var name = userName.value;
    var pass = userPass.value;
    var date = new Date(); 
    var time = date.getDate()+ "/" +(date.getMonth()+1) + "/" + date.getFullYear() +" "+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  }

// after login  (! you need to call this function after login )

function logged(){
        var token = Math.random().toString(36).substr(2);// genrating a token uniqe id 
        localStorage.setItem("token",token);
  }

// after login failed 

function loginFail(){
    document.getElementById("passError").hidden = false;//password wrong error
    document.getElementById("userError").hidden = false;// user not registered
}
