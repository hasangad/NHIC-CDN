function getBaseUrl() {
    /*var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);*/
    return window.location.origin ? window.location.origin + '/' : window.location.protocol + '/' + window.location.host + '/';
}

function en_lang() {
    $.cookie("ar_lang", null, { path: '/' });
    $.removeCookie("ar_lang", { path: '/' });
    $.cookie("en_lang", $('link[href="/Content/bs-rtl.css"]').attr('href', '/Content/en.css'), { expires: 365, path: '/' });
    return false;
};


function ar_lang() {
    $.removeCookie("en_lang");
    $.cookie("en_lang", null, { path: '/' });
    $.removeCookie("en_lang", { path: '/' });
    $('link[href="/Content/en.css"]').attr('href', '/Content/bs-rtl.css');
    $.cookie("ar_lang", $('link[href="/Content/en.css"]').attr('href', '/Content/bs-rtl.css'), { expires: 365, path: '/' });
    return false;
};






$(document).ready(function () {


//$.removeCookie("en_lang", { path: '/' });
//$.removeCookie("ar_lang", { path: '/' });
  


    //alert(getBaseUrl());

    //$("link[href$='bs-rtl.css']").val("a letter");

    if ($.cookie("en_lang")) {
        //$('link[href=/Content/bs-rtl.css"]').attr('href', getBaseUrl()+'/Content/en.css');
        $("link[href$='bs-rtl.css']").attr('href', getBaseUrl() + '/Content/en.css');
        $(".ar_lang").removeClass("hidden");
        $(".en_lang").hide();
    }

    if ($.cookie("ar_lang")) {
        $("link[href$='en.css']").attr('href', getBaseUrl() + '/Content/bs-rtl.css');
        $(".ar_lang").hide();
        $(".en_lang").removeClass("hidden");
    }

    if (!($.cookie("ar_lang")) && !($.cookie("en_lang"))) {


        //alert('nothing set');


        en_lang();


    } else {

        //alert('yes set ');

    }




    var offset = 300;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })

    $('[data-toggle="tooltip"]').tooltip();
    $(".side-nav .collapse").on("hide.bs.collapse", function () {
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
    });
    $('.side-nav .collapse').on("show.bs.collapse", function () {
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");
    });


    $('.all_white').fadeOut(1000);

    $('.en_lang , .ar_lang').click(function () {


        //alert('Yep');

        $('.all_white').show();

    });


    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });




    function nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }
    function prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    }



    // Add slideDown animation to dropdown
    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to dropdown
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    var randomScalingFactor = function () { return Math.round(Math.random() * 100) };

    var barChartData = {
        labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو"],
        datasets: [
			{
			    fillColor: "rgba(220,220,220,0.5)",
			    strokeColor: "rgba(220,220,220,0.8)",
			    highlightFill: "rgba(220,220,220,0.75)",
			    highlightStroke: "rgba(220,220,220,1)",
			    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
			},
			{
			    fillColor: "rgba(151,187,205,0.5)",
			    strokeColor: "rgba(151,187,205,0.8)",
			    highlightFill: "rgba(151,187,205,0.75)",
			    highlightStroke: "rgba(151,187,205,1)",
			    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
			}
        ]

    }






    /*-------------------- Collaps / Expand Sidebar ----------------*/



    if (screen.width > 750) {

        $('.collapse_me_now').click(function (e) {

            $('.sidebar').removeClass('col-lg-2');
            $('.sidebar').addClass('width-0');
            $('.main-content').removeClass('col-lg-10');
            $('.main-content').removeClass('col-lg-offset-2');
            $('.main-content').removeClass('col-md-offset-2');
            $('.main-content').addClass('col-lg-12');
            $(this).hide();
            $('.expand_me_now').css({ "right": "0%" });
            $('.expand_me_now').show();
        });

        $('.expand_me_now').click(function (e) {
            $('.sidebar').removeClass('width-0');
            $('.sidebar').addClass('col-lg-2');
            $('.main-content').removeClass('col-lg-12');
            $('.main-content').addClass('col-lg-offset-2');
            $('.main-content').addClass('col-md-offset-2');
            $('.main-content').addClass('col-lg-10');
            $(this).hide();
            $('.collapse_me_now').show();





        });


    }


    if (document.documentElement.clientWidth < 1200) {



        $num_is = 0;

        $('.Menu_title a b').html('اظهار القائمة');

        $('.Menu_title').click(function (e) {

            if ($num_is == 0) {

                $('.main_menu').animate({ "top": "0%" });
                $('.Menu_title a b').html('اخفاء القائمة');

                $num_is = 1;

            } else {
                $('.main_menu').animate({ "top": "90%" }); $num_is = 0;
                $('.Menu_title a b').html('اظهار القائمة');
            }

        });







        /* $('.main_menu').toggle(
 
                    function(){$('.main_menu').animate({ "top": "0%" })}, 
                    function(){$('.main_menu').animate({ "top": "90%" })}
         );*/



    }

    $(".open_seesem").click(function () {
        //alert("يا جمالووووووووووووو");
        $(".seesem").click();
    });



    /*------------- ICHECK PLUGIN ---------------------*/



    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'icheckbox_flat-green',
        increaseArea: '20%' // optional
    });





    /*---------------- Arabic & English ---------------------*/





    /*$('.en_lang').click(function (){
 
         //alert(' أنا إنجليزي ، إنت مين :D ');
     
 $('link[href="css/style.css"]').attr('href',$(this).attr('rel'));
 $.cookie("css",$(this).attr('rel'), {expires: 365, path: '/' });
 $(this).hide();
    $('.dark_style').removeClass('hidden');
    $('.dark_style').show();
    $.cookie("theme","light_style", {expires: 365, path: '/' });
 return false;
 });
 
 });*/

    /*$('.ar_lang').click(function (){
        
        $('link[href="css/style.css"]').attr('href',$(this).attr('rel'));
        $.cookie("css",$(this).attr('rel'), {expires: 365, path: '/' });
        $(this).hide();
        $('.dark_style').removeClass('hidden');
        $('.dark_style').show();
        $.cookie("theme","light_style", {expires: 365, path: '/' });
        return false;
    
       
    });*/

});
