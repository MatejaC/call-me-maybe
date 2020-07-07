const digits = document.querySelectorAll('ul');

let input = document.querySelector('input');
let screen = document.querySelector('.screen');
const list = document.querySelector('.display');

digits.forEach(digit => {
    digit.addEventListener('click', e => {
        // console.log(e.target.value);
        document.getElementById('tel').value += e.target.value;
    })
})



/* const addDigit = document.querySelector('.screen');
addDigit.addEventListener('submit', e => {
    e.preventDefault();
    const digit = addDigit.add.value;
    console.log(digit);
});



 function addNmb() {
    let x = document.getElementsByClassName('digit').value;
    document.getElementById('screen').innerHTML = x;
}


const addDigit = document.querySelector('ul');
addDigit.addEventListener('click', e => {

    if (e.target.classList.contains('digit')) {
        e.preventDefault;
        const digit = addDigit.add.value;
        console.log(digit);
    } else {
        console.log('oo')
    }
});
  HTMLInputElement.value */