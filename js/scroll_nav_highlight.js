$(document).ready(function () {
    $("#nav-item-1").addClass('active');
    $(window).scroll(function (event) {
        var top = $(window).scrollTop();
        var divH1 = $('#home').outerHeight() - $('nav').outerHeight();
        var divH2 = divH1;
        var divH3 = divH2 + $('#gallery').outerHeight();
        var divH4 = divH3 + $('#speakers').outerHeight();
        var divH5 = divH4 + $('#schedule').outerHeight();
        var divH6 = divH5 + $('#register').outerHeight();
        var divH7 = divH6 + $('#contact').outerHeight();
        if (top < divH1) {
            $("a").removeClass('active');
            $("#nav-item-1").addClass('active');
            // console.log("inside section 1, home");
        }
        if (top >= divH2 && top < divH3) {
            $("a").removeClass('active');
            $("#nav-item-2").addClass('active');
            // console.log("inside section 2, about");
        }
        if (top >= divH3 && top < divH4) {
            $("a").removeClass('active');
            $("#nav-item-3").addClass('active');
            // console.log("inside section 3, gallery");
        }
        if (top >= divH4 && top < divH5) {
            $("a").removeClass('active');
            $("#nav-item-4").addClass('active');
            // console.log("inside section 4, speakrs");
        }
        if (top >= divH5 && top < divH6) {
            $("a").removeClass('active');
            $("#nav-item-5").addClass('active');
            // console.log("inside section 5, shceduel");
        }
        if (top >= divH6 && top < divH7) {
            $("a").removeClass('active');
            $("#nav-item-6").addClass('active');
            // console.log("inside section 6, register");
        }
        if (top >= divH7 ) {
            $("a").removeClass('active');
            $("#nav-item-7").addClass('active');
            // console.log("inside section 7, contact");
        }
    });
});