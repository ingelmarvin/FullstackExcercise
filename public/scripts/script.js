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
                redirectUserTo($('#redirect').attr('value'));
            }
        });
    }));
    $("#toggle").on("click", function () {
        var themeMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', themeMode);
        document.cookie = "theme=" + themeMode;
        $("#themeLabel").text(themeMode + "mode");
    });
    var themeMode = getCookie('theme');
    document.documentElement.setAttribute('data-theme', themeMode);
});
function redirectUserTo(url) {
    window.location.replace(url);
}
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts !== undefined && parts.length === 2) {
        return '' + parts.pop().split(';').shift();
    }
    else {
        return '';
    }
}
