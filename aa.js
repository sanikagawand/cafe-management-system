
   function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function toggleForms() {
    let loginForm = document.getElementById("loginForm");
    let signupForm = document.getElementById("signupForm");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    if (event.target == modal) {
        closeLoginModal();
    }
};
