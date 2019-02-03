$(document).ready(function () {
    $("#searchBtn").click(function () {
        $('.search-container').slideToggle();
    });
});

function contact() {
    if (document.getElementById('contact').style.display === 'block') {
        document.getElementById('contact').style.display = 'none'
    } else {
        document.getElementById('contact').style.display = 'block'
    }
}
function cancel(){
    debugger
    contact();
}

