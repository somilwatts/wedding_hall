document.addEventListener("DOMContentLoaded", function () {
    // Navbar Dropdown Functionality
    const navItems = document.querySelectorAll(".nav-links li");

    navItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            const dropdown = this.querySelector(".dropdown");
            if (dropdown) {
                dropdown.style.display = "flex";
            }
        });

        item.addEventListener("mouseleave", function () {
            const dropdown = this.querySelector(".dropdown");
            if (dropdown) {
                dropdown.style.display = "none";
            }
        });
    });

    // Navbar Sections - Two Column Layout
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.innerHTML = `
            <div class="dropdown-columns">
                <div class="column dark-pink">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Top Cities</a></li>
                        <li><a href="#">Brand Logo</a></li>
                        <li><a href="#">Customer Reviews</a></li>
                    </ul>
                </div>
                <div class="column light-pink">
                    <h4>By Type</h4>
                    <ul>
                        <li>Banquet Halls</li>
                        <li>Marriage Garden / Lawns</li>
                        <li>Wedding Resorts</li>
                        <li>Small Function / Party Halls</li>
                        <li>Destination Wedding Venues</li>
                        <li>Kalyana Mandapams</li>
                        <li>4 Star & Above Wedding Hotels</li>
                    </ul>
                </div>
            </div>
        `;
    });

    // Image Gallery Functionality - Display 3 images at a time
    const imageWrapper = document.querySelector(".image-wrapper");
    const images = document.querySelectorAll(".image-wrapper img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;
    const imagesPerSlide = 3;

    function updateGallery() {
        const totalImages = images.length;
        images.forEach((img, index) => {
            if (index >= currentIndex && index < currentIndex + imagesPerSlide) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            if (currentIndex + imagesPerSlide < images.length) {
                currentIndex += imagesPerSlide;
            } else {
                currentIndex = 0; // Loop back to start
            }
            updateGallery();
        });

        prevBtn.addEventListener("click", () => {
            if (currentIndex - imagesPerSlide >= 0) {
                currentIndex -= imagesPerSlide;
            } else {
                currentIndex = images.length - imagesPerSlide; // Loop to end
            }
            updateGallery();
        });

        updateGallery(); // Initialize first set of images as visible
    }

    // Booking Form Submission
    const bookingForm = document.querySelector(".booking-form form");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = bookingForm.querySelector("input[type='text']").value.trim();
            const email = bookingForm.querySelector("input[type='email']").value.trim();
            const guests = bookingForm.querySelector("input[type='number']").value.trim();

            if (name && email && guests) {
                alert(`Thank you ${name}, your request has been submitted!`);
                bookingForm.reset();
            } else {
                alert("Please fill all the fields correctly.");
            }
        });
    }

    // Footer Section (Prevents Duplicate Footer)
    if (!document.querySelector("footer")) {
        const footer = document.createElement("footer");
        footer.innerHTML = `
            <div class="footer-layer top-footer">
                <div class="footer-links">
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <div class="footer-layer bottom-footer">
                <p>&copy; 2025 Wedding Planner. All Rights Reserved.</p>
            </div>
            <div class="footer-layer black-footer"></div>
        `;
        document.body.appendChild(footer);
    }
});
