(function(that){
    'use strict'
    that.namespace = that.namespace || {};
    that.namespace.Array = function(x) {
        Object.defineProperty(this, 'length', {
            enumerable: false,
            writable: true,
            configurable: false,
            value: x
        });
    }

    Object.defineProperty(that.namespace.Array.prototype, 'toString', {
        get: function() {
                var str = '';
                var obj = this
                for (var prop in obj) {
                    str += obj[prop] + ',';
                    console.log(obj[prop])
                }
                return str.slice(0,-1);
            },
        enumerable: false,
        configurable: true
    });

}(this))