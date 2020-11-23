$(document).ready(() => {
    $("#content").load("home.html");

    $.each($(".nav-link"), (index, value) => {
        $(value).click((e) => {
            e.preventDefault();
            $('#content').load(value.href);
        })
    })
})