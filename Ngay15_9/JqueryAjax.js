const urlBacon = "https://retoolapi.dev/LO1x5w/data";
function getData() {
  $.ajax({
    method: "GET",
    url: urlBacon,
    dataType: "json",
  })
    .done(function (data) {
      console.log(data);
    })
    .fail(function () {
      alert("no good");
    });
}
getData();