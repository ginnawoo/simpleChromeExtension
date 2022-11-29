document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('clickIt');
  checkPageButton.addEventListener('click', function () {

    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, function (tabs) {
      var site = location.hostname,
        title = document.title;
      alert("Misinformation Level: 1" + "Site: " + site + " - Title: " + title);

    });
  },
    false)
});

