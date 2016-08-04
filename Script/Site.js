/**
 * Created by Елена on 26.07.2016.
 */
$( document ).ready(function() {


    //якоря
    $('.bottom-icon').click(function(){
            //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });
    $('.navbar-nav a').click(function(){
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
        return false;
    });

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

    //social
    $('.social a').hover(function () {
            var leftPos = $(this).css('backgroundPosition').split(' ')[0];
            var left =  leftPos+" -35px";
            $(this).css('backgroundPosition', left);
            return false;
        },
        function () {
            $(this).css('backgroundPosition', '');
            return false;
        }
    );

});