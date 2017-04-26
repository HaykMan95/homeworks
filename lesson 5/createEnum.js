function createEnum(arg) {
	var newObj = {};
	var index = 0;
	for(var i = 0; i < arg.length; ++i) {
		if(arg[i].name && arg[i].value) {
			newObj[arg[i].name] = arg[i].value
			index = arg[i].value;
			index ++;
		} else if(typeof(arg[i]) === "string") {
			newObj[arg[i]] = index;
			index ++;
		}
	}
	return newObj;
}