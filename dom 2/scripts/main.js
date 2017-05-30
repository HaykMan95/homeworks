window.openMenu = function (that) {
    var sub = that.nextElementSibling;
    if(sub.style.display === "none") {
        sub.style.display = "block";
    } else {
        sub.style.display = "none";
    }
}
