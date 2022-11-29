document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('clickIt');
  checkPageButton.addEventListener('click', function () {

    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, function (tabs) {
      var url = tabs[0].url;     //url
      var site = tabs[0].title;   //title
      alert("Misinformation Level: 1" + " - Title: " + site + " - URL: " + url);

    });
  },
    false)
});

