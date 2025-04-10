document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".team-member img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");

            const lightboxImg = document.createElement("img");
            lightboxImg.src = img.src;

            const closeBtn = document.createElement("span");
            closeBtn.innerHTML = "&times;";
            closeBtn.classList.add("close-btn");

            lightbox.appendChild(lightboxImg);
            lightbox.appendChild(closeBtn);
            document.body.appendChild(lightbox);

            setTimeout(() => lightbox.classList.add("show"), 10);

            closeBtn.addEventListener("click", function () {
                lightbox.classList.remove("show");
                setTimeout(() => document.body.removeChild(lightbox), 300);
            });
        });
    });
});
