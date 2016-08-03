/**
 * Created by Елена on 03.08.2016.
 */



$(document).ready(function () {
    $(window).resize(function () {
        SetDisplayMenu();
    });
    $(window).load(function () {
        SetDisplayMenu();
    });



//меню
    function SetDisplayMenu() {
        var displayToggle = $('.navbar-toggle').css('display');
        if(displayToggle!='none') { //когда есть блинная кнопка
            $('.Mypage').css('top','0.5em');
            $('.navbar-nav').removeClass('pull-right');
            $('img.search').css('top','-1.5em');
            $('.bgCarousel').css('background-size', 'cover');

            //фон
            win_w = $(window).width();
            win_h = $(window).height();
            bgMenu = $('.bgCarousel');
            $(bgMenu).height(win_h);//высотаBG=экрану
            $(bgMenu).addClass('mobile'); //прячем затемнение
            var navH = $('.bNav').height(); //высота меню

            if(navH>win_h) {
                $(bgMenu).height(navH);
            }

            $('.navbar-toggle').click(function () {
                var displayMenu = $('.navbar-collapse').css('display');
                if (displayMenu!='none') {//когда меню исчезает
                    $(bgMenu).height(win_h);//высотаBG=экрану
                    $('.navbar-collapse').css('display','none');
                }
                else { //когда меню появляется
                    $('.navbar-collapse').css('display','block');
                    var navH = $('.bNav').height()+$('.navbar-nav').height(); //высота меню
                    $(bgMenu).height(navH);
                }
            });
        }

        else {
            $('.Mypage').css('top','2em');
            $('.navbar-nav').addClass('pull-right');
            $('img.search').css('top','0');
            $(bgMenu).height("50em");
            $(bgMenu).removeClass('mobile');
        }

    }
    
});
