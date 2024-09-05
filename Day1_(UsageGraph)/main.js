let graph = document.querySelectorAll('.graph');

graph.forEach((element) => {
    element.addEventListener('mouseover', () => {
        let popup = element.nextElementSibling;
        let otherPopup = document.querySelectorAll('.popup');
        otherPopup.forEach((others) => {
            if (others !== popup) {
                others.style.opacity = "0";
            } else {
                popup.style.opacity = "1";
            }
        })
        element.addEventListener('mouseout', () => {
            popup.style.opacity = "0";
        })
    })
})
