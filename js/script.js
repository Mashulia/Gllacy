//popup 

const feedbackButton = document.querySelector('.address-button');
const popup = document.querySelector('.feedback-popup');
const feedbackClose = popup.querySelector('.feedback-close');
const overlay = document.querySelector('.overlay');
const fieldName = popup.querySelector('[name=name]');
const fieldEmail = popup.querySelector('[name=email]');
const fieldText = popup.querySelector('[name=text]');
const form = popup.querySelector('.feedback-form');
let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try {
    storageName = localStorage.getItem('name');
    storageEmail = localStorage.getItem('email');
} catch (err) {
    isStorageSupport = false;
}

feedbackButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('feedback-show');
    overlay.classList.add('overlay-show');
    if (storageName) {
        fieldName.value = storageName;
        fieldEmail.focus();
    } else
    if (storageName && storageEmail) {
        fieldName.value = storageName;
        fieldEmail.value = storageEmail;
        fieldText.focus();
    } else {
        fieldName.focus();
    }
});

feedbackClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('feedback-show');
    overlay.classList.remove('overlay-show');
    if (popup.classList.contains('feedback-error')) {
        popup.classList.remove('feedback-error');
    }
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyKode === 27) {
        if (popup.classList.contains('feedback-show')) {
            evt.preventDefault();
            popup.classList.remove('feedback-show');
            overlay.classList.remove('overlay-show');
            if (popup.classList.contains('feedback-error')) {
                popup.classList.remove('feedback-error');
            }
        }
    }
});

overlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('feedback-show');
    overlay.classList.remove('overlay-show');
});

form.addEventListener('submit', function (evt) {
    if (!fieldName.value || !fieldEmail.value || !fieldText.value) {
        evt.preventDefault();
        popup.classList.remove('feedback-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('feedback-error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem('name', fieldName.value);
            localStorage.setItem('email', fieldEmail.value);
        }
    }
});

// slider

// let slideIndex = 1;
// const indexBody = document.querySelector('.index-page');
// const slideItems = document.querySelectorAll('.special-offer-item');
// const controlButtons = document.querySelectorAll('.control-item');

// const changeSlide = function (slideItems, controlButtons, index) {
//     for (let i = 0; i < slideItems.length; i++) {
//         if (slideItems[i].classList.contains('special-offer-control-current')) {
//             slideItems[i].classList.remove('special-offer-control-current');
//         }
//         slideItems[index].classList.add('special-offer-control-current');

//         for (let j = 0; j < controlButtons.length; j++) {
//             if (controlButtons[j].classList.contains('control-control-current')) {
//                 controlButtons[j].classList.remove('control-control-current');
//             }
//         }
//         controlButtons[index].classList.add('control-control-current');
//     }
// };

// changeSlide();

const indexBody = document.querySelector(".index-page");
const indexBodyFirst = document.querySelector(".index-background-1");
const indexBodySecond = document.querySelector(".index-background-2");
const indexBodyThird = document.querySelector(".index-background-3");
const controlFirst = document.querySelector(".control-item-1");
const controlSecond = document.querySelector(".control-item-2");
const controlThird = document.querySelector(".control-item-3");
const currentButton = document.querySelector(".control-current");
const slideFirst = document.querySelector(".special-offer-item-1");
const slideSecond = document.querySelector(".special-offer-item-2");
const slideThird = document.querySelector(".special-offer-item-3");
const currentItem = document.querySelector(".special-offer-current");

controlFirst.addEventListener("click", function () {
    document.querySelector(".control-current").classList.remove("control-current");
    controlFirst.classList.add("control-current");
    indexBody.classList.remove("index-background-2");
    indexBody.classList.remove("index-background-3");
    indexBody.classList.add("index-background-1");
    document.querySelector(".special-offer-current").classList.remove("special-offer-current");
    slideFirst.classList.add("special-offer-current");

});
controlSecond.addEventListener("click", function () {
    document.querySelector(".control-current").classList.remove("control-current");
    controlSecond.classList.add("control-current");
    indexBody.classList.remove("index-background-1");
    indexBody.classList.remove("index-background-3");
    indexBody.classList.add("index-background-2");
    document.querySelector(".special-offer-current").classList.remove("special-offer-current");
    slideSecond.classList.add("special-offer-current");
});
controlThird.addEventListener("click", function () {
    document.querySelector(".control-current").classList.remove("control-current");
    controlThird.classList.add("control-current");
    indexBody.classList.remove("index-background-1");
    indexBody.classList.remove("index-background-2");
    indexBody.classList.add("index-background-3");
    document.querySelector(".special-offer-current").classList.remove("special-offer-current");
    slideThird.classList.add("special-offer-current");
});