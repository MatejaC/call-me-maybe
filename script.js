const digits = document.querySelectorAll('ul');
const calling = document.querySelector('.calling');
document.getElementById("button_green").addEventListener("click", validatePhoneNumber);
document.getElementById("button_green").addEventListener("click", emptyInput);
document.getElementById("button_red").addEventListener("click", clearAll);


// displaying numbers
digits.forEach(digit => {
    digit.addEventListener('click', e => {
        e.preventDefault();
        // console.log(e.target.value);
        document.getElementById('phoneNo').value += e.target.value;
    })
})


// validation upon clicking green button
function validatePhoneNumber() {
    const phoneNumber = document.getElementById("phoneNo").value;
    const phoneRGEX = /^09([0-9]{6,8})$/;
    const phoneResult = phoneRGEX.test(phoneNumber);
    if (phoneResult == false) {
        calling.textContent = 'This is not a valid number.';
    } else {
        calling.textContent = 'Calling...';
    }
}


// clicking green button when input field is empty / numbers not entered
function emptyInput() {
    const phoneInput = document.getElementById("phoneNo");
    if (phoneInput.value == "") {
        calling.textContent = 'Please enter phone number.';
    }
}


// the red button clears cellphone screen
function clearAll() {
    const phoneInput = document.getElementById("phoneNo");
    phoneInput.value = "";
    calling.innerHTML = "";
}