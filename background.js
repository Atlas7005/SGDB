chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.x == "creategroup") {
        const { slug } = request;
        if(!slug) return sendResponse({ error: "Slug is required" });

        fetch("https://sgroupdb.herokuapp.com/api/groups/"+slug.toLowerCase(), {
            method: "POST"
        }).then(response => {
            return response.json();
        }).then(data => {
            sendResponse(data);
        }).catch(error => {
            sendResponse({ error: error });
        });
    }
    return true;
});
