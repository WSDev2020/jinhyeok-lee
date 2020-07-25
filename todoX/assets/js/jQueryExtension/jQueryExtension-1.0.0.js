/**
 * 
 * @param {jQuery} jQuery 
 */
function jQueryExtension(jQuery) {
    
    // namespace allow
    if(!jQuery.ext) {

        jQuery.ext = {};
    }

    jQuery.hasAttr = function(name) {

        return this.attr(name) !== undefined;
    };

    jQuery.ext.show = function(arg_is, arg_obj, option) {

        if(arg_is()) {

            arg_obj.fadeOut(option);
            arg_obj.attr('hide','');
            arg_obj.removeAttr('show');
        }
    }

    jQuery.ext.hide = function(arg_is, arg_obj, option) {

        if(arg_is()) {

            arg_obj.fadeIn(option);
            arg_obj.attr('show','');
            arg_obj.removeAttr('hide');
        }
    }

    jQuery.ext.fix = function(arg_is, arg_obj, callback) {
        
        if(arg_is()) {
            
            arg_obj.css('position','fixed');
            arg_obj.attr('fix','');

            callback(arg_obj);
        }
    }

    jQuery.ext.absolute = function(arg_is, arg_obj, callback) {
        
        if(arg_is()) {
            
            arg_obj.css('position','absolute');
            arg_obj.removeAttr('fix');

            callback(arg_obj);
        }
    }


}
