let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let calculateButton = document.querySelector(".calculate-button input[type='submit']");
let result = document.querySelector(".result-area h3");
let inputInMS, currentInMS, diffInMS;

// Calclating after clicking on calculate button
calculateButton.addEventListener('click', (event) => {
    event.preventDefault();
    // getting the values from the input fields
    let day = dayInput.value;
    let month = monthInput.value;
    let year = yearInput.value;

    // converting the date into milliseconds and gettings age in miliseconds
    if (day == '' || month == '' || year == '') {
        // checking if the input fields are empty
        result.innerHTML = 'Please fill in all the fields.'
    } else {
        inputInMS = new Date(year, month - 1, day).getTime();
        currentInMS = new Date().getTime();
        ageInMS = currentInMS - inputInMS;
    }

    // converting milliseconds (age) to days, months and years
    let ageDays = Math.floor(ageInMS / 1000 / 60 / 60 / 24);
    let ageMonths = Math.floor(ageDays / 30);
    let ageYears = Math.floor(ageMonths / 12);
    calculate()

    // function to calculate
    function calculate() {
        if (ageInMS < 0 || day > 31 || month > 12 || year > new Date().getFullYear() || year < 1000) {
            result.innerHTML = 'Please enter a valid date.';
        } else {
            result.innerHTML = `You are ${ageYears} years, ${ageMonths % 12} months and ${ageDays % 30} days old.`
        }
    }
})