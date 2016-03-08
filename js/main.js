$(document).ready(function () {
    var navbar_collapse = $('#bs-example-navbar-collapse-1');

    $('ul.nav a').on('click', function () {
        if (navbar_collapse.hasClass('in')) {
            $(".navbar-toggle").click();
        }
    });

    // Timer
    var clock = $('.clock').FlipClock({
        countdown: true,
        clockFace: 'HourlyCounter',
        language: 'ru'
    });
    clock.setTime(34000);
    clock.start();

    //ScrollSpy
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 50
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 48)
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Всплывающее окно

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name-c',
        closeBtnInside: false,
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name-c';
                }
            }
        }
    });




    //Ajax отправка формы
    $("#order-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $("#order-form").serialize()
        }).done(function() {
            $("#order-form .inputs-form, #order-form .submit-form, #order-form .title-form h3, .startscreen .bg-form1, .startscreen .bg-form2").remove();
            $("#order-form .title-form").html("<h3>Спасибо за заявку!<br />Вы поставлены в очередь<br />на звонок.</h3>")
        });
        return false;
    });
    $("#order-form-b").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $("#order-form-b").serialize()
        }).done(function() {
            $("#order-form-b .inputs-form, #order-form-b .submit-form, #order-form-b .title-form h3, .bottom-order .bg-form1, .bottom-order .bg-form2").remove();
            $("#order-form-b .title-form").html("<h3>Спасибо за заявку!<br />Вы поставлены в очередь<br />на звонок.</h3>")
        });
        return false;
    });
    $("#order-form-c").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $("#order-form-c").serialize()
        }).done(function() {
            $("#order-form-c .inputs-form, #order-form-c .submit-form, #order-form-c .title-form h3, #mini-price .bg-form1, #mini-price .bg-form2").remove();
            $("#order-form-c .title-form").html("<h3>Спасибо за заявку!<br />Вы поставлены в очередь<br />на звонок.</h3>")
        });
        return false;
    });



});