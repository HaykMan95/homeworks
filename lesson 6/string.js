(function(that){
    'use strict'
    that.namespace = that.namespace || {};
    that.namespace.String = function(x) {
        this.val = new String(x);
    }

    Object.defineProperty(that.namespace.String, this, {
        get: function() {
                return this.val.valueOf();
            },
        enumerable: false,
        configurable: true
    });

    that.namespace.String.prototype.toString = function() {
        return this.val;
    }

    that.namespace.String.prototype.valueOf = function() {
        return this.val;
    }

}(this))