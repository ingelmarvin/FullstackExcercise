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
                redirectUserTo($('#redirect').attr('value')!);
            }
        });
    }));

    $("#toggle").on("click", function () {
        const themeMode: string = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', themeMode);
        document.cookie = `theme=${themeMode}`;
        $("#themeLabel").text(`${themeMode}mode`);
    });
    
    //TODO: load theme with cookie
    const themeMode: string = getCookie('theme');
    document.documentElement.setAttribute('data-theme', themeMode);

});

function redirectUserTo(url: string) {
    window.location.replace(url);
}

function getCookie(name: string) {
    const value: string= `; ${document.cookie}`;
    const parts: string[] = value.split(`; ${name}=`);
    if (parts !== undefined && parts.length === 2){
        return '' + parts.pop()!.split(';').shift();
    }else{
        return '';
    }
  }