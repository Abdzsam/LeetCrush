chrome.runtime.sendMessage('I am loading content script', (response) => {
    console.log(response);
    console.log('I am content script')

})
