let container = document.querySelector('.container');
let content = document.querySelector('.content');
let toggleArea = document.querySelector('.toggle-button-area');
let sunIcon = document.querySelector('.sun-icon');
let moonIcon = document.querySelector('.moon-icon');


toggleArea.addEventListener('click', () => {
    if (sunIcon.classList.contains("sun-disappearing")) {
        // SWITCHING FROM DARK TO LIGHT MODE

        // Adjusting Colors
        toggleArea.style.background = "#FFAD60"
        container.style.background = "#F6EACB";
        content.style.background = "#F1D3CE"
        content.style.color = "black";

        // For Sun 
        sunIcon.classList.remove("sun-disappearing")
        sunIcon.classList.add("sun-appearing")

        // For Moon 
        moonIcon.classList.remove("moon-appearing")
        moonIcon.classList.add("moon-disappearing")
    } else {
        // SWITCHING FROM LIGHT TO DARK MODE

        // Adjusting Colors
        toggleArea.style.background = "#180161"
        container.style.background = "#17153B";
        content.style.background = "#433D8B"
        content.style.color = "white";

        // For Sun 
        sunIcon.classList.add("sun-disappearing")
        sunIcon.classList.remove("sun-appearing")

        // For Moon 
        moonIcon.classList.add("moon-appearing")
        moonIcon.classList.remove("moon-disappearing")

    }
})