$(document).ready(function () {
    $("#searchBtn").click(function () {
        $('.search-container').slideToggle(1000);
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

