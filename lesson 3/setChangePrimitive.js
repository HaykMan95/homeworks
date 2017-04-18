(function(global) {

	global.setPrimitive = function (obj, val) {
		obj.primitive = val;	
		obj.valueOf = function() {
			return val;
		}
	}

	global.changePrimitive = function(obj, val) {
		if("primitive" in obj) {
			obj.primitive = val;	
			obj.valueOf = function() {
				return val;
			}	
		}
		
	}

})(this);

var obj = new Object();
setPrimitive(obj, "ttt");
conseole.log(obj.valueOf);//ttt

changePrimitive(obj, "sss");
conseole.log(obj.valueOf);//sss