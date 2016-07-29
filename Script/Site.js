/**
 * Created by Елена on 26.07.2016.
 */
$( document ).ready(function() {
    $(window).resize(function () {
        SetDisplayMenu();
    });
    $(window).load(function () {
        SetDisplayMenu();
    });
//меню
    function SetDisplayMenu() {
        var displayToggle = $('.navbar-toggle').css('display');
        if(displayToggle!='none') {
            $('.Mypage').css('top','0.5em');
            $('.navbar-collapse').removeClass('pull-right');
        }
        else {
            $('.Mypage').css('top','2em');
            $('.navbar-collapse').addClass('pull-right');
        }
    }
//слайдер
    $('.carousel').carousel({
        interval: 5000,
        pause: 'hover',
        wrap: true
    });

    //hover
    $('img.search').hover(function () {
            $(this).css('display','block');
            return false;
        },
        function () {
            $(this).css('display','none');
            return false;
        }
    );
    $('.sectionDark .row img[alt="image"]').hover(function () {
        $(this).next().css('display','block');
            return false;
    },
        function () {
            $(this).next().css('display','none');
            return false;
        }
    );
});