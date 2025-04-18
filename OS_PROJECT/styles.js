document.addEventListener("DOMContentLoaded", function() {
    // Fade in effect for the body
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s ease-in-out";
    document.body.style.opacity = 1;

    // Button click effect
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mousedown", function() {
            this.style.transform = "scale(0.95)";
        });
        button.addEventListener("mouseup", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Input focus effect
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("focus", function() {
            this.style.boxShadow = "0 0 15px rgba(255, 87, 34, 0.8)";
            this.style.borderColor = "#ff5722";
        });
        input.addEventListener("blur", function() {
            this.style.boxShadow = "none";
            this.style.borderColor = "black";
        });
    });
});
