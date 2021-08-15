function validateForm(){
    let name =document.form1.name.value;
    let uname = document.form1.uname.value;

    if(name == null || name == ""){
        alert("Name hissesini doldur")
        return false;
    }
    else if(name.length < 2){
        alert("Name 2 den kicik ola bilmez");
        return false;
    } 
    else if(name.length > 50){
        alert("Name 50 den boyuk ola bilmez");
        return false;
    } 
    


    if(uname == null || uname == ""){
        alert("Username hissesini doldur")
        return false;
    }
    else if(uname.length < 2){
        alert("Username 2 den kicik ola bilmez");
        return false;
    } 
    else if(uname.length > 50){
        alert("Username 50 den boyuk ola bilmez");
        return false;
    }



    
    
}
function check() {
if(document.getElementById('password').value ===
    document.getElementById('confirm_password').value) {
document.getElementById('message').innerHTML = "";
} else {
document.getElementById('message').innerHTML = "These passwords do not match";
}
}

function ValidateEmail(inputText)
{var mailformat=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f]    )*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|    [a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;if(inputText.value.match(mailformat))
{document.form1.text1.focus();
return true;}
else{
alert("Email adresini dogru yazin");
document.form1.text1.focus();
return false;}
}