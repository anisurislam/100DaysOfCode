let middleButton = document.querySelector('.middle-button');
let popups = document.querySelectorAll('.popup');

function popupDisplay(displayValue) {
    for (let i = 0; i < popups.length; i++) {
        const element = popups[i];
        element.style.display = `${displayValue}`;

    }
}
popupDisplay("none")
middleButton.addEventListener('click', () => {
    if (middleButton.textContent == "Show Dialogue") {
        middleButton.textContent = "Hide Dialogue"
    } else {
        middleButton.textContent = "Show Dialogue"
    }

    popupDisplay("block")


    // For Nije Nije 0
    let nijeNije = document.querySelector('.nije-nije');
    let nijeNijeStyle = window.getComputedStyle(nijeNije, null);
    let nijeNijeAnimation = nijeNijeStyle.getPropertyValue("animation-name")
    if (nijeNijeAnimation == "nije-nije-disappearing") {
        nijeNije.style.animationName = "nije-nije-appearing"
    } else {
        nijeNije.style.animationName = "nije-nije-disappearing"
    }

    // For Oi Mama 
    let oiMama = document.querySelector('.oi-mama');
    let oiMamaStyle = window.getComputedStyle(oiMama, null);
    let oiMamaAnimation = oiMamaStyle.getPropertyValue("animation-name")
    if (oiMamaAnimation == "oi-mama-disappearing") {
        oiMama.style.animationName = "oi-mama-appearing"
    } else {
        oiMama.style.animationName = "oi-mama-disappearing"
    }

    // For Nice and Attractive 
    let niceAndAttractive = document.querySelector('.nice-and-attractive');
    let niceAndAttractiveStyle = window.getComputedStyle(niceAndAttractive, null);
    let niceAndAttractiveAnimation = niceAndAttractiveStyle.getPropertyValue("animation-name")
    if (niceAndAttractiveAnimation == "nice-and-attractive-disappearing") {
        niceAndAttractive.style.animationName = "nice-and-attractive-appearing"
    } else {
        niceAndAttractive.style.animationName = "nice-and-attractive-disappearing"
    }
    // For Natok Kom
    let natokKom = document.querySelector('.natok-kom');
    let natokKomStyle = window.getComputedStyle(natokKom, null);
    let natokKomAnimation = natokKomStyle.getPropertyValue("animation-name")
    if (natokKomAnimation == "natok-kom-disappearing") {
        natokKom.style.animationName = "natok-kom-appearing"
    } else {
        natokKom.style.animationName = "natok-kom-disappearing"
    }
    // For She has
    let sheHas = document.querySelector('.she-has');
    let sheHasStyle = window.getComputedStyle(sheHas, null);
    let sheHasAnimation = sheHasStyle.getPropertyValue("animation-name")
    if (sheHasAnimation == "she-has-disappearing") {
        sheHas.style.animationName = "she-has-appearing"
    } else {
        sheHas.style.animationName = "she-has-disappearing"
    }
    // For Sojon Harano
    let sojonHarano = document.querySelector('.sojon-harano');
    let sojonHaranoStyle = window.getComputedStyle(sojonHarano, null);
    let sojonHaranoAnimation = sojonHaranoStyle.getPropertyValue("animation-name")
    if (sojonHaranoAnimation == "sojon-harano-disappearing") {
        sojonHarano.style.animationName = "sojon-harano-appearing"
    } else {
        sojonHarano.style.animationName = "sojon-harano-disappearing"
    }
    // For Murubbi
    let murubbi = document.querySelector('.murubbi');
    let murubbiStyle = window.getComputedStyle(murubbi, null);
    let murubbiAnimation = murubbiStyle.getPropertyValue("animation-name")
    if (murubbiAnimation == "murubbi-disappearing") {
        murubbi.style.animationName = "murubbi-appearing"
    } else {
        murubbi.style.animationName = "murubbi-disappearing"
    }
    // For hasina kokhono
    let hasinaKokhono = document.querySelector('.hasina-kokhono');
    let hasinaKokhonoStyle = window.getComputedStyle(hasinaKokhono, null);
    let hasinaKokhonoAnimation = hasinaKokhonoStyle.getPropertyValue("animation-name")
    if (hasinaKokhonoAnimation == "hasina-kokhono-disappearing") {
        hasinaKokhono.style.animationName = "hasina-kokhono-appearing"
    } else {
        hasinaKokhono.style.animationName = "hasina-kokhono-disappearing"
    }
})