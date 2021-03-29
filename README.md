# UIRoundup.com Bookmarking site

This is the source code for UIRoundup.com

## Setup

If you want this for your own, there are a few things you'll need to do, first, deploy this repo to Netlify with the button below (what this does: Forks the repository and then deploys that forked repository to your Netlify account)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/swbullis/ui-roundup)

### Requirements

* A FaunaDB account
    * A FaunaDB "Collection" called "links"
    * An all_links index
* Environment Variables in Netlify
    * FAUNADB_SERVER_SECRET (your server secret from Fauna)
    * API_KEY (a simple API you'll use as a query parameter to confirm it's you posting)
    * NETLIFY_REBUILD_HOOK (url to call when a rebuild needs to be triggered)
* Netlify Dev CLI `npm install -g netlify-cli`

## Installation and local work

1. `npm install`
2. `netlify dev`

Seriously, that should be all it takes

## Editing

The site files live in the `/src` directory. This is where 11ty will build the site from. It will publish the files to `/app`.

The Lambda Function lives in `/lambda`. The main functions doing the heavy lifting are in `/lambda/bookmarks/create.js`.

## Setting up a shortcut

Create a new bookmark shortcut replacing your domain and apikey

```
javascript: (function () {
    const domain='http://localhost:8888';
    const apikey='YOUR_API_KEY';
    const url=encodeURI(document.location);
    const uiRoundup_createRemoteBookmark = ()=>{
        open(`${domain}/.netlify/functions/bookmarks?url=${url}&apiKey=${apikey}`);
    };
    uiRoundup_createRemoteBookmark();
 }());

 ```