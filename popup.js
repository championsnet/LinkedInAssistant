document.getElementById('highlightButton').addEventListener('click', () => {
    // Get the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // Ensure the content script is injected into the current page (if not already)
        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                files: ['content.js']  // Inject the content script
            },
            () => {
                // Once the content script is injected, send the message to it
                chrome.tabs.sendMessage(tabs[0].id, { action: 'highlight' });
            }
        );
    });
});
