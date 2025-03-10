chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'http://game.granbluefantasy.jp/#quest/supporter/510031/5'},
            pageUrl: {hostEquals: 'http://game.granbluefantasy.jp/#raid/'},
            pageUrl: {hostEquals: 'http://game.granbluefantasy.jp/#result/'}
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });