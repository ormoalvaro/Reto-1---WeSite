goNextPage();


function goNextPage() {

    let element = document.getElementById("button");

    if (element) {
        element.addEventListener("click", function() {
            window.location.href = 'contact.html';
        }, false);
    }
}