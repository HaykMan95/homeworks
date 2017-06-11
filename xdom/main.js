// Tasks
// 1. Make XDOM.select work with multiple elements
// 2. Should support "p#my-car .green p.small"
// 3. Make application error prone, if "#my-car p" element doesn't exist
//		XDOM.select("#my-car p") and XDOM.select("#my-car p").addClass... should not throw errors.

var XDOM = {
    countReq: 0,
    respon: [],
    isError: false,
    succes: function(func) {
        if(respon.count == countReq) {
            func(respon);
        }
    },
    error: function(func) {
        if(isError) {
            func(respon);
        }
    },
    fetch: function(req) {
        countReq++;
        var r = new XMLHttpRequest();
        r.open(req.type, req.url, true);
        r.onreadystatechange = function () {
            if (r.readyState != 4 || r.status != 200) return;
            console.log(r.responseText);
        };
        if(req.params) {
            var params = Object.keys(req.params).map(function(key, index) {
                return key +"=" + req.params[key]
            }).join("&");
            r.send(params);
        }

        xhr.addEventListener("load", function(e) {
            this.respon.push(e);
            return XDOM;
        }, false);
        xhr.addEventListener("error", function(e) {
            this.isError = true;
            return XDOM;
        }, false);

    }

};

// console.log(XDOM.select('#gameArea'));
XDOM.fetch(
    {
        type: "POST",
        url: "test.com",
        params: {
            a: 3,
            w: 4
        }
    }.fetch(
        {
            type: "POST",
            url: "test.com",
            params: {
                a: 3,
                w: 4
            }
        }.succes(function() {
            alert("sucsess");
        }).error(function() {
            alert("error");
        })
)