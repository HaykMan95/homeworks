(function() {
    'use strict';

    window.getName = function(name) {
        if(name.slice(0, 8) === '[object ') {
            return name.slice(8, -1);
        }
        throw 'Error!!';
    };
}());
