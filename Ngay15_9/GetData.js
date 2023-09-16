const urlBacon = "https://retoolapi.dev/Nje5L3/data";
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