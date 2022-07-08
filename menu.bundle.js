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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayMenu = () => {
    let content = document.querySelector('.content');
    let contentItems = content.childElementCount

    // clear content div
    for (let i=0; i<contentItems; i++) {
        content.firstChild.remove();
    };

    // display Menu!
    let contentTitle = document.createElement('h2');
    contentTitle.setAttribute('class', 'contentTitle');
    contentTitle.textContent = 'Menu';
    content.appendChild(contentTitle);

    // display menu items
    let contentInfo = document.createElement('ul')
    contentInfo.setAttribute('class', 'contentInfo');
    contentInfo.setAttribute('id', 'menuList');
    contentInfo.innerHTML = 
        '<li>Drinks\
            <ul><li>Water</li>\
            <li>Tea<br>\
            (ginseng, jasmine, green, ginger, cucumber, lychee, or oolong)</li>\
            <li>Milk</li>\
            <li>Earthbender mudslide</li>\
            <li>Kale smoothie</li></ul>\
        </li>\
        <li>Food\
            <ul><li>Unbelievably Complex Fried Appetizer Sampler Platter</li>\
            <li>Deep-fried pickled radishes</li>\
            <li>Fried dough</li>\
            <li>Pan-fried noodles</li>\
            <li>Spicy pickled kelp</li>\
            <li>Rice</li>\
            <li>Jook (Rice Porridge)</li>\
            <li>Noodles</li>\
            <li>Meatballs</li>\
            <li>Crab puffs</li>\
            <li>Seared Wild Kyoshi Elephant Koi</li></ul>\
        </li>\
        <li>Dessert\
            <ul><li>Sugar cookies</li>\
            <li>Egg Custard Tart</li>\
            <li>Moon Peach Cakes</li></ul>\
        </li>';
    content.appendChild(contentInfo);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZGlzcGxheU1lbnUgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGxldCBjb250ZW50SXRlbXMgPSBjb250ZW50LmNoaWxkRWxlbWVudENvdW50XG5cbiAgICAvLyBjbGVhciBjb250ZW50IGRpdlxuICAgIGZvciAobGV0IGk9MDsgaTxjb250ZW50SXRlbXM7IGkrKykge1xuICAgICAgICBjb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfTtcblxuICAgIC8vIGRpc3BsYXkgTWVudSFcbiAgICBsZXQgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50VGl0bGUnKTtcbiAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuXG4gICAgLy8gZGlzcGxheSBtZW51IGl0ZW1zXG4gICAgbGV0IGNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgIGNvbnRlbnRJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudEluZm8nKTtcbiAgICBjb250ZW50SW5mby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVMaXN0Jyk7XG4gICAgY29udGVudEluZm8uaW5uZXJIVE1MID0gXG4gICAgICAgICc8bGk+RHJpbmtzXFxcbiAgICAgICAgICAgIDx1bD48bGk+V2F0ZXI8L2xpPlxcXG4gICAgICAgICAgICA8bGk+VGVhPGJyPlxcXG4gICAgICAgICAgICAoZ2luc2VuZywgamFzbWluZSwgZ3JlZW4sIGdpbmdlciwgY3VjdW1iZXIsIGx5Y2hlZSwgb3Igb29sb25nKTwvbGk+XFxcbiAgICAgICAgICAgIDxsaT5NaWxrPC9saT5cXFxuICAgICAgICAgICAgPGxpPkVhcnRoYmVuZGVyIG11ZHNsaWRlPC9saT5cXFxuICAgICAgICAgICAgPGxpPkthbGUgc21vb3RoaWU8L2xpPjwvdWw+XFxcbiAgICAgICAgPC9saT5cXFxuICAgICAgICA8bGk+Rm9vZFxcXG4gICAgICAgICAgICA8dWw+PGxpPlVuYmVsaWV2YWJseSBDb21wbGV4IEZyaWVkIEFwcGV0aXplciBTYW1wbGVyIFBsYXR0ZXI8L2xpPlxcXG4gICAgICAgICAgICA8bGk+RGVlcC1mcmllZCBwaWNrbGVkIHJhZGlzaGVzPC9saT5cXFxuICAgICAgICAgICAgPGxpPkZyaWVkIGRvdWdoPC9saT5cXFxuICAgICAgICAgICAgPGxpPlBhbi1mcmllZCBub29kbGVzPC9saT5cXFxuICAgICAgICAgICAgPGxpPlNwaWN5IHBpY2tsZWQga2VscDwvbGk+XFxcbiAgICAgICAgICAgIDxsaT5SaWNlPC9saT5cXFxuICAgICAgICAgICAgPGxpPkpvb2sgKFJpY2UgUG9ycmlkZ2UpPC9saT5cXFxuICAgICAgICAgICAgPGxpPk5vb2RsZXM8L2xpPlxcXG4gICAgICAgICAgICA8bGk+TWVhdGJhbGxzPC9saT5cXFxuICAgICAgICAgICAgPGxpPkNyYWIgcHVmZnM8L2xpPlxcXG4gICAgICAgICAgICA8bGk+U2VhcmVkIFdpbGQgS3lvc2hpIEVsZXBoYW50IEtvaTwvbGk+PC91bD5cXFxuICAgICAgICA8L2xpPlxcXG4gICAgICAgIDxsaT5EZXNzZXJ0XFxcbiAgICAgICAgICAgIDx1bD48bGk+U3VnYXIgY29va2llczwvbGk+XFxcbiAgICAgICAgICAgIDxsaT5FZ2cgQ3VzdGFyZCBUYXJ0PC9saT5cXFxuICAgICAgICAgICAgPGxpPk1vb24gUGVhY2ggQ2FrZXM8L2xpPjwvdWw+XFxcbiAgICAgICAgPC9saT4nO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEluZm8pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVudTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=