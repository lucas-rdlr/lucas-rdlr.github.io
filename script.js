// JavaScript for dropdown menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".button-header");
    const toggleBtnIcon = document.querySelector(".button-header i");
    const dropDownMenu = document.querySelector(".dropdown");

    toggleBtn.onclick = function() {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    };
});


document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn2 = document.querySelector(".button-text")
    const toggleBtnIcon2 = document.querySelector(".button-text i")
    const dropDownMenu2 = document.querySelector(".paragraph .text-dd")
    const dropText2 = document.querySelector(".paragraph .text")

    toggleBtn2.onclick = function () {
        dropText2.classList.toggle('close')
        dropDownMenu2.classList.toggle('open')
        const isOpen = dropDownMenu2.classList.contains('open')
        toggleBtnIcon2.classList = isOpen
            ? 'fa-solid fa-caret-down'
            : 'fa-solid fa-caret-right'
    };
});