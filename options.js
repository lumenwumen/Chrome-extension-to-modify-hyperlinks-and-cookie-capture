document.getElementById('extensionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const hyperlink = document.getElementById('hyperlink').value;
    const replace = document.getElementById('replace').value;
    const ipAddress = document.getElementById('ipAddress').value;
  
    const data = {
      hyperlink: hyperlink,
      replace: replace,
      ipAddress: ipAddress
    };
  
    chrome.storage.local.set(data, function() {
      console.log('Data saved in local storage:', data);
    });
  });