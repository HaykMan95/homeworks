(function(that){
    'use strict'
    that.namespace = that.namespace || {};
    that.namespace.Range = function(x,y) {
        this.from = x;
        this.to = y;
        
    }
    that.namespace.Range.isInRange = function(range, x) {
        if(range.from <= x && x <= range.to) {
            return true;
        }
        return false
    }
    that.namespace.Range.prototype.includes = function(x) {
        if(this.from <= x && x <= this.to) {
            return true;
        }
        return false;
    }

}(this))