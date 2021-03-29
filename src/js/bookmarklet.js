function uiRoundup_createRemoteBookmark(domain, apiKey) { 
    const xhttp = new XMLHttpRequest(); 
    const url = encodeURI(window.location); 
    const serverUrl = `${domain}/.netlify/functions/bookmarks?url=${url}&apiKey=${apiKey}`; 
    xhttp.open("GET", serverUrl, false); 
    xhttp.send(); 
    console.log('saving', url); 
}