'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
    // Kiểm tra xem elem có giá trị hợp lệ
    if (elem) {
        // Nếu elem là một danh sách các phần tử
        if (elem.length !== undefined) {
            for (let i = 0; i < elem.length; i++) {
                elem[i].addEventListener(type, callback);
            }
        } else {
            // Nếu elem là một phần tử đơn
            elem.addEventListener(type, callback);
        }
    } else {
        console.error("Element is null or undefined.");
    }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});