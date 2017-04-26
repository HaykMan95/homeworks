var instacne = function instanceOf(arg, type) {
	if(toString.call(arg).slice(8,-1) == type) {
		return true;
	} else if(arg == null) {
		return false;
	}else {
		return instanceOf(arg.__proto__, type);
	}
}

function getClassName(arg) {
	return toString.call(arg).slice(8,-1)
}