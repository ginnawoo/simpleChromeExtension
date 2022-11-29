document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('clickIt');
  checkPageButton.addEventListener('click', function () {

    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, function (tabs) {
      var site = tabs.title,
      var url = tabs.url;
      alert("Misinformation Level: 1" + " - Title: " + site + " - URL: " + url);

    });
  },
    false)
});

