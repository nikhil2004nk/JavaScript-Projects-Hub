document.querySelectorAll(".project-btn").forEach(button => {
    button.addEventListener("click", () => {
        const url = button.getAttribute("data-url");
        window.location.href = url;
    });
});
