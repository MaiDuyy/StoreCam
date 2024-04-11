
$(document).ready(function(){
    // Sử dụng jQuery để bắt sự kiện click cho liên kết có id "clicksony"
    $("#clicksony").click(function(){
        // Lấy giá trị href của liên kết
        var targetId = $(this).attr('href');
        // Di chuyển trang đến phần tử có id tương ứng với href của liên kết
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 800);
    });

    $("#clickpanasonic").click(function(){
        // Lấy giá trị href của liên kết
        var targetId = $(this).attr('href');
        // Di chuyển trang đến phần tử có id tương ứng với href của liên kết
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 800);
    });

    $("#clickcanon").click(function(){
        // Lấy giá trị href của liên kết
        var targetId = $(this).attr('href');
        // Di chuyển trang đến phần tử có id tương ứng với href của liên kết
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 800);
    });

});