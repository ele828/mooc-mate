chrome.storage.sync.get(["logined", "username"],
    function(data){

        // success
        if (data.logined) {
            $(".profile").show();
        } else {
            $(".container").show();
            $("#login-btn").on('click', function() {
                var usr = $("#user").val().trim();
                var pw = $("#pw").val().trim();
                console.log(usr, pw);

                Utils.requestGET({
                    url: api.login + usr + "/" + pw
                })
                .then(function(ret) {
                    var msg = ret.msg;
                    if (msg === "success") {
                        chrome.storage.sync.set({"logined": true, "username": usr},
                            function(){
                                console.log("保存完毕");
                            }
                        );
                    } else {
                        alert("Please check your username and password");
                    }
                });

            });

            $("#reg-btn").on('click', function() {
                console.log('login reg');
            });
        }
    }
);
