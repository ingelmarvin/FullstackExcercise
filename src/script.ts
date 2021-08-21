//jquery document ready
$(function () {
    $("#loginForm").on("submit", (function (e) {

        e.preventDefault(); // default formular-post verhindern

        const form: JQuery<HTMLElement> = $(this);
        const url: string = form.attr('action')!;

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

    $("#toggle").on("click", function () {
        const themeMode: string = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', themeMode);
        $("#themeLabel").text(`${themeMode}mode`);
    });

});

function redirectUserTo(url: string) {
    window.location.replace(url);
}