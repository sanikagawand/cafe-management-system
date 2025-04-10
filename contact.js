
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");

    // Button Glow Effect on Hover
    button.addEventListener("mouseover", function () {
        button.style.boxShadow = "0px 0px 15px rgba(255, 215, 0, 0.8)"; // Gold glow effect
        button.style.transition = "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out";
        button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseleave", function () {
        button.style.boxShadow = "none";
        button.style.transform = "scale(1)";
    });

    // Button Click Effect (Ripple Effect)
    button.addEventListener("click", function (event) {
        let x = event.clientX - button.offsetLeft;
        let y = event.clientY - button.offsetTop;

        let ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
