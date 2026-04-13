document.getElementById("report").addEventListener("click", () => {
    chrome.tabs.create({
        url: "http://localhost:5000/report"
    });
});