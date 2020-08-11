const digits = document.querySelectorAll('.digit');
let message = document.querySelector('.message');
document.getElementById("button_green").addEventListener("click", validatePhoneNumber);
document.getElementById("button_green").addEventListener("click", emptyInput);
document.getElementById("button_red").addEventListener("click", clearAll);

// phone section
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
    let message_first = document.getElementById('message_first');
    let message_second = document.getElementById('message_second');
    let message_third = document.getElementById('message_third');
    let message_fourth = document.getElementById('message_fourth');
    let phoneInput = document.getElementById("phoneNo");
    phoneInput.value = "";
    message.innerHTML = "";
    message_first.style.visibility = "hidden";
    message_second.style.visibility = "hidden";
    message_third.style.visibility = "hidden";
    message_fourth.style.visibility = "hidden";
}


// if a user swiftly presses the green button two times in a row a list of successful calls is shown on cellphone screen
let ul = document.querySelector('.numberbox');
let green_btn = document.getElementById("button_green");
green_btn.addEventListener('dblclick', () => {
    ul.innerHTML = JSON.parse(localStorage.getItem('successCalls'));

    let listOfSuccesCalls = JSON.parse(localStorage.getItem('successCalls'));
    let html = ``;
    listOfSuccesCalls.forEach(successCalls => {
        html += `<li style="color: white">${successCalls}</li>`;
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
        html += `<li style="color:white,padding-left:10px">${unsuccessCalls}</li>`;
    });
    ul.innerHTML = html;
})


// help section
// when the page opens only the first message("Help!") is visible
document.getElementsByTagName("BODY")[0].onpageshow = function () { myFunction() };
function myFunction() {
    document.getElementById("help_button").innerHTML = "Help!";
};

//when a user clicks "Help!" message other messages are made visible one by one with 2 seconds delay between them being displayed

//first toogle help button
function toggle_visibility(messages) {
    var e = document.getElementById(messages);
    if (e.style.display === 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

let help_button = document.getElementById("help_button");
document.getElementById("help_button").addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById("message_first").style.visibility = "visible";
    }, 2000);
    setTimeout(() => {
        document.getElementById("message_second").style.visibility = "visible";
    }, 4000);
    setTimeout(() => {
        document.getElementById("message_third").style.visibility = "visible";
    }, 6000);

    setTimeout(() => {
        document.getElementById("message_fourth").style.visibility = "visible";
    }, 8000)
})

// show real time on phone
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
        h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}