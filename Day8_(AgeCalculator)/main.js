let select = document.querySelectorAll('.select'); // the select button's parent. (with icon)
let option;
let optionArea = document.querySelectorAll('.option-area');
let calculateButton = document.querySelector('.calculate-button button');
let selectedDay, selectedMonth, selectedYear;
let ageDisplay = document.querySelector('.age-display h3');

// Day Select
let daySelect = document.querySelector('.day-select');
let dayOptionArea = document.querySelector('.day-option-area');
let dayOption = document.querySelectorAll('.day-option');
// Month Select
let monthSelect = document.querySelector('.month-select');
let monthOptionArea = document.querySelector('.month-option-area');
let monthOption = document.querySelectorAll('.month-option');
// Year Select
let yearSelect = document.querySelector('.year-select');
let yearOptionArea = document.querySelector('.year-option-area');
let yearOption = document.querySelectorAll('.year-option');

// Current Date
let currentDay = new Date().getDate();
let currentMonth = new Date().getMonth() + 1;
let currentYear = new Date().getFullYear();

// Calculated Age
let ageDay;
let ageMonth;
let ageYear;



// ----------------------------\\
// ---- Option Generations ------\\
// ----------------------------\\

// Generate Day Options
for (let i = 1; i <= 31; i++) {
    let GeneratedOption = document.createElement('div');
    GeneratedOption.classList.add('day-option');
    GeneratedOption.classList.add('option');
    GeneratedOption.innerHTML = i;
    dayOptionArea.appendChild(GeneratedOption);
}
// Generate Month Options
for (let i = 1; i <= 12; i++) {
    let GeneratedOption = document.createElement('div');
    GeneratedOption.classList.add('month-option');
    GeneratedOption.classList.add('option');
    GeneratedOption.innerHTML = i;
    monthOptionArea.appendChild(GeneratedOption);
}
// Generate Year Options
for (let i = currentYear; i >= 1900; i--) {
    let GeneratedOption = document.createElement('div');
    GeneratedOption.classList.add('year-option');
    GeneratedOption.classList.add('option');
    GeneratedOption.innerHTML = i;
    yearOptionArea.appendChild(GeneratedOption);
}



// ----------------------------------------\\
// ---- Option Selection and Display ------\\
// ----------------------------------------\\
select.forEach((select) => {
    select.addEventListener('click', () => {
        selectParent = select.parentElement; // selecting it's parent div to access other divs
        // now select the option-area, selected-text and option which is in the select's parent
        let currentOptionArea = selectParent.querySelector('.option-area');
        let selectedText = selectParent.querySelector('.select span');
        option = selectParent.querySelectorAll('.option');

        // ------- Displaying and Hiding the option area ------- \\
        let computedStyles = getComputedStyle(currentOptionArea); // Get computed styles of optionArea
        // Get display the display property of optionArea (popup)
        let display = computedStyles.getPropertyValue("display");
        if (display == "none") {
            currentOptionArea.style.display = "flex";
        } else {
            setTimeout(() => {
                currentOptionArea.style.display = "none";
            }, 300); // will none the display after the animation time (0.3s >> 300ms)
        }
        // Get appearing and disappearing animation name and set them
        let animationName = computedStyles.getPropertyValue("animation-name");
        if (animationName == "option-area-appearing") {
            currentOptionArea.style.animationName = "option-area-disappearing";
        } else {
            currentOptionArea.style.animationName = "option-area-appearing";
        }

        // Displaying the selected option text
        for (let i = 0; i < option.length; i++) {
            option[i].addEventListener('click', () => {
                selectedText.innerHTML = option[i].innerHTML;
                currentOptionArea.style.animationName = "option-area-disappearing";
                setTimeout(() => {
                    currentOptionArea.style.display = "none";
                }, 300);
            })
        }

        // Removing the other option areas (popups) when another one is clicked
        let anotherSelectionArea = selectParent.parentElement.querySelectorAll(':scope > div');
        anotherSelectionArea.forEach((anotherSelectionArea) => {
            let anotherOptionArea = anotherSelectionArea.querySelector(".option-area"); // this selects the option-area which is in the anotherSelectionArea
            if (anotherSelectionArea != selectParent) {
                anotherOptionArea.style.animationName = "option-area-disappearing";
                setTimeout(() => {
                    anotherOptionArea.style.display = "none";
                }, 300);
            }

        })
    })

})

// ---------------------------------------------\\
// ----------- Calculation of Age --------------\\
// ---------------------------------------------\\
calculateButton.addEventListener('click', () => {

    // Get Text of Selected Day, Month and Year
    selectedDay = document.querySelector('.day-select span').innerHTML;
    selectedMonth = document.querySelector('.month-select span').innerHTML;
    selectedYear = document.querySelector('.year-select span').innerHTML;

    // Function of Calculating Age
    function calculateAge() {
        let ageDay = currentDay - selectedDay;
        let ageMonth = currentMonth - selectedMonth;
        let ageYear = currentYear - selectedYear;

        if (selectedYear == currentYear && (selectedMonth > currentMonth || (selectedMonth == currentMonth && selectedDay > currentDay))) {
            // If the person has not been born yet  
            ageDisplay.innerHTML = "Oops. You haven't been born yet :)";
            return; // return out of the function
        } else if (selectedDay > currentDay || selectedMonth > currentMonth) {
            // Fixing the Negative Age. (when selected day or month is greater than current)
            if (selectedDay > currentDay && selectedMonth > currentMonth) {
                //  if selected day and month both are greater than current day and month
                ageYear = ageYear - 1;
                ageMonth = ageMonth + 11;
                ageDay = ageDay + 30;
            } else {
                // if only someone is greater
                if (selectedDay > currentDay) {
                    // if only selected day is greater than current day
                    ageYear = ageYear - 1;
                    ageMonth = ageMonth + 11;
                    ageDay = ageDay + 30;
                } else {
                    // if only selected month is greater than current month
                    ageYear = ageYear - 1;
                    ageMonth = ageMonth + 12;
                }
            }
        }

        // This Function will fix if the month get's more than 12
        function fixOverFlow() {
            if (ageMonth >= 12) {
                ageMonth = ageMonth - 12;
                ageYear = ageYear + 1;
            }
        }
        function mainCalcAndDisplay() {
            let age = `${ageYear} Years, ${ageMonth} Months, ${ageDay} Days`;
            ageDisplay.innerHTML = age;
        }
        fixOverFlow();
        mainCalcAndDisplay();
    }


    // Check if all the fields are correctly selected and then calculate the age

    if (selectedDay == "Select Day" || selectedMonth == "Select Month" || selectedYear == "Select Year") {
        // if any of the fields are not selected
        ageDisplay.innerHTML = "Please select all the options";
    } else if (selectedDay == 31 && (selectedMonth == 4 || selectedMonth == 6 || selectedMonth == 9 || selectedMonth == 11)) {
        // if the month has only 30 days
        ageDisplay.innerHTML = "Oops. This month has only 30 days";
    } else if ((selectedDay == 29 || selectedDay == 30 || selectedDay == 31) && selectedMonth == 2) {
        // Special: check for February and leap year
        if (selectedYear % 4 == 0 && selectedDay == 30 || selectedDay == 31) {
            ageDisplay.innerHTML = "This is a leap year. So February has 29 Days";
        } else if (selectedYear % 4 != 0 && (selectedDay == 29 || selectedDay == 30 || selectedDay == 31)) {
            ageDisplay.innerHTML = "This is not a leap year. So February has 28 Days";
        } else {
            calculateAge();
        }
    }
    else {
        calculateAge();
    }
})