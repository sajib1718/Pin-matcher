function getPin() {

    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }


}

function generatePin() {

    const random = Math.round(Math.random() * 10000);
    return random;

}

document.getElementById('generate-pin').addEventListener('click', function () {

    const pin = getPin();
    const displayElement = document.getElementById('display-pin');
    displayElement.value = pin;

})

document.getElementById('calculator').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');
    const previousNumber = typedNumber.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumber.value = '';
        }
        else if (number === '<') {
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumber.value = remainingDigits;

        }
    }
    else {


        const newTypedNumber = previousNumber + number;
        typedNumber.value = newTypedNumber;

    }

})

document.getElementById('verify-pin').addEventListener('click', function () {

    const displayPin = document.getElementById('display-pin');
    const newPin = displayPin.value;

    const typeNumber = document.getElementById('typed-number');
    const typedNumber = typeNumber.value;
    const pinSuccess = document.getElementById('pin-success');
    const pinFail = document.getElementById('pin-fail');

    if (newPin === typedNumber) {

        pinSuccess.style.display = 'block';
        pinFail.style.display = 'none';
    }
    else {

        pinFail.style.display = 'block';
        pinSuccess.style.display = 'none';
    }

})