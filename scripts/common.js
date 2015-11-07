var root = "http://10.209.202.84:8080/"
var api = {
    login: root + "api/login/"
}
var log = function(msg) {
    console.log(msg);
}

// Utils
var Utils = (function() {
    return {
        trim: function(str){
            return str.replace(/(^\s*)|(\s*$)/g,"");
        },
        urlParser: function(url) {
            console.log(url);
        },
        /** url, data **/
        requestGET: function(params) {
            return new Promise(function(res, rej) {
                $.ajax({
                    url: params.url,
                    dataType: "json",   // ret tpye
                    async: true,
                    data: params.data || {},
                    type: "GET",   //请求方式
                    success: function( ret ) {
                        res( ret );
                    },
                    error: function( err ) {
                        rej( err );
                    }
                });
            });
        },
        /** url, data **/
        requestPOST: function(params) {
            return new Promise(function(res, rej) {
                $.ajax({
                    url: params.url,
                    dataType: "json",   // ret tpye
                    async: true,
                    data: params.data || {},
                    type: "POST",   //请求方式
                    success: function( ret ) {
                        res( ret );
                    },
                    error: function( err ) {
                        rej( err );
                    }
                });
            });
        }


    }
})();
