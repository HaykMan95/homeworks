(function() {
    'use strict';

    window.getRandomHexColor = function() {
        return '#' + (Math.random().toString(16).slice(2, 8));
    };
}());
