"use strict";
$(function () {
    $("#loginForm").on("submit", (function (e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (res) {
                console.log(res);
                document.cookie = "token=Bearer " + res.accessToken;
            }
        });
    }));
});
function redirectUserTo(url) {
    window.location.replace(url);
}
