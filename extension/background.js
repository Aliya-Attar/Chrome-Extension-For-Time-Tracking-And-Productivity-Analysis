let currentSite = "";
let startTime = Date.now();

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);

    if (!tab.url) return;

    const url = new URL(tab.url);
    const site = url.hostname;

    trackTime();

    currentSite = site;
    startTime = Date.now();
});

function trackTime() {
    if (!currentSite) return;

    const timeSpent = Math.floor((Date.now() - startTime) / 1000);

    fetch("http://localhost:5000/track", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            site: currentSite,
            time: timeSpent
        })
    });
}