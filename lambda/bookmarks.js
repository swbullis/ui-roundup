import { getDetails, saveBookmark } from "./bookmarks/create";

const rp = require('request-promise');



exports.handler = async function(event, context) {
  try {
    if (event.queryStringParameters.apiKey != process.env.API_KEY) throw "Not Authorized";

    const url = event.queryStringParameters.url;
    const details = await getDetails(url);
    
    const savedResponse = await saveBookmark({url, ...details});
    console.log(savedResponse);

    if (savedResponse.statusCode === 200) {

      if (process.env.CONTEXT === 'production') {
        var options = {
          method: 'POST',
          uri: 'https://api.netlify.com/build_hooks/5d7fa6175504dfd43377688c',
          body: {}      
        };
      
        console.log('Rebuilding the site ... ');
        rp(options);
      }

      return { statusCode: 200, body: savedResponse.body }
    } else {
      return savedResponse
    }

    
  } catch (err) {
    return { statusCode: 500, body: `Error: ${err}` };
  }

};
  