/******/ (() => { // webpackBootstrap
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
chrome.runtime.sendMessage('I am loading content script', (response) => {
    console.log(response);
    console.log('I am content script')

})

/******/ })()
;
//# sourceMappingURL=contentScript.js.map