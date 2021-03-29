javascript: (function () {
    const domain='http://localhost:8888';
    const apikey='YOUR_API_KEY';
    const url=encodeURI(document.location);
    const uiRoundup_createRemoteBookmark = ()=>{
        open(`${domain}/.netlify/functions/bookmarks?url=${url}&apiKey=${apikey}`);
    };
    uiRoundup_createRemoteBookmark();
 }());