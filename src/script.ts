//jquery document ready
$(function () {
    $("#loginForm").on("submit", (function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        const form = $(this);
        const url = form.attr('action');

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (res) {
                console.log(res);
                document.cookie = `token=Bearer ${res.accessToken}`;
                redirectUserTo('/');
            }
        });
    }));

});

function redirectUserTo(url: string) {
    window.location.replace(url);
}