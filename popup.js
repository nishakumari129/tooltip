window.onload= function() {
    var link = document.getElementById("link");
    var popupmodal = document.getElementsByClassName('popup');
    link.onclick = function () {
        popupmodal.style.display = "block";
    }
    var confirm = document.getElementsByClassName("confirmBtn");
    confirm.onclick = function () {
        popupmodal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == popupmodal) {
            popupmodal.style.display = "none";
        }
    }
}