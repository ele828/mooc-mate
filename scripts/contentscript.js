console.log('notes ready');

var user = "";
chrome.storage.sync.get(["logined", "username"],
    function(data) {
        // Logined already
        if (data.logined)
        {
            user = data.username;
            console.log(user, "logined success");
        }
        // Not logined
        else
        {

        }
    }
);

toastr.options = {
  "closeButton": false,
  "debug": false,
  "positionClass": "toast-top-right",
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "10000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

var Mooc = {
    xtzx: {
        getCourseTitle: function() {
            var title = "";
            var fullTitle = $(".global.slim h2").text().trim();
            var dept = $(".global.slim h2").children().text().trim();
            title = dept;
            title += $.trim( fullTitle.replace(dept, "") );
            return title || "获取课程名称失败";
        },

        getChapterTitle: function() {
            return Utils.trim( $(".xblock h2").text().trim() ) || "获取章节名称失败";
        },

        getOriginVideoPlayer: function() {
            return new Promise(function(res, rej) {
                setTimeout( function() {
                    res( $(".xt_video_player_wrap video")[0] );
                }, 0);
            });
        }

    },
    coursera: {}
}


function videoDigestCycle( _player ) {

}

// Global origin url
var cur_url = window.location.href;
Utils.urlParser(cur_url);

log(Mooc.xtzx.getCourseTitle())
log(Mooc.xtzx.getChapterTitle())

toastr.success('Have fun storming the castle!', 'Miracle Max Says')



Utils.requestGET({
    url: root,
    data: {}
})
    .then(function(ret) {
        console.log(ret);
    });

Mooc.xtzx.getOriginVideoPlayer().then(function( _player ) {

    videoDigestCycle(_player);

})
