// white - dark theme

var icon = document.getElementById("icon");

// profile-logo change

var profileLogo = document.getElementById("profileLogo");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.webp";
        profileLogo.src = "images/logo_bright.png";
    }
    else {
        icon.src = "images/moon.webp";
        profileLogo.src = "images/logo_dark.png";
    }
}