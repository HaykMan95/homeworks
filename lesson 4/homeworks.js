//1)
function getIndex(arr, num) {
	if(arr.length >0 && typeof(num) === "number") {
		for(i = 0; i < arr.length; i++) {
			if(arr[i] === num) {
				return i;
			}
			//arr[i] === num ? return i : countinue;   // ????
		}
	}
	return -1;
}

//2)
function getRandomInt(maxInt) {
	if(typeof(maxInt) === "number") {
		return parseInt(String(Math.random() * (maxInt - 0) + 0));
	}
	throw "Error";
}

//3)
function getRandomMatrix(n, m) {
	if(typeof(n) === "number" && typeof(m) === "number") {
		var matrix = [];
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

//4)
function matrixIndexOf(matrix, num) {
	for(var i = 0; i < matrix.length; ++i) {
		var index = getIndex(matrix[i], num);
		if(index !== -1) {
			return i + "--" + index
		}
	}
	return -1;
}

//5)
function lastIndexOf(arr, num) {
	var index = getIndex(arr.reverse(), num);
	return index === -1 ? -1 : arr.length - 1 - index;
}

//6)
function matrixLastIndexOf(matrix, num) {
	for(var i = matrix.length - 1; i >= 0; --i) {
		var index = lastIndexOf(matrix[i], num);
		if(index !== -1) {
			return i + "--" + index
		}
	}
	return -1;
}
