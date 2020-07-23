const digits = document.querySelectorAll('ul');
let message = document.querySelector('.message');
document.getElementById("button_green").addEventListener("click", validatePhoneNumber);
document.getElementById("button_green").addEventListener("click", emptyInput);
document.getElementById("button_red").addEventListener("click", clearAll);


// displaying numbers
digits.forEach(digit => {
    digit.addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('phoneNo').value += e.target.value;
    })
})

// validation upon clicking green button
function validatePhoneNumber() {
    let phoneNumber = document.getElementById("phoneNo").value;
    const phoneRGEX = /^09([0-9]{6,8})$/;
    const phoneResult = phoneRGEX.test(phoneNumber);
    if (phoneResult == false) {
        message.textContent = 'This is not a valid number.';
        storeCallsToLocalStorage("unsuccessCalls");
    } else {
        message.textContent = 'Calling...';
        storeCallsToLocalStorage("successCalls");
    }
}
// fuction for storing sucessful calls
function storeCallsToLocalStorage(callsKey) {
    if (localStorage.getItem(callsKey) === null) {
        calls = [];
    } else {
        calls = JSON.parse(localStorage.getItem(callsKey));
    }
    let phoneNmb = document.getElementById("phoneNo").value;
    calls.push(phoneNmb);
    localStorage.setItem(callsKey, JSON.stringify(calls));
    var calls = JSON.parse(localStorage.getItem(callsKey));
}


// clicking green button when input field is empty / numbers not entered
function emptyInput() {
    let phoneInput = document.getElementById("phoneNo");
    if (phoneInput.value == "") {
        message.textContent = 'Please enter phone number.';
    }
}

// the red button clears cellphone screen
function clearAll() {
    let phoneInput = document.getElementById("phoneNo");
    phoneInput.value = "";
    message.innerHTML = "";
}

// if a user swiftly presses the green button two times in a row a list of successful calls is shown on cellphone screen

let ul = document.querySelector('.numberbox');
let green_btn = document.getElementById("button_green");
green_btn.addEventListener('dblclick', () => {
    ul.innerHTML = JSON.parse(localStorage.getItem('successCalls'));

    let listOfSuccesCalls = JSON.parse(localStorage.getItem('successCalls'));
    let html = ``;
    listOfSuccesCalls.forEach(successCalls => {
        html += `<li style="color: purple">${successCalls}</li>`;
    });
    console.log(html);
    ul.innerHTML = html;
})

// if a user swiftly presses the red button two times in a row a list of unsuccessful calls is shown on cellphone screen

let red_btn = document.getElementById("button_red");
red_btn.addEventListener('dblclick', () => {
    ul.innerHTML = JSON.parse(localStorage.getItem('unsuccessCalls'));

    let listOfUnsuccesCalls = JSON.parse(localStorage.getItem('unsuccessCalls'));
    let html = ``;
    listOfUnsuccesCalls.forEach(unsuccessCalls => {
        html += `<li style="color:darkpurple,padding-left:10px">${unsuccessCalls}</li>`;
    });
    console.log(html);
    ul.innerHTML = html;
})

// help section(chat bubbles)__when the page opens only the first message("Help!") is visible
document.getElementsByTagName("BODY")[0].onpageshow = function () { myFunction() };
function myFunction() {
    document.getElementById("help").innerHTML = "Help!";
};