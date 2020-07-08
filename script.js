const digits = document.querySelectorAll('ul');
const calling = document.querySelector('.calling');


digits.forEach(digit => {
    digit.addEventListener('click', e => {
        e.preventDefault();
        // console.log(e.target.value);
        document.getElementById('phoneNo').value += e.target.value;
    })
})


document.getElementById("button_green").addEventListener("click", validatePhoneNumber);

function validatePhoneNumber() {
    const phoneNumber = document.getElementById("phoneNo").value;
    const phoneRGEX = /^09([0-9]{6,8})$/;
    const phoneResult = phoneRGEX.test(phoneNumber);
    if (phoneResult == false) {
        alert('Please enter a valid phone number');
    } else {
        calling.textContent = 'Calling...';
    }
}