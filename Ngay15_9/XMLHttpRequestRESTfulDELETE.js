console.log("XMLHttpRequestRESTfulDELETE.js");
  // Delete a user
  var url = "https://retoolapi.dev/Nje5L3/data";
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url + '/2', true);
  xhr.onload = function () {
      var users = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
          console.table(users);
      } else {
          console.error(users);
      }
  }
  xhr.send(null);