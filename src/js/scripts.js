// This file contains JavaScript code for interactive elements of the homepage.

document.addEventListener('DOMContentLoaded', function () {
    // Toggle navigation bar on mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });

    // Example of modal functionality
    const modalTrigger = document.querySelector('[data-toggle="modal"]');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');

    if (modalTrigger) {
        modalTrigger.addEventListener('click', function () {
            modal.classList.add('show');
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', function () {
            modal.classList.remove('show');
        });
    }
});