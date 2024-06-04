// Track the window focus state
let isWindowFocused = true;

// Function to send a message to the active tab
function sendMessageToActiveTab(action) {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    if (tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, {action: action});
    }
  });
}

// Listen for window focus changes
chrome.windows.onFocusChanged.addListener((windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) {
    isWindowFocused = false;
    sendMessageToActiveTab('pause');
  } else {
    isWindowFocused = true;
    sendMessageToActiveTab('play');
  }
});
