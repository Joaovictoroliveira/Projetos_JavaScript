let btn = document.querySelector(".btn-submit");

function validaCampos() {
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirm_password = document.querySelector("#confirm-password");

    let vm_username = document.querySelector(".vm-username");
    let vm_email = document.querySelector(".vm-email");
    let vm_password = document.querySelector(".vm-password");
    let vm_confirm_password = document.querySelector(".vm-confirm-password");

    if(username.value == null || username.value == '' || username.value.length <= 3) {
        username.style.border = '2px solid red';
        vm_username.style.display='block';
    } else {
        username.style.border = '2px solid green';
        vm_username.style.display='none';
    }

    if(email.value == null || email.value == '' || email.value.length <= 3) {
        email.style.border = '2px solid red';
        vm_email.style.display='block';
    } else {
        email.style.border = '2px solid green';
        vm_email.style.display='none';
    }

    if(password.value == null || password.value == '' || password.value.length <= 3) {
        password.style.border = '2px solid red';
        vm_password.style.display='block';
    } else {
        password.style.border = '2px solid green';
        vm_password.style.display='none';
    }

    if(confirm_password.value == null || confirm_password.value == '' || confirm_password.value.length <= 3) {
        confirm_password.style.border = '2px solid red';
        vm_confirm_password.style.display='block';
    } else {
        confirm_password.style.border = '2px solid green';
        vm_confirm_password.style.display='none';
    }
}


btn.addEventListener('click', validaCampos);
