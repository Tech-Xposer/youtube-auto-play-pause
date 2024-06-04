// Function to pause the video
function pauseVideo() {
  const video = document.querySelector('video');
  if (video && !video.paused) {
    video.pause();
  }
}

// Function to play the video
function playVideo() {
  const video = document.querySelector('video');
  if (video && video.paused) {
    video.play();
  }
}

// Check if the extension is paused
chrome.storage.local.get(['isPaused'], (result) => {
  if (!result.isPaused) {
    // Listen for messages from the background script
    chrome.runtime.onMessage.addListener((message) => {
      if (message.action === 'pause') {
        pauseVideo();
      } else if (message.action === 'play') {
        playVideo();
      }
    });
  }
});
