(function(that){
    'use strict'
    that.namespace = that.namespace || {};

    function cmp(op, range1, range2) {
        switch (op) {
            case '>':
                return range1.to - range1.from > range2.to - range2.from;
                break;
            case '<':
                return range1.to - range1.from < range2.to - range2.from;
                break;
            case '>=':
                return range1.to - range1.from >= range2.to - range2.from;
                break;
            case '<=':
                return range1.to - range1.from <= range2.to - range2.from;
                break;
            case '==':
                return range1.to - range1.from == range2.to - range2.from;
                break;
        }
    }

    that.namespace.Range = function(x,y) {
        if(toString.call(x).slice(8,-1) === 'Object') {
            return new namespace.Range(x.from, x.to);
        } else if(toString.call(x).slice(8,-1) === 'Array' && x.length === 2) {
            return new namespace.Range(x[0], x[1]);
        } else if(arguments.length === 2) {
            this.from = x;
            this.to = y;
        }
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

    that.namespace.Range.prototype.gt = function(range) {
        return cmp(">", this, range);
    }

    that.namespace.Range.prototype.lt = function(range) {
        return cmp("<", this, range);
    }

    that.namespace.Range.prototype.gte = function(range) {
        return cmp(">=", this, range);
    }

    that.namespace.Range.prototype.lte = function(range) {
        return cmp("<=", this, range);
    }

    that.namespace.Range.prototype.eq = function(range) {
        return cmp("==", this, range);
    }

    that.namespace.Range.prototype.compare = function(range, func) {
        // return cmp(">", this, range)? 1: cmp("<", this, range)? -1: 0 ;
        if (arguments.length === 1) {
            return + cmp(">", this, range) - cmp("<", this, range) + 0;
        } else {
            return + func(this, range);
        }
        
    }



}(this))