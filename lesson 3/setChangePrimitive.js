(function(global) {
	var customProparty;
	function getCustomProparty() {
		return customProparty;
	}

	global.setPrimitive = function (obj, val) {
		customProparty = val;
		obj.valueOf = getCustomProparty;
	}

	global.changePrimitive = function(obj, val) {
		customProparty = val;
	}

})(this);

var obj = {};
setPrimitive(obj, "ttt");
console.log(obj.valueOf()); //ttt

changePrimitive(obj, "sss");
console.log(obj.valueOf()); //sss


