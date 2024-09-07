let overlay = document.querySelector('.overlay');
let resultPopup = document.querySelector('.result');
let resultPopupClose = document.querySelector('.fa-circle-xmark');
let calculateButton = document.querySelector('input[type="submit"]');


calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Result Popup
    resultPopup.classList.remove("d-none");
    resultPopup.style.animationName = 'result-popup-appearing';
    overlay.classList.remove("d-none");

    // Height input and conversion
    let optionValue = document.querySelector('select').value;
    let heightInputValue = document.querySelector('#height-input').value;
    let height;
    if (optionValue == "cm") {
        height = Number(heightInputValue / 100);
    } else if (optionValue == "m") {
        height = Number(heightInputValue);
    } else if (optionValue == "inch") {
        height = Number(heightInputValue / 39.37);
    }

    // Weight input
    let weightInputValue = Number(document.querySelector('#weight-input').value);

    // BMI calculation
    let bmi = (weightInputValue / (height * height)).toFixed(2);

    // Result
    let resultTitle = document.querySelector('.result-info h1');
    let resultSuggestionTitle = document.querySelector('.result-info h3');
    let resultSuggestion = document.querySelector('.result-info p');
    resultTitle.textContent = bmi;
    if (bmi < 18.5) {
        resultSuggestionTitle.style.color = '#982B1C';
        resultSuggestionTitle.textContent = 'Underweight';
        resultSuggestion.textContent = 'You are underweight. You should see your doctor.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultSuggestionTitle.style.color = '#BDE8CA';
        resultSuggestionTitle.textContent = 'Normal';
        resultSuggestion.textContent = 'You are in good condition. Keep it up.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultSuggestionTitle.style.color = 'orange';
        resultSuggestionTitle.textContent = 'Overweight';
        resultSuggestion.textContent = 'You are overweight. You must start exercising. And you should see your doctor.';
    } else if (bmi >= 30) {
        resultSuggestionTitle.style.color = '#982B1C';
        resultSuggestionTitle.textContent = 'Obese';
        resultSuggestion.textContent = 'You are obese. You should see your doctor.';
    }

    // Checking if inputs are empty
    if (heightInputValue == "" || weightInputValue == "") {
        document.querySelector('.result-info h2').textContent = "";
        resultTitle.textContent = 'Please Enter Height and Weight';
        resultTitle.style.color = '#982B1C';
        resultSuggestionTitle.textContent = '';
        resultSuggestion.textContent = '';
    } else {
        document.querySelector('.result-info h2').textContent = "Your BMI is";
        resultTitle.style.color = '#ecf0f1';
    }


})

resultPopupClose.addEventListener('click', () => {
    resultPopup.style.animationName = 'result-popup-disappearing';
    overlay.classList.add("d-none");
})