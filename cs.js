
function displayCookies() {
  var cookies = document.cookie.split(';');
  var Message = 'Cookies of the current domain:\n';
  for (var i = 0; i < cookies.length; i++) {
    Message += cookies[i].trim() + '\n';
  }
  console.log(Message);
  chrome.storage.local.get("cookiesMessage", function(result) {
    if (result.cookiesMessage) {
      console.log("not new");
      return;
    }
  });

  chrome.storage.local.set({cookiesMessage: Message}, function() {
    console.log("Cookies message saved to local storage");
  });

}
displayCookies();

  


