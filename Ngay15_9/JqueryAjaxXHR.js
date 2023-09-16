const url = "https://retoolapi.dev/Nje5L3/data";
$.ajax({
    url: url,
    beforeSend: function (xhr) {
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
})
    .done(function (data) {
        if (console && console.log) {
            console.log("Sample of data:", data.slice(0, 100));
        }
    });
