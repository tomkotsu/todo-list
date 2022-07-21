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
/*!*************************!*\
  !*** ./src/applogic.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFuncs": () => (/* binding */ projectFuncs),
/* harmony export */   "todoFuncs": () => (/* binding */ todoFuncs)
/* harmony export */ });
const todoFuncs = (function () {
    const todo = function (title) {
        return Object.assign({title});
    };
    const todoList = [];
    const add = (todo) => {
        todoList.push(todo);
    }
    const remove = (title) => {
        //for i find where list[i]['title'] === title
        todoList.splice(i, 1);
    };
    return { todo, todoList, add, remove }
})();

const projectFuncs = (function () {
    const projects = {
        All: []
    };
    const add = (name) => {
        projects[name] = [];
    };
    const remove = (name) => {
        delete projects[name];
    };
    const addTo = (project, todo) => {
        projects[project].push(todo);
    };
    const removeFrom = (project, title) => {
       //for i find where list[i]['title'] === title;
        delete projects[todo];
    };
    return { projects, add, remove, addTo, removeFrom };
})();


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0b2RvRnVuY3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRvZG8gPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe3RpdGxlfSk7XG4gICAgfTtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICAgIGNvbnN0IGFkZCA9ICh0b2RvKSA9PiB7XG4gICAgICAgIHRvZG9MaXN0LnB1c2godG9kbyk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZSA9ICh0aXRsZSkgPT4ge1xuICAgICAgICAvL2ZvciBpIGZpbmQgd2hlcmUgbGlzdFtpXVsndGl0bGUnXSA9PT0gdGl0bGVcbiAgICAgICAgdG9kb0xpc3Quc3BsaWNlKGksIDEpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgdG9kbywgdG9kb0xpc3QsIGFkZCwgcmVtb3ZlIH1cbn0pKCk7XG5cbmNvbnN0IHByb2plY3RGdW5jcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSB7XG4gICAgICAgIEFsbDogW11cbiAgICB9O1xuICAgIGNvbnN0IGFkZCA9IChuYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3RzW25hbWVdID0gW107XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmUgPSAobmFtZSkgPT4ge1xuICAgICAgICBkZWxldGUgcHJvamVjdHNbbmFtZV07XG4gICAgfTtcbiAgICBjb25zdCBhZGRUbyA9IChwcm9qZWN0LCB0b2RvKSA9PiB7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RdLnB1c2godG9kbyk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVGcm9tID0gKHByb2plY3QsIHRpdGxlKSA9PiB7XG4gICAgICAgLy9mb3IgaSBmaW5kIHdoZXJlIGxpc3RbaV1bJ3RpdGxlJ10gPT09IHRpdGxlO1xuICAgICAgICBkZWxldGUgcHJvamVjdHNbdG9kb107XG4gICAgfTtcbiAgICByZXR1cm4geyBwcm9qZWN0cywgYWRkLCByZW1vdmUsIGFkZFRvLCByZW1vdmVGcm9tIH07XG59KSgpO1xuXG5leHBvcnQgeyB0b2RvRnVuY3MsIHByb2plY3RGdW5jcyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9