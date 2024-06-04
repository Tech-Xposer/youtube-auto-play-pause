// Track the window focus state
let isWindowFocused = true;

// Function to send a message to the active tab
function sendMessageToActiveTab(action) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { action: action });
    }
  });
}

// Listen for window focus changes
chrome.windows.onFocusChanged.addListener((windowId) => {
  chrome.storage.local.get(['isPaused'], (result) => {
    if (!result.isPaused) {
      if (windowId === chrome.windows.WINDOW_ID_NONE) {
        isWindowFocused = false;
        sendMessageToActiveTab('pause');
      } else {
        isWindowFocused = true;
        sendMessageToActiveTab('play');
      }
    }
  });
});

// Listen for toggle messages from the popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'togglePause') {
    if (message.isPaused) {
      sendMessageToActiveTab('pause');
    } else if (isWindowFocused) {
      sendMessageToActiveTab('play');
    }
  }
});
