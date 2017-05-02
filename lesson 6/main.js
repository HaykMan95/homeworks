(function(that){
    'use strict'
    that.namespace = that.namespace || {};

    var arr = new Array(3);
    arr[0] = "00";
    arr[1] = "11";
    arr[2] = "22";

    var newArr = new namespace.Array(3);
    newArr[0] = "00";
    newArr[1] = "11";
    newArr[2] = "22";

    console.log("new arr - " + newArr.toString, "arr - " + arr.toString());

    var str = new String("str");
    var newStr = new namespace.String("new str");

    console.log(newStr, str);
}(this))