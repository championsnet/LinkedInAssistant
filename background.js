chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed.");
});

// Listen for tab updates to inject content script when the LinkedIn page changes
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log('tab updated');
    if (changeInfo.status === 'complete' && tab.url.includes("linkedin.com")) {
        // Inject content.js when the LinkedIn page is fully loaded
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content.js']
        });
    }
});
