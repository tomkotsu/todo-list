/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/applogic.js":
/*!*************************!*\
  !*** ./src/applogic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFuncs": () => (/* binding */ projectFuncs),
/* harmony export */   "todoFuncs": () => (/* binding */ todoFuncs)
/* harmony export */ });
const todoFuncs = function () {
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
};

const projectFuncs = function () {
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
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _applogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applogic */ "./src/applogic.js");


console.log(_applogic__WEBPACK_IMPORTED_MODULE_0__.projectFuncs.projects)

const domFuncs = function () {
    const todoGrid = document.querySelector('.todoList');
    const projectGrid = document.querySelector('.proj-panel'); 
    const displayTodos = (project) => {
        while (todoGrid.firstChild) {
            todoGrid.removeChild(todoGrid.lastChild);
        };
        for (const todo in project) {
            const todoLine = document.createElement('div');
            todoLine.textContent = todo.title;
            todoGrid.appendChild(todoLine);
        };
    };
    const displayProjects = (projects) => {
        while (projectGrid.firstChild) {
            projectGrid.removeChild(projectGrid.lastChild);
        };
        for (const project in projects) {
            const projLine = document.createElement('div');
            projLine.textContent = project;
            projectGrid.appendChild(projLine);
        };
    };
}; 

const btnFuncs = function () {
    const projBtn = document.querySelector('.add-proj');
    const todoBtn = document.querySelector('.todo-btn');
    const addToDo = () => {
        const input = document.querySelector('.todo-inp').value;
        const newTodo = _applogic__WEBPACK_IMPORTED_MODULE_0__.todoFuncs.todo(input);
        _applogic__WEBPACK_IMPORTED_MODULE_0__.todoFuncs.add(newTodo);
        _applogic__WEBPACK_IMPORTED_MODULE_0__.projectFuncs.addTo('All', newTodo);
        domFuncs.displayTodos(_applogic__WEBPACK_IMPORTED_MODULE_0__.projectFuncs.projects.All);
    }
    todoBtn.addEventListener('click', () => {
        addToDo();
    })
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsOEJBQThCLE1BQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xRDs7QUFFckQsWUFBWSw0REFBcUI7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFjO0FBQ3RDLFFBQVEsb0RBQWE7QUFDckIsUUFBUSx5REFBa0I7QUFDMUIsOEJBQThCLGdFQUE0QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvZG9GdW5jcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0b2RvID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt0aXRsZX0pO1xuICAgIH07XG4gICAgY29uc3QgdG9kb0xpc3QgPSBbXTtcbiAgICBjb25zdCBhZGQgPSAodG9kbykgPT4ge1xuICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmUgPSAodGl0bGUpID0+IHtcbiAgICAgICAgLy9mb3IgaSBmaW5kIHdoZXJlIGxpc3RbaV1bJ3RpdGxlJ10gPT09IHRpdGxlXG4gICAgICAgIHRvZG9MaXN0LnNwbGljZShpLCAxKTtcbiAgICB9O1xufTtcblxuY29uc3QgcHJvamVjdEZ1bmNzID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0ge1xuICAgICAgICBBbGw6IFtdXG4gICAgfTtcbiAgICBjb25zdCBhZGQgPSAobmFtZSkgPT4ge1xuICAgICAgICBwcm9qZWN0c1tuYW1lXSA9IFtdO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlID0gKG5hbWUpID0+IHtcbiAgICAgICAgZGVsZXRlIHByb2plY3RzW25hbWVdO1xuICAgIH07XG4gICAgY29uc3QgYWRkVG8gPSAocHJvamVjdCwgdG9kbykgPT4ge1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0XS5wdXNoKHRvZG8pO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlRnJvbSA9IChwcm9qZWN0LCB0aXRsZSkgPT4ge1xuICAgICAgIC8vZm9yIGkgZmluZCB3aGVyZSBsaXN0W2ldWyd0aXRsZSddID09PSB0aXRsZTtcbiAgICAgICAgZGVsZXRlIHByb2plY3RzW3RvZG9dO1xuICAgIH07XG4gICAgcmV0dXJuIHsgcHJvamVjdHMsIGFkZCwgcmVtb3ZlLCBhZGRUbywgcmVtb3ZlRnJvbSB9O1xufTtcblxuZXhwb3J0IHsgdG9kb0Z1bmNzLCBwcm9qZWN0RnVuY3MgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdG9kb0Z1bmNzLCBwcm9qZWN0RnVuY3MgfSBmcm9tICcuL2FwcGxvZ2ljJztcblxuY29uc29sZS5sb2cocHJvamVjdEZ1bmNzLnByb2plY3RzKVxuXG5jb25zdCBkb21GdW5jcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0b2RvR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdCcpO1xuICAgIGNvbnN0IHByb2plY3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otcGFuZWwnKTsgXG4gICAgY29uc3QgZGlzcGxheVRvZG9zID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgd2hpbGUgKHRvZG9HcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRvZG9HcmlkLnJlbW92ZUNoaWxkKHRvZG9HcmlkLmxhc3RDaGlsZCk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3QgdG9kbyBpbiBwcm9qZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdG9kb0xpbmUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgdG9kb0dyaWQuYXBwZW5kQ2hpbGQodG9kb0xpbmUpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheVByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gICAgICAgIHdoaWxlIChwcm9qZWN0R3JpZC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwcm9qZWN0R3JpZC5yZW1vdmVDaGlsZChwcm9qZWN0R3JpZC5sYXN0Q2hpbGQpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2pMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qTGluZS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICAgICAgICBwcm9qZWN0R3JpZC5hcHBlbmRDaGlsZChwcm9qTGluZSk7XG4gICAgICAgIH07XG4gICAgfTtcbn07IFxuXG5jb25zdCBidG5GdW5jcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qJyk7XG4gICAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWJ0bicpO1xuICAgIGNvbnN0IGFkZFRvRG8gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8taW5wJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvRnVuY3MudG9kbyhpbnB1dCk7XG4gICAgICAgIHRvZG9GdW5jcy5hZGQobmV3VG9kbyk7XG4gICAgICAgIHByb2plY3RGdW5jcy5hZGRUbygnQWxsJywgbmV3VG9kbyk7XG4gICAgICAgIGRvbUZ1bmNzLmRpc3BsYXlUb2Rvcyhwcm9qZWN0RnVuY3MucHJvamVjdHNbJ0FsbCddKTtcbiAgICB9XG4gICAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVG9EbygpO1xuICAgIH0pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=