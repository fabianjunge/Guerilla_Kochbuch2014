$(function () {

    //Resize panel


    //== Media queries breakpoints
    //
    //## Define the breakpoints at which your layout will change, adapting to different screen sizes.

    // Extra small screen / phone
    //** Deprecated `$screen-xs` as of v3.0.1
    var sassVars = {}
    sassVars['$screen-xs'] = 480
    //** Deprecated `$screen-xs-min` as of v3.2.0
    sassVars['$screen-xs-min'] = sassVars['$screen-xs']
    //** Deprecated `$screen-phone` as of v3.0.1
    sassVars['$screen-phone'] = sassVars['$screen-xs-min']

    // Small screen / tablet
    //** Deprecated `$screen-sm` as of v3.0.1
    sassVars['$screen-sm'] = 768
    sassVars['$screen-sm-min'] = sassVars['$screen-sm']
    //** Deprecated `$screen-tablet` as of v3.0.1
    sassVars['$screen-tablet'] = sassVars['$screen-sm-min']

    // Medium screen / desktop
    //** Deprecated `$screen-md` as of v3.0.1
    sassVars['$screen-md'] = 992
    sassVars['$screen-md-min'] = sassVars['$screen-md']
    //** Deprecated `$screen-desktop` as of v3.0.1
    sassVars['$screen-desktop'] = sassVars['$screen-md-min']

    // Large screen / wide desktop
    //** Deprecated `$screen-lg` as of v3.0.1
    sassVars['$screen-lg'] = 1200
    sassVars['$screen-lg-min'] = sassVars['$screen-lg-min']
    //** Deprecated `$screen-lg-desktop` as of v3.0.1
    sassVars['$screen-lg-desktop'] = sassVars['$screen-lg-min']

    // So media queries don't overlap when required, provide a maximum
    sassVars['$screen-xs-max'] = (sassVars['$screen-sm-min'] - 1)
    sassVars['$screen-sm-max'] = (sassVars['$screen-md-min'] - 1)
    sassVars['$screen-md-max'] = (sassVars['$screen-lg-min'] - 1)


    //**
    /* Panel on phone devices
    /*
    /*
    /*
    /*/
    function isPhone () {
        return $(window).width()<sassVars['$screen-xs-max']
    }
    $(window).resize(function () {
        var add = false;
        //If phone => Collapse all articles
        if(isPhone()){
          add = true;
        }
        $('.panel-collapse').each(function(){
            if(add){
                $(this).addClass('collapse')
            }else {
                $(this).removeClass('collapse')
                $(this).attr("style", "")
            }
        })
    })
    $('.panel-collapse').find("li").on('click', function(){
        if(isPhone()){
            $(this).toggleClass('inCard')
        }
    })


     //**
     /* Navigation scroll to event
     /*
     /*
     /*
     /*/

    $('nav').find("a").on("click", function(e){
        e.preventDefault();
        href = $(this).attr('href')
        $.scrollTo(href,1000, {
            offset: {
                top: -20
            }
        });

    })


    /**
     * Swipebox support
     */
    $( '.swipebox' ).swipebox({
        afterClose: function(){
            console.log(arguments)
        }
    });



    $(window).trigger("resize")
})