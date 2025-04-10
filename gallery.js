document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");

    // Lazy Loading
    const lazyLoad = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bgImage = entry.target.getAttribute("data-src");
                entry.target.style.backgroundImage = `url('${bgImage}')`;
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: "100px",
        threshold: 0.1
    });

    galleryItems.forEach((item) => {
        observer.observe(item);
    });

    // Hover Effect - Slight zoom
    galleryItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
            item.style.transition = "transform 0.3s ease-in-out";
        });

        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Lightbox Feature - Open full-screen image
    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const imageUrl = item.style.backgroundImage.slice(5, -2); // Extracts URL from background-image
            openLightbox(imageUrl);
        });
    });

    function openLightbox(imageUrl) {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close">&times;</span>
                <img src="${imageUrl}" alt="Gallery Image">
            </div>
        `;
        document.body.appendChild(lightbox);

        // Close Lightbox
        lightbox.addEventListener("click", (e) => {
            if (e.target.classList.contains("close") || e.target === lightbox) {
                lightbox.remove();
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    // Open lightbox with clicked image
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            currentIndex = index;
            showImage(currentIndex);
            lightbox.classList.add("active"); 
            lightbox.style.display = "flex";
        });
    });

    // Show image in lightbox
    function showImage(index) {
        let imgUrl = galleryItems[index].getAttribute("data-src");
        lightboxImg.src = imgUrl;
    }

    // Change image on arrow click
    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1; // Loop to last image
        } else if (currentIndex >= galleryItems.length) {
            currentIndex = 0; // Loop to first image
        }
        showImage(currentIndex);
    }

    prevBtn.addEventListener("click", function () {
        changeImage(-1);
    });

    nextBtn.addEventListener("click", function () {
        changeImage(1);
    });

    // Close lightbox when clicking on the close button
    closeBtn.addEventListener("click", function () {
        lightbox.classList.remove("active");
        lightbox.style.display = "none";
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox || e.target === closeBtn) {
            lightbox.classList.remove("active");
            lightbox.style.display = "none";
        }
    });

    // Close lightbox when pressing the Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            lightbox.classList.remove("active");
            lightbox.style.display = "none";
        }
    });
});
