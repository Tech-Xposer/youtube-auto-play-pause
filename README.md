
# YouTube Auto Pause Extension

## Overview
The YouTube Auto Pause Extension is a Chrome extension that automatically pauses YouTube videos when you switch away from the Chrome window and resumes them when you switch back. This can be useful for those who frequently multitask and want to avoid missing parts of a video.

## Features
- Automatically pauses YouTube videos when the Chrome window loses focus.
- Automatically resumes YouTube videos when the Chrome window gains focus.


## Installation
1. Clone this repository to your local machine:
   ```sh
   git clone https://github.com/Tech-Xposer/youtube-auto-play-pause.git

2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click the "Load unpacked" button and select the directory where you downloaded or cloned this repository.

## Usage
1. Open a YouTube video in Chrome.
2. Switch to a different window or application. The video should pause.
3. Switch back to the Chrome window. The video should resume automatically.

## Project Structure
- `manifest.json`: The manifest file that provides Chrome with information about the extension.
- `content.js`: The content script that interacts with the YouTube video player.
- `background.js`: The background script that listens for window focus events and sends messages to the content script.

## Code Details
### manifest.json
```json
{
  "manifest_version": 3,
  "name": "YouTube Auto Pause",
  "version": "1.0",
  "description": "Automatically pauses and resumes YouTube videos when switching windows.",
  "permissions": [
    "tabs"
  ],
  "content_scripts": [
    {
      "matches": ["*://www.youtube.com/*"],
      "js": ["content.js"]
    }
  ],
  "background": {
    "service_worker": "background.js"
  }
}
