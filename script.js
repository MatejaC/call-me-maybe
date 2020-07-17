const digits = document.querySelectorAll('ul');
const calling = document.querySelector('.calling');
const numberbox = document.querySelector('.numberbox');
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
    let phoneNumber = document.getElementById("phoneNo").value;
    const phoneRGEX = /^09([0-9]{6,8})$/;
    const phoneResult = phoneRGEX.test(phoneNumber);
    if (phoneResult == false) {
        calling.textContent = 'This is not a valid number.';
    } else {
        calling.textContent = 'Calling...';
    }
    storeCallsToLocalStorage();
}



function storeCallsToLocalStorage() {
    if (localStorage.getItem('calls') === null) {
        calls = [];
    } else {
        calls = JSON.parse(localStorage.getItem('calls'));
    }
    console.log(localStorage);
    let phoneNmb = document.getElementById("phoneNo").value;
    calls.push(phoneNmb);

    localStorage.setItem('calls', JSON.stringify(calls));
    var calls = JSON.parse(localStorage.getItem('calls'));
}




// if a user swiftly presses the green button two times in a row a list of successful calls is shown on cellphone screen 

// document.getElementById("button_green").addEventListener("ondblclick", showValidCalls);
//document.getElementById("numberbox").innerHTML;



// clicking green button when input field is empty / numbers not entered
function emptyInput() {
    let phoneInput = document.getElementById("phoneNo");
    if (phoneInput.value == "") {
        calling.textContent = 'Please enter phone number.';
    }
}


// the red button clears cellphone screen
function clearAll() {
    let phoneInput = document.getElementById("phoneNo");
    phoneInput.value = "";
    calling.innerHTML = "";
}

//Using clear() will clear all local storage.localStorage.clear()