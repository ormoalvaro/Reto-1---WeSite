goBackPage();

function goBackPage() {

    let element = document.getElementById("button");

    if (element) {
        element.addEventListener("click", function() {
            window.location.href = 'home.html';
        }, false);
    }
}