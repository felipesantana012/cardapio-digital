
$(document).ready(function() {
    $('#modoDark').click(function() {
        $('body').toggleClass('modo-dark');
    });
});

$(document).ready(function(){
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});