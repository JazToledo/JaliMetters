var NombreUsu=document.getElementById("NombreUsu");
console.log(NombreUsu.value)
var ApellidoPaUsu=document.getElementById("ApellidoPaUsu");
console.log(ApellidoPaUsu.value)
var ApellidoMaUsu=document.getElementById("ApellidoMaUsu");
console.log(ApellidoMaUsu.value)
var EmailUsu=document.getElementById("Email");
console.log(Email.value)
var ContrasenaUsu=document.getElementById("passwd");
console.log(passwd.value)

let regex = /[0-9]/g;
let regex2 = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@([a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+))+$/;


    function checkNombreUsu(NombreUsu) {
        if (regex.test(NombreUsu.value) === true || NombreUsu.value.length == 0 ){
            alert('El nombre es invalido, intentelo de nuevo');
            return false;
        }
        return true;
    }
    function checkApellidoPaUsu(ApellidoPaUsu) {
        if (regex.test(ApellidoPaUsu.value) === true || ApellidoPaUsu.value.length == 0 ){
            alert('El apellido paterno es invalido, intentelo de nuevo');
            return false;
        }
        return true;
    }
    function checkApellidoMaUsu(ApellidoMaUsu) {
        if (regex.test(ApellidoMaUsu.value) === true || ApellidoMaUsu.value.length == 0 ){
            alert('El apellido materno es invalido, intentelo de nuevo');
            return false;
        }
        return true;
    }
    function checkEmail(Email) {
            console.log(regex2.test(Email.value));
        if (regex2.test(Email.value) === false){
            alert('El correo electronico es invalido');
            return false;
        }
            return true;
    }
    function submitData() {
        if (checkNombreUsu(NombreUsu) == false || checkApellidoPaUsu(ApellidoPaUsu) == false  || checkApellidoMaUsu(ApellidoMaUsu) == false || checkEmail(Email) == false || verifyPasswords(passwd) == false ) {
            
            return;}
            alert("Usuario registrado correctamente!");
        };
        

