$(".search-icon").click(function(){
    if($("#search").hasClass('active')){
        $("#search").removeClass('active');
    } else {
        $("#search").addClass('active');
    }
});



$(window).scroll(function(){

    var windowHeight = $(window).height();

    var vScroll = $(this).scrollTop();

    var h = $("section.hero").height() - $(".main-header").height();
    var header = $(".main-header");
    var badge = $(".badge");
    var vegSectionOffsetTop = $(".fresh-veg").offset().top;

    $(".plant").css({
        'transform' : 'translate(0px, -'+vScroll/40+'%)'
    });

    if(vScroll > 300 && vScroll < 500){
        $(".logo").css({
            'opacity' : 1 - (vScroll - 300)/100,
            'transform' : 'translate(0px, '+vScroll/2+'%)'
        });
    } else {
        $(".logo").css({
            'opacity' : 1,
            'transform' : 'translate(0px, '+vScroll/2+'%)'
        });
    }

    if(vScroll > h - 20 && vScroll < h){
        header.css({
            'background-color' : 'rgba(158,190,208,'+0+(vScroll-420)/20+')',
            'box-shadow' : 'inset 0px 0px 0px 0px rgb(136, 136, 136)'
        });
    } else if(vScroll > h){
        header.css({
            'background-color' : 'rgba(158,190,208,1)',
            'box-shadow' : 'inset 0px 0px 0px 1px rgb(136, 136, 136)'
        });
    } else if(vScroll < h - 20){
        header.css({
            'box-shadow' : 'inset 0px 0px 0px 0px rgb(136, 136, 136)',
            'background-color' : 'rgba(158,190,208,0)'
        });
    }

    if(vScroll + windowHeight > vegSectionOffsetTop){
        $(".fresh-veg-bg").css({
            'transform' : 'translate(0px, -'+(vScroll + windowHeight - vegSectionOffsetTop)/40+'%)'
        });
    }

    if(vScroll + windowHeight - badge.height()/2 > badge.offset().top){
        $(".badge .badge-large").css({
            'opacity' : '0.98',
            '-webkit-transform': 'translateX(0px)'
        });
        $(".badge .badge-small").css({
            'opacity' : '0.98',
            '-webkit-transform': 'translateX(0px)'
        });
    }


});