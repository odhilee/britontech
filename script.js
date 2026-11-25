// BRITONTECHKE - Welcome
console.log("Welcome to BRITONTECHKE!");

// Make the green button scroll smoothly to services
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector("a[href='#services']");
    if (btn) {
        btn.addEventListener("click", function() {
            alert("Welcome to BRITONTECHKE Services! Scroll down to see what we do.");
        });
    }
});