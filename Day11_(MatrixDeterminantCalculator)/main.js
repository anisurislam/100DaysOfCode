let switchButton = document.querySelectorAll('.switcher button');
let det2x2 = document.querySelector('.determinant2x2');
let det3x3 = document.querySelector('.determinant3x3');

let calculateButton = document.querySelector('.calculate-button button');
let resultDisplay = document.querySelector('.result-area h2');


for (let i = 0; i < switchButton.length; i++) {
    const element = switchButton[i];
    element.addEventListener('click', () => {

        if (element.innerHTML == "2x2") {
            det2x2.style.display = "flex";
            det3x3.style.display = "none";
        } else {
            det2x2.style.display = "none";
            det3x3.style.display = "flex";
        }

        for (let j = 0; j < switchButton.length; j++) {
            const anotherElement = switchButton[j];
            if (element == anotherElement) {
                element.classList.remove("disabled")
                anotherElement.classList.add("disabled")
            } else {
                element.classList.add("disabled")
                anotherElement.classList.remove("disabled")
            }
        }
    })
}

calculateButton.addEventListener('click', (e) => {
    e.preventDefault()

    if (det3x3.style.display == "none") {
        calculation2x2()
    } else {
        calculation3x3()
    }
})

function calculation2x2() {
    let a11 = det2x2.querySelector('.a11').value;
    let a12 = det2x2.querySelector('.a12').value;
    let a21 = det2x2.querySelector('.a21').value;
    let a22 = det2x2.querySelector('.a22').value;
    let elements = [a11, a12, a21, a22]
    for (i = 0; i < elements.length; i++) {
        let element = elements[i]
        if (element == "") {
            resultDisplay.innerHTML = "Please Fill All Fields";
            return;
        } else {
            calculate2x2()
        }
    }

    // Calculate 2x2 Function
    function calculate2x2() {
        let determinantValue = (a11*a22)-(a21*a12)
        resultDisplay.innerHTML = "The Value Is: " + " " + determinantValue;
    }
    
}


function calculation3x3() {
    let a11 = det3x3.querySelector('.a11').value;
    let a12 = det3x3.querySelector('.a12').value;
    let a13 = det3x3.querySelector('.a13').value;
    let a21 = det3x3.querySelector('.a21').value;
    let a22 = det3x3.querySelector('.a22').value;
    let a23 = det3x3.querySelector('.a23').value;
    let a31 = det3x3.querySelector('.a31').value;
    let a32 = det3x3.querySelector('.a32').value;
    let a33 = det3x3.querySelector('.a33').value;

    let elements = [a11, a12, a13, a21, a22, a23, a31, a32, a33]
    for (i = 0; i < elements.length; i++) {
        let element = elements[i]
        if (element == "") {
            resultDisplay.innerHTML = "Please Fill All Fields";
            return;
        } else {
            calculate3x3()
        }
    }
    // Calculate 3x3 Function
    function calculate3x3() {
        let determinantValue = (a11 * a22 * a33) - (a11 * a23 * a32) - (a12 * a21 * a33) + (a12 * a23 * a31) + (a13 * a21 * a32) - (a13 * a31 * a22)
        resultDisplay.innerHTML = "The Value Is: " + " " + determinantValue;
    }
}