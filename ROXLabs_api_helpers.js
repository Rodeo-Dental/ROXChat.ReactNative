// ROX LABS
// https://chat.roxlabs.tech
// rlServerURL
// roxLabsStore.setStringAsync('rlServerURL', response.prod_url);
// https://roxchatapp.roxlabs.tech/config.json
/* async function getRoxLabsApiData() {
    const response = await fetch(
        'https://roxchatapp.roxlabs.tech/config.json'
    );
    const json = await response.json();
    return json;
}*/
// roxLabsStore.removeItem('rlServerURL');
/* getRoxLabsApiData().then((response) => {
    if (buildId > response.prodBuildID) {
        roxLabsStore.setStringAsync('rlServerURL', response.dev_url);
    }
    if (buildId <= response.prodBuildID) {
        roxLabsStore.setStringAsync('rlServerURL', response.prod_url);
    }
});*/

// getRoxLabsApiData().then(r => roxLabsStore.setStringAsync('rlServerURL', r));
