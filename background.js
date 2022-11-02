chrome.webRequest.onCompleted.addListener(
    function(details) {
        if(details.type === "xmlhttprequest")
        console.log(details)
    },
    {urls: ["<all_urls>"]},
)