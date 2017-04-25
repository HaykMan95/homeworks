Object.prototype.extenshonMap = extenshonMap;

function extenshonMap(func) {
	if(this instanceof Array && func instanceof Function) {
		var newArr = [this.length];
		for(var i=0; i<this.length; ++i) {
			newArr[i] = func(this[i]);
		}
		return newArr;
	} else {
		throw "error!!";
	}
}

function arrayToString(arr, func) {
	//return arr.map(func);
	return arr.extenshonMap(func);
}

function toString(val) {
	return val*val;
}
var ar = [1,2,3,4];
arrayToString(ar, toString)