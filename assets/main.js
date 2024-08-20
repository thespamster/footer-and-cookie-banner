//
// JAVASCRIPT FOR COOKIE BANNER
// waits for the html and css to load before running the script

window.onload = function() {
document.getElementById("deleteCookie").style.display = "none"; // hides the delete cookie button
document.getElementById("cookieBanner").style.display = "none"; // hides the cookie banner

// function to set a cookie when the 'accept cookies' button is pressed
document.getElementById("acceptCookies").addEventListener("click", function() {
    console.log("Button clicked, cookie set");
    document.cookie = "=cookiesAccepted=YES; expires=Thu, 31 Dec 3000 12:00:00 UTC; path=/"; // sets a cookie
    document.getElementById("cookieBanner").style.display = "none";
    document.getElementById("deleteCookie").style.display = "block";
});

// function to delete a cookie when the 'delete cookies' button is pressed
document.getElementById("deleteCookies").addEventListener("click", function() {
    console.log("Button clicked, cookie deleted");
    document.cookie = "=cookiesAccepted=NO; expires=Thu, 31 Dec 1967 12:00:00 UTC; path=/"; // set cookie date to 'the past' to delete it
});

// function to check for a cookie
function checkCookie() {
    let cookieSet = document.cookie; // looks for a cookie
    console.log("Cookie",cookieSet);
    if (cookieSet == "") {
        console.log("No cookie set");
        document.getElementById("cookieBanner").style.display = "block"; // if no cookie show cookie banner
    } else if (cookieSet != "") {
        console.log("Cookie set");
        document.getElementById("deleteCookie").style.display = "block"; // if cookie show delete cookie button
    }
}

checkCookie();
}
