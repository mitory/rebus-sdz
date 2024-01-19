function showPopup(message) {
    var popupMessage = document.getElementById("popupMessage");
    var popupText = document.getElementById("popupText");

    popupText.textContent = message;

    popupMessage.classList.add("show");

    setTimeout(function () {
        popupMessage.classList.remove("show");
    }, 5000);
}