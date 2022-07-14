const slug = window.location.pathname.split('/')[2];

if(slug) {
    chrome.runtime.sendMessage({ x: "creategroup", slug }, response => {
        if(response.error) {
            console.log("[GROUPDB]", response.error);
        } else {
            console.log("[GROUPDB]", `Created "${response.name}"`);
        }
    });
}