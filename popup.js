document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('clickIt');
  checkPageButton.addEventListener('click', function () {

    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, function (tabs) {
      alert("Misinformation Level: 1");
    });
  },
    false)
});

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs[0].url);
  console.log(tabs[0].title);
});