(function() {
    'use strict';

    window.createGUID = function() {
        return getHexNumber(8) + '-' + getHexNumber(4) + '-' + getHexNumber(4) + '-' + getHexNumber(4) + '-' + getHexNumber(12);
    };

    function getHexNumber(count) {
        return Math.random().toString(16).slice(2,count + 2);
    }
}());
