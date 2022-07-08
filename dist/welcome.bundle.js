/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayWelcome = () => {
    let content = document.querySelector('.content');
    let contentItems = content.childElementCount

    // clear content div
    for (let i=0; i<contentItems; i++) {
        content.firstChild.remove();
    };

    // display Welcome!
    let contentTitle = document.createElement('h2');
    contentTitle.setAttribute('class', 'contentTitle');
    contentTitle.textContent = 'Welcome!';
    content.appendChild(contentTitle);

    //display paragraph
    let contentInfo = document.createElement('p')
    contentInfo.setAttribute('class', 'contentInfo');
    contentInfo.textContent = 
        'Middle Ring Restaurant is a humble eatery located in the Middle Ring of \
        Ba Sing Se adjacent to Ba Sing Se University.';
    content.appendChild(contentInfo);

    let contentInfo2 = document.createElement('p')
    contentInfo2.setAttribute('class', 'contentInfo');
    contentInfo2.textContent = 
        'Please enjoy our menu of traditional Earth Kingdom cuisine!';
    content.appendChild(contentInfo2);

    // display images
    let exteriorImage = document.createElement('img')
    exteriorImage.src = '../src/assets/exterior.webp';
    content.appendChild(exteriorImage);

    let interiorImage = document.createElement('img')
    interiorImage.src = '../src/assets/interior.jpg';
    content.appendChild(interiorImage);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayWelcome);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxjQUFjLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlbGNvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBkaXNwbGF5V2VsY29tZSA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgbGV0IGNvbnRlbnRJdGVtcyA9IGNvbnRlbnQuY2hpbGRFbGVtZW50Q291bnRcblxuICAgIC8vIGNsZWFyIGNvbnRlbnQgZGl2XG4gICAgZm9yIChsZXQgaT0wOyBpPGNvbnRlbnRJdGVtczsgaSsrKSB7XG4gICAgICAgIGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9O1xuXG4gICAgLy8gZGlzcGxheSBXZWxjb21lIVxuICAgIGxldCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnRUaXRsZScpO1xuICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdXZWxjb21lISc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuXG4gICAgLy9kaXNwbGF5IHBhcmFncmFwaFxuICAgIGxldCBjb250ZW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnRlbnRJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudEluZm8nKTtcbiAgICBjb250ZW50SW5mby50ZXh0Q29udGVudCA9IFxuICAgICAgICAnTWlkZGxlIFJpbmcgUmVzdGF1cmFudCBpcyBhIGh1bWJsZSBlYXRlcnkgbG9jYXRlZCBpbiB0aGUgTWlkZGxlIFJpbmcgb2YgXFxcbiAgICAgICAgQmEgU2luZyBTZSBhZGphY2VudCB0byBCYSBTaW5nIFNlIFVuaXZlcnNpdHkuJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRJbmZvKTtcblxuICAgIGxldCBjb250ZW50SW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb250ZW50SW5mbzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50SW5mbycpO1xuICAgIGNvbnRlbnRJbmZvMi50ZXh0Q29udGVudCA9IFxuICAgICAgICAnUGxlYXNlIGVuam95IG91ciBtZW51IG9mIHRyYWRpdGlvbmFsIEVhcnRoIEtpbmdkb20gY3Vpc2luZSEnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEluZm8yKTtcblxuICAgIC8vIGRpc3BsYXkgaW1hZ2VzXG4gICAgbGV0IGV4dGVyaW9ySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGV4dGVyaW9ySW1hZ2Uuc3JjID0gJy4uL3NyYy9hc3NldHMvZXh0ZXJpb3Iud2VicCc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChleHRlcmlvckltYWdlKTtcblxuICAgIGxldCBpbnRlcmlvckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbnRlcmlvckltYWdlLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2ludGVyaW9yLmpwZyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbnRlcmlvckltYWdlKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5V2VsY29tZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=