$(document).ready(function () {
    $("#searchBtn").click(function () {
        $('.search-container').slideToggle();
    });
});

function contact() {
    if (document.getElementById('contact').style.display === 'none') {
        document.getElementById('contact').style.display = 'block'
    } 
}
function cancel(){
    document.getElementById('contact').style.display = 'none'
}

