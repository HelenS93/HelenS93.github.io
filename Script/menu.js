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
        var bgMenu = $('.bgCarousel');
        var displayToggle = $('.navbar-toggle').css('display');
        if(displayToggle!='none') { //когда есть блинная кнопка

            var win_h = $(window).height();
            var navH = $('.bNav').height(); //высота меню
            var MenuHeight = navH+$('.navbar-toggle').height(); //высота меню

            $(bgMenu).height(win_h);

            $('.Mypage').css('top','0.5em');
            $('.navbar-nav').removeClass('pull-right');
            $('img.search').css('top','-1.5em');

            //фон
            if(MenuHeight>win_h) {
                $(bgMenu).height(MenuHeight);
            }
            $(bgMenu).css('background-size', 'cover');
            $(bgMenu).addClass('mobile'); //прячем затемнение
            
            $('.navbar-toggle').click(function () {
                var displayMenu = $('.navbar-collapse').css('display');
                if (displayMenu!='none') {//когда меню исчезает
                    $('.navbar-collapse').css('display','none');
                    $(bgMenu).height(win_h);//высотаBG=экрану
                }
                else {//когда меню появляется
                    $('.navbar-collapse').css('display','block');
                    if(MenuHeight<win_h) {
                        $(bgMenu).height(win_h);
                    } else{
                        $(bgMenu).height(MenuHeight);
                    }
                }
            });

        }

        else {
            $('.Mypage').css('top','2em');
            $('.navbar-nav').addClass('pull-right');
            $('img.search').css('top','0');
            $(bgMenu).css("height","50em");
            $(bgMenu).removeClass('mobile');
        }

    }




    //скролл меню фиксед
    $(window).scroll(function() {
        var displayToggle = $('.navbar-toggle').css('display');
        var MenuLiActive = $("#GlobalMenu .nav>li>a:not(.active)");
        var htmlW = $('html').width();
        if(displayToggle=='none'&& htmlW<=2000) { //когда десктоп
            if ($(this).scrollTop() > 100) {
                $('.Mypage').css({
                    position: "fixed",
                    top: "0",
                    padding: "0.5em",
                    color:"#000"
                });
                $('.Mypage span').css({
                    color:"#f0c514"
                });
                $('#GlobalMenu').css({
                    position: "fixed",
                    top: "0",
                    background: "#fff",
                    padding: "0.5em"
                });
                $(MenuLiActive).css({
                    color: "#000"
                });
            }
            else {
                $('.Mypage').css({
                    position: "absolute",
                    top: "2em",
                    padding: "0",
                    color:"#fff"
                });
                $('.Mypage span').css({
                    color:"#f0c514"
                });
                $('#GlobalMenu').css({
                    position: "absolute",
                    top: "2em",
                    background: "none",
                    padding: "0"
                });
                $(MenuLiActive).css({
                    color: "#fff"
                });
            }
        }
    });

});
