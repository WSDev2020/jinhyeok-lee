
$(document).ready((e)=>{

    // extended jQuery
    if(jQueryExtension) jQueryExtension($.fn);

    // intialization event
    __initEvent();
    
    // head area [[ dynamic action ]]
    $(document).scroll(ev_scrollMovedOnEvent);
});






/**
 * As a function that initializes an event, 
 * it must be executed first.
 */
function __initEvent() {

    // @scroll event init
    ev_scrollMovedOnEvent();
}



/**
 * <strong> event-only </strong> function 
 * that checks and processes the top position 
 * and the left navigator bar 
 * when the scroll <b> position moves </b>
 */
function ev_scrollMovedOnEvent() {
    
    const vTop = $(document).scrollTop();

    /**
     * > header show and hide
     */
    const mHeadContainer = $('#headerContainer');

    if(vTop > 150) mHeadContainer.ext.show(()=>mHeadContainer.hasAttr('show'), mHeadContainer);
    else                              mHeadContainer.ext.hide(()=>mHeadContainer.hasAttr('hide'), mHeadContainer);

    
    /**
     * > display focusing(position) - aside
     */
    const mAsideContainer = $('#asideContainer');

    if(mAsideContainer.css('display') != null) {

        if(vTop >= 70) mAsideContainer.ext.fix(()=>!mAsideContainer.hasAttr('fix'), mAsideContainer, (e)=>e.css('top','80'));

        else                              mAsideContainer.ext.absolute(()=>mAsideContainer.hasAttr('absolute'), mAsideContainer, (e)=>e.css('top','150'));
    }

    const tocObj = $('.toc');

    for(var top = 0 ; top < tocObj.length ; top++) {

        const iTop = $(`#${$(tocObj[top]).attr('data-toc-id')||'tocHome'}`).position().top;

        if(vTop >= iTop) {
            
            $('.toc *').removeAttr('toc-active','');
            $($(tocObj[top > 0 ? top : 0])[0].childNodes[0]).attr('toc-active','');
        }
    }
}

