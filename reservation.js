document.addEventListener("DOMContentLoaded", function () {
    const timeInput = document.getElementById("time");

    // Set minimum and maximum time
    timeInput.min = "09:00";
    timeInput.max = "23:00";

    // Ensure selected time is within the allowed range
    timeInput.addEventListener("change", function () {
        let selectedTime = timeInput.value;
        if (selectedTime < "09:00") {
            alert("Time must be after 9:00 AM");
            timeInput.value = "09:00";
        } else if (selectedTime > "23:00") {
            alert("Time must be before 11:00 PM");
            timeInput.value = "23:00";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("date");

    // Get today's date in local time
    let today = new Date();
    let maxDate = new Date();
    maxDate.setMonth(today.getMonth() + 1); // Set max date to 1 month ahead

    // Format dates as YYYY-MM-DD in local time
    function formatDate(date) {
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        let day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    let todayStr = formatDate(today);
    let maxDateStr = formatDate(maxDate);

    // Set the date input constraints
    dateInput.min = todayStr;
    dateInput.max = maxDateStr;

    // Prevent selecting outside the range
    dateInput.addEventListener("change", function () {
        if (dateInput.value < todayStr || dateInput.value > maxDateStr) {
            alert(`Please select a date between ${todayStr} and ${maxDateStr}.`);
            dateInput.value = todayStr; // Reset to today's date
        }
    });
});

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
