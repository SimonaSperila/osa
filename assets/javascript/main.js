$('#header .menu').on('click', 'li.has-children > a', function(e) {
    e.preventDefault();
    var $this = $(this),
        $parent = $this.parent();
    $parent.toggleClass('js--active').siblings().removeClass('js--active');
    var $position = $parent.position();
    $($parent.data('destination')).find('.level2').css('margin-left', $position.left + 33);
    if ($parent.hasClass('js--active')) {
        $('.contentholder-menu').addClass('js--hidden').removeClass('js--visible');
        $($parent.data('destination')).removeClass('js--hidden').addClass('js--visible');
    } else {
        $($parent.data('destination')).addClass('js--hidden').removeClass('js--visible');
    }  
})
$('.whitebar').click(function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#content").offset().top
    }, 2000);
});
$('.menu-toggle').on('click', '.mobileheaderbutton--menu', function(e) {
    e.preventDefault();
    $(this).toggleClass('js--active');
    $('.container-mobilemenu').slideToggle();
});
$('.container-mobilemenu li.has-children').on('click','>a',function(e){
    e.preventDefault();
    var $this = $(this),
        $parent = $this.parent();
    $parent.toggleClass('js--open').find('>ul').slideToggle();
    $parent.siblings().removeClass('js--open').find('>ul').slideUp();
});
 //Scroll Top 
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#backtotop').fadeIn();
    } else {
            $('#backtotop').fadeOut();
    }
});
$('#backtotop').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 2000);
});

$('.contentholder-menu .level2 li').each(function() {
    var $this = $(this);
    var $parents= $this.parents('.contentholder-menu'); 
    var $text = $parents.attr('class');
    var $c = $text.split(" ")[1];
    var url = window.location.href.replace(/\/$/, '');
    var lastSeg = url.substr(url.lastIndexOf('/') + 1);
    var href = $this.find('> a').attr('href');
    if(lastSeg == href) {
        $(this).addClass('js--active');
        $(this).attr('data-destination',  '.' + $c);
    }
});

$('#header .menu .level1 li').each(function() {
    var $this = $(this);
    var $d = $this.data('destination');
    var $e = $('.contentholder-menu .level2 li.js--active').attr('data-destination');
    if($d == $e) {
        $(this).addClass('js--expanded');
    }
});








