//dollar bill is a simple, custom helper library with a collection of
//utility methods based on jQuery's example.
;

(function (window, undefined) {

    "use strict";

    var dollarbill = function (selector, context) {

        var db =  new dollarbill.fn.init(selector, context),
            nodes, i;

        // HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			
            db.length = 0;
            return db;

		}

        if ( typeof selector === "string" ) {

            if(context && context.nodeType){
                nodes = context.querySelectorAll(selector);    
            }else{
                nodes = document.querySelectorAll(selector);
            }

            db.length = nodes.length;
            db.selector = selector;

            for(i = 0; i < nodes.length; i++){
                db[i] = nodes[i];
            }

        }else if ( selector.nodeType ) {

            //if(!selector.length){
            //    selector = [selector];
            //}

            db[0] = selector;
            db.length = (!selector.length) ? 1 : selector.length;
        }

        return db;

    };

    dollarbill.fn = dollarbill.prototype = {

        constructor: dollarbill,

        init: function () {

            //this.length = 5;
            //this.selector = ".test";

            return this;            
        },

        version: "0.0.2",

        length: 0,
        context: undefined,
        selector: "",
        rclass : /[\t\r\n]/g,

        trim: function( text ) {
	    	return text == null ? "" : text.trim( text );
    	},

        isArray: function( obj ) {
		    return Object.prototype.toString.call(obj) === "[object Array]";
	    },

        merge: function(first, second){},

        each: function(obj, callback){
            
            if(callback === undefined){
                callback = obj;
                obj = this;
            }

            if(!this.isArray(obj)){
                return;
            }

            var value,
                i = 0,
                length = obj.length;

            for(; i < length; i++){
                
            }

        },

        map: function(elems, callback){

		    var value,
			    i = 0,
			    length = elems.length,
			    isArray = this.isArray( elems ),
			    ret = [];

		    // Go through the array, translating each of the items to their
		    if ( isArray ) {
			    for ( ; i < length; i++ ) {
				    value = callback( elems[ i ], i, arg );

				    if ( value != null ) {
					    ret[ ret.length ] = value;
				    }
			    }

		    // Go through every key on the object,
		    } else {
			    for ( i in elems ) {
				    value = callback( elems[ i ], i, arg );

				    if ( value != null ) {
					    ret[ ret.length ] = value;
				    }
			    }
		    }

            return ret;

        },

        grep: function(elems, callback, inv){
            
            var retVal,
			    ret = [],
			    i = 0,
			    length = elems.length;

		    inv = !!inv;

		    // Go through the array, only saving the items
		    // that pass the validator function
		    for ( ; i < length; i++ ) {
			    retVal = !!callback( elems[ i ], i );
			    if ( inv !== retVal ) {
				    ret.push( elems[ i ] );
			    }
		    }

    		return ret;
        },

        noop: function(){},

        testExtend: function(){
            
            console.log(this.extend);

        }
        
    };

    // Give the init function the dollarbill prototype for later instantiation
    dollarbill.fn.init.prototype = dollarbill.fn;

    return (window.dollarbill = window.$ = dollarbill);

}(window));