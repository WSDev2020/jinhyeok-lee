// declare Proxy variable
const $ = Proxy;

// declare basic information
// @version, @auther
const mVersion = '1.0.0';
const mAuthor  = 'justin hanry';

/**
 * Register the object's <strong>proxy</strong> to <b>handle<b/> 
 * the unilateral <b>polymorphism</b> of the [[ function ]].
 * @param {Object} t target object
 * @param {any} k set key value
 * @param {any} v registration value
 * @param {*} r re
 */
const set = (t, k, v, r) => {

    if(typeof v === 'function') {

        if(!t[k]) {
            var tf     = new Function();
                tf.key = k;

            t[k] = new Proxy(tf,{
                apply(t, at, a){
                    if(!t[a.length])
                        if(t.__proto__[t.key])
                            return t.__proto__[t.key].apply(this,a);
                        else
                            if(t) return t[0].apply(this,a);
                            else throw new Error('there is no function to execute.');

                    return t[a.length].apply(this,a);
                }
            });
        }

        t.__proto__[k] = t[k][v.length] = v;

    } else {

        t[k] = v;
    }
}

module.exports = {
    new : function() {
        var o = new Object();
            o.__proto__ = {};
        return new $(o, { "set" : set });
    }
}