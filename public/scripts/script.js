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
                redirectUserTo('/');
            }
        });
    }));
    $("#toggle").on("click", function () {
        var themeMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', themeMode);
        $("#themeLabel").text(themeMode + "mode");
    });
});
function redirectUserTo(url) {
    window.location.replace(url);
}
