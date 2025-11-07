document.querySelectorAll(".learn-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.getElementById("popup-text").innerText = btn.dataset.info;
        document.getElementById("popup").style.display = "flex";
    });
});

document.getElementById("close").onclick = () => {
    document.getElementById("popup").style.display = "none";
};
