let username = document.getElementById("username");
let password = document.getElementById("password");
let flag =1;

function validateForm(){
    if(username.value == ""){
        // console.log("username empty");
        document.getElementById("userError").innerHTML = "User Name is Empty";
        flag = 0;
    }
    else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "User Name is Require min 3 char";
        flag = 0;
    }
    else{
        document,getElementById("userError").innerHTML = "";
        flag = 1;
    }
    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is empty"
        flag = 0;
    }
    else{
          document,getElementById("userError").innerHTML = "";
          flag = 1;
    }
    if(flag){
        return true;
    }
    else{
        return false;

    }

    
}
