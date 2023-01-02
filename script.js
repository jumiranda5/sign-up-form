"use strict"

let password;
let confirmPassword;

const input_pwd = document.querySelector("#password");
const input_confirm = document.querySelector("#confirm-password");
const error_msg = document.querySelector("#error-msg");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    password = input_pwd.value;
    confirmPassword = input_confirm.value;
    if (password !== confirmPassword) {
        e.preventDefault();
        input_pwd.classList.add("error");
        input_confirm.classList.add("error");
        error_msg.textContent = "Password and confirmation must match."
    }
});

input_pwd.addEventListener("keyup", () => confirmPwdMatch());
input_confirm.addEventListener("keyup", () => confirmPwdMatch());

function confirmPwdMatch() {
    password = input_pwd.value;
    confirmPassword = input_confirm.value;
    if (password === confirmPassword) {
        input_pwd.classList.remove("error");
        input_confirm.classList.remove("error");
        error_msg.textContent = ""
    }
}