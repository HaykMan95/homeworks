function getIndex(arr, num) {
	if(arr.length >0 && typeof(num) === "number") {
		for(i = 0; i < arr.length; i++) {
			if(arr[i] === num) {
				return i;
			}
			//arr[i] === num ?? return i : countinue;   // ????
		}
	}
	return -1;
}

function getRandomInt(maxInt) {
	if(typeof(maxInt) === "number") {
		return parseInt(String(Math.random() * (maxInt - 0) + 0));
	}
	throw "Error";
}

function getRandomMatrix(n, m) {
	if(typeof(n) === "number" && typeof(m) === "number") {
		var matrix = [];
		var randIn;
		for(var i = 0; i < n; ++i) {
			matrix[i] = [];
			for(var j = 0; j < m; ++j) {
				matrix[i].push(getRandomInt(100));
			}
		}
		return matrix
	}
	throw "Error";
}


function matrixIndexOf(matrix, num) {
	for(var i = 0; i < matrix.length; ++i) {
		var index = getIndex(matrix[i], num);
		if(index !== -1) {
			return i + "--" + index
		}
	}
	return -1;
}

function lastIndexOf(arr, num) {
	var index = getIndex(arr.reverse(), num);
	return index === -1 ? -1 : index + arr.length - 1;
}


function matrixLastIndexOf(matrix, num) {
	for(var i = 0; i < matrix.length; ++i) {
		var index = lastIndexOf(matrix[i], num);
		if(index !== -1) {
			return i + "--" + index
		}
	}
	return -1;
}