document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('clickIt');
  checkPageButton.addEventListener('click', function () {

    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, function (tabs) {
      var url = tabs[0].url;     //url
      var title = tabs[0].title;   //title
      alert("Disinformation Level: 1" +
        " | Title: " + title +
        " | URL: " + url);
    });
  },
    false)
});

