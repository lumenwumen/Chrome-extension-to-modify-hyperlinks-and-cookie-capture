chrome.storage.local.get(['hyperlink', 'replace', 'ipAddress'], function(items) {
  var specifiedKeyword = items.hyperlink.toLowerCase(); 
  var replacementLink = items.replace;  
  console.log(specifiedKeyword);
  console.log(replacementLink);
  const elements = document.querySelectorAll('a:link:not([href^=javascript])');
  const regex = new RegExp(specifiedKeyword, 'i'); 
  for (let i = 0; i < elements.length; i++) {
      if (regex.test(elements[i].href.toLowerCase())) { 
          elements[i].href = replacementLink;
      }
      
  }
});
