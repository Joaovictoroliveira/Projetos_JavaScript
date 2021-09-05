let btn = document.querySelector(".btn-submit");

function validaCampos() {
    validaUsername();
    validaEmail();
    validaPassword();
    validaConfirmPassword();
}

function validaUsername() {
    let username = document.querySelector("#username");
    let vm_username = document.querySelector(".vm-username");

    if(username.value == null || username.value == '' || username.value.length <= 2) {
        username.style.border = '2px solid red';
        vm_username.style.display='block';
    } else {
        username.style.border = '2px solid green';
        vm_username.style.display='none';
    }
}

function validaEmail() {
    let email = document.querySelector("#email");
    let vm_email = document.querySelector(".vm-email");
    let re = /\S+@\S+\.\S+/;

    if(email.value == null || email.value == '') {
        email.style.border = '2px solid red';
        vm_email.style.display='block';
    } else {
        email.style.border = '2px solid green';
        vm_email.style.display='none';
    }
}

function validaPassword() {
    let password = document.querySelector("#password");
    let vm_password = document.querySelector(".vm-password");    

    if(password.value == null || password.value == '' || password.value.length <= 5) {
        password.style.border = '2px solid red';
        vm_password.style.display='block';
    } else {
        password.style.border = '2px solid green';
        vm_password.style.display='none';
    }
}

function validaConfirmPassword() {
    let confirm_password = document.querySelector("#confirm-password");
    let vm_confirm_password = document.querySelector(".vm-confirm-password");
    let password = document.querySelector("#password");

    if(confirm_password.value == null || confirm_password.value == '' || confirm_password.value.length <= 5 || (confirm_password.value != password.value)) {
        confirm_password.style.border = '2px solid red';
        vm_confirm_password.style.display='block';
    } else {
        confirm_password.style.border = '2px solid green';
        vm_confirm_password.style.display='none';
    }
}

btn.addEventListener('click', validaCampos);
