/* =====================================================
   KHULA COMMUNITY BAKERY - Main JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

    /* ---------- 1. Mobile Menu Toggle ---------- */
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('open');

            // Change icon between ☰ and ✕
            if (mainNav.classList.contains('open')) {
                menuToggle.textContent = '✕';
                menuToggle.setAttribute('aria-label', 'Close navigation menu');
            } else {
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
            }
        });

        // Close menu when a link is clicked
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mainNav.classList.remove('open');
                menuToggle.textContent = '☰';
                menuToggle.setAttribute('aria-label', 'Open navigation menu');
            });
        });
    }

    /* ---------- 2. Enquiry Form Handling ---------- */
    const enquiryForm = document.getElementById('enquiryForm');
    const formMessage = document.getElementById('formMessage');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const product = document.getElementById('product').value;
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !phone || !product || !message) {
                formMessage.textContent = 'Please fill in all required fields.';
                formMessage.style.color = '#c0392b';
                return;
            }

            formMessage.textContent = 'Thank you, ' + name + '! Your enquiry has been received. We will contact you soon.';
            formMessage.style.color = '#27ae60';

            enquiryForm.reset();
        });
    }

    /* ---------- 3. Contact Form Handling ---------- */
    const contactForm = document.querySelector('.contact-layout form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = contactForm.querySelector('#contactName');
            const emailInput = contactForm.querySelector('#contactEmail');
            const messageInput = contactForm.querySelector('#contactMessage');

            if (nameInput && emailInput && messageInput) {
                const name = nameInput.value.trim();
                const email = emailInput.value.trim();
                const message = messageInput.value.trim();

                if (!name || !email || !message) {
                    alert('Please fill in all fields.');
                    return;
                }

                alert('Thank you, ' + name + '! Your message has been sent. We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

});