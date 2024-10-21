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
    const toggleBtns = document.querySelectorAll(".button-text");

    toggleBtns.forEach((button) => {
        button.addEventListener("click", function() {
            const abstract = this.parentElement.nextElementSibling; // Select the related abstract
            const icon = this.querySelector("i");

            abstract.classList.toggle('open'); // Toggle the abstract's visibility
            const isOpen = abstract.classList.contains('open');
            
            // Change icon based on whether the text is expanded or collapsed
            icon.classList = isOpen
                ? 'fa-solid fa-caret-down'
                : 'fa-solid fa-caret-right';
        });
    });
});
