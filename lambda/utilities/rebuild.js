require('dotenv').config()
const rp = require('request-promise');

const rebuildSite = async function () {
  var options = {
    method: 'POST',
    uri: process.env.NETLIFY_REBUILD_HOOK,
    body: {},
    json: true
  };

  console.log('Rebuilding the site ... ');

  const returned = await rp(options).then(function (res) {
    console.log('Successfully hit webhook', res);
  }).catch(function (err) {
    console.log('Error:', err);
  });

  return returned
}

export { rebuildSite }