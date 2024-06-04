document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
  
    // Load the current state from storage
    chrome.storage.local.get(['isPaused'], (result) => {
      if (result.isPaused) {
        toggleButton.textContent = 'Resume Extension';
      } else {
        toggleButton.textContent = 'Pause Extension';
      }
    });
  
    toggleButton.addEventListener('click', () => {
      chrome.storage.local.get(['isPaused'], (result) => {
        const isPaused = !result.isPaused;
        chrome.storage.local.set({ isPaused: isPaused }, () => {
          toggleButton.textContent = isPaused ? 'Resume Extension' : 'Pause Extension';
          chrome.runtime.sendMessage({ action: 'togglePause', isPaused: isPaused });
        });
      });
    });
  });
  