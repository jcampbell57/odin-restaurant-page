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
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const display = () => {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    
    const displayHeader = () => {
        let header = document.createElement('header');
        header.innerHTML = '<h1>Middle Ring Restaurant</h1>';

        // let navContainer = div
        let nav = document.createElement('ul');
        nav.setAttribute('class', 'nav')

        let welcome = document.createElement('li');
        welcome.setAttribute('class', 'navItem');
        welcome.textContent = 'Welcome';
        nav.appendChild(welcome);

        let menu = document.createElement('li');
        menu.setAttribute('class', 'navItem');
        menu.textContent = 'Menu';
        nav.appendChild(menu);

        header.appendChild(nav);
        // header.appendChild(navContainer);
        body.appendChild(header); 
    }
    
    const displayWelcome = () => {
        let content = div;
        content.setAttribute('class', 'content');
        body.appendChild(content);

        let contentTitle = document.createElement('h3');
        contentTitle.setAttribute('class', 'contentTitle');
        contentTitle.textContent = 'Welcome!';
        content.appendChild(contentTitle);

        let contentInfo = document.createElement('p')
        contentInfo.setAttribute('class', 'contentInfo');
        contentInfo.textContent = 
            'Middle Ring Restaurant is a humble eatery located in the Middle Ring of \
            Ba Sing Se adjacent to Ba Sing Se University.';
        content.appendChild(contentInfo);
    }

    const displayFooter = () => {
        let footer = document.createElement('footer');
        footer.textContent = 'hey';
        body.appendChild(footer);
    }

    return displayHeader(), displayWelcome(), displayFooter();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBkaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgZGlzcGxheUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gJzxoMT5NaWRkbGUgUmluZyBSZXN0YXVyYW50PC9oMT4nO1xuXG4gICAgICAgIC8vIGxldCBuYXZDb250YWluZXIgPSBkaXZcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdicpXG5cbiAgICAgICAgbGV0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB3ZWxjb21lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2SXRlbScpO1xuICAgICAgICB3ZWxjb21lLnRleHRDb250ZW50ID0gJ1dlbGNvbWUnO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG5cbiAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBtZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2SXRlbScpO1xuICAgICAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gICAgICAgIC8vIGhlYWRlci5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7IFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkaXNwbGF5V2VsY29tZSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkaXY7XG4gICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnRUaXRsZScpO1xuICAgICAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSEnO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNvbnRlbnRJbmZvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudEluZm8nKTtcbiAgICAgICAgY29udGVudEluZm8udGV4dENvbnRlbnQgPSBcbiAgICAgICAgICAgICdNaWRkbGUgUmluZyBSZXN0YXVyYW50IGlzIGEgaHVtYmxlIGVhdGVyeSBsb2NhdGVkIGluIHRoZSBNaWRkbGUgUmluZyBvZiBcXFxuICAgICAgICAgICAgQmEgU2luZyBTZSBhZGphY2VudCB0byBCYSBTaW5nIFNlIFVuaXZlcnNpdHkuJztcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50SW5mbyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheUZvb3RlciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnaGV5JztcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXNwbGF5SGVhZGVyKCksIGRpc3BsYXlXZWxjb21lKCksIGRpc3BsYXlGb290ZXIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9