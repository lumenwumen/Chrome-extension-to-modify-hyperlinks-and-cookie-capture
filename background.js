// content_script.js

async function retrieveCSRFToken() {
  try {
      const response = await fetch(window.location.href);
      const csrfToken = response.headers.get('X-CSRF-Token'); // Change the header name if needed
      if (csrfToken) {
          return csrfToken;
      } else {
          console.log("CSRF token not found in HTTP headers.");
          return null;
      }
  } catch (error) {
      console.error("Error occurred while retrieving CSRF token:", error);
      return null;
  }
}

(async () => {
  const csrfToken = await retrieveCSRFToken();
  if (csrfToken) {
      // Do something with the CSRF token, like sending it to your extension's background script
      // chrome.runtime.sendMessage({csrfToken: csrfToken});
      console.log("CSRF Token:", csrfToken);
  }
})();
