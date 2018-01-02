  var popupElement = document.getElementById("popup");
    // or     var popupElement = document.querySelector('#popup');

    function showPopup () {
        popupElement.style.display = 'block';
    }

    function hidePopup () {
        popupElement.style.display = 'none';
    }
    window.onclick = function (e) {
        if(e.target == popupElement){
            popupElement.style.display = 'none';
        }

    }
