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
/*!**************************!*\
  !*** ./src/resources.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayResources = () => {
    let content = document.querySelector('.content');
    let contentItems = content.childElementCount

    // clear content div
    for (let i=0; i<contentItems; i++) {
        content.firstChild.remove();
    };

    // display Resources
    let contentTitle = document.createElement('h2');
    contentTitle.setAttribute('class', 'contentTitle');
    contentTitle.textContent = 'Resources';
    content.appendChild(contentTitle);

    let contentInfo = document.createElement('ul')
    contentInfo.setAttribute('class', 'contentInfo');
    content.appendChild(contentInfo);

    let resource1 = document.createElement('li');
    let resource1link = document.createElement('a');
    resource1link.setAttribute('class', 'contentInfo');
    resource1link.textContent = 'Our wiki';
    resource1link.href = 'https://avatar.fandom.com/wiki/Middle_Ring_restaurant';
    resource1link.target = '_blank';
    resource1.appendChild(resource1link);
    contentInfo.appendChild(resource1);

    let resource2 = document.createElement('li');
    let resource2link = document.createElement('a')
    resource2link.setAttribute('class', 'contentInfo');
    resource2link.textContent = 'Earth Kingdom cuisine';
    resource2link.href = 'https://avatar.fandom.com/wiki/Cuisine_in_the_World_of_Avatar#Earth_Kingdom'
    resource2link.target = '_blank';
    resource2.appendChild(resource2link);
    contentInfo.appendChild(resource2);

    let resource3 = document.createElement('li');
    let resource3link = document.createElement('a')
    resource3link.setAttribute('class', 'contentInfo');
    resource3link.textContent = 'Ba Sing Se wiki';
    resource3link.href = 'https://avatar.fandom.com/wiki/Ba_Sing_Se#Middle_Ring_restaurant'
    resource3link.target = '_blank';
    resource3.appendChild(resource3link);
    contentInfo.appendChild(resource3);

    // display images
    let customerImage = document.createElement('img')
    customerImage.src = '../src/assets/customer.webp';
    content.appendChild(customerImage);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayResources);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXNvdXJjZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBkaXNwbGF5UmVzb3VyY2VzID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBsZXQgY29udGVudEl0ZW1zID0gY29udGVudC5jaGlsZEVsZW1lbnRDb3VudFxuXG4gICAgLy8gY2xlYXIgY29udGVudCBkaXZcbiAgICBmb3IgKGxldCBpPTA7IGk8Y29udGVudEl0ZW1zOyBpKyspIHtcbiAgICAgICAgY29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH07XG5cbiAgICAvLyBkaXNwbGF5IFJlc291cmNlc1xuICAgIGxldCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnRUaXRsZScpO1xuICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9ICdSZXNvdXJjZXMnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcblxuICAgIGxldCBjb250ZW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBjb250ZW50SW5mby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnRJbmZvJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50SW5mbyk7XG5cbiAgICBsZXQgcmVzb3VyY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgcmVzb3VyY2UxbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICByZXNvdXJjZTFsaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudEluZm8nKTtcbiAgICByZXNvdXJjZTFsaW5rLnRleHRDb250ZW50ID0gJ091ciB3aWtpJztcbiAgICByZXNvdXJjZTFsaW5rLmhyZWYgPSAnaHR0cHM6Ly9hdmF0YXIuZmFuZG9tLmNvbS93aWtpL01pZGRsZV9SaW5nX3Jlc3RhdXJhbnQnO1xuICAgIHJlc291cmNlMWxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgcmVzb3VyY2UxLmFwcGVuZENoaWxkKHJlc291cmNlMWxpbmspO1xuICAgIGNvbnRlbnRJbmZvLmFwcGVuZENoaWxkKHJlc291cmNlMSk7XG5cbiAgICBsZXQgcmVzb3VyY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgcmVzb3VyY2UybGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIHJlc291cmNlMmxpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50SW5mbycpO1xuICAgIHJlc291cmNlMmxpbmsudGV4dENvbnRlbnQgPSAnRWFydGggS2luZ2RvbSBjdWlzaW5lJztcbiAgICByZXNvdXJjZTJsaW5rLmhyZWYgPSAnaHR0cHM6Ly9hdmF0YXIuZmFuZG9tLmNvbS93aWtpL0N1aXNpbmVfaW5fdGhlX1dvcmxkX29mX0F2YXRhciNFYXJ0aF9LaW5nZG9tJ1xuICAgIHJlc291cmNlMmxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgcmVzb3VyY2UyLmFwcGVuZENoaWxkKHJlc291cmNlMmxpbmspO1xuICAgIGNvbnRlbnRJbmZvLmFwcGVuZENoaWxkKHJlc291cmNlMik7XG5cbiAgICBsZXQgcmVzb3VyY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgcmVzb3VyY2UzbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIHJlc291cmNlM2xpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50SW5mbycpO1xuICAgIHJlc291cmNlM2xpbmsudGV4dENvbnRlbnQgPSAnQmEgU2luZyBTZSB3aWtpJztcbiAgICByZXNvdXJjZTNsaW5rLmhyZWYgPSAnaHR0cHM6Ly9hdmF0YXIuZmFuZG9tLmNvbS93aWtpL0JhX1NpbmdfU2UjTWlkZGxlX1JpbmdfcmVzdGF1cmFudCdcbiAgICByZXNvdXJjZTNsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIHJlc291cmNlMy5hcHBlbmRDaGlsZChyZXNvdXJjZTNsaW5rKTtcbiAgICBjb250ZW50SW5mby5hcHBlbmRDaGlsZChyZXNvdXJjZTMpO1xuXG4gICAgLy8gZGlzcGxheSBpbWFnZXNcbiAgICBsZXQgY3VzdG9tZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgY3VzdG9tZXJJbWFnZS5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9jdXN0b21lci53ZWJwJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGN1c3RvbWVySW1hZ2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5UmVzb3VyY2VzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==