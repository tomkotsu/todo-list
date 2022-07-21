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


const domFuncs = (function () {
    const todoGrid = document.querySelector('.todoList');
    const projectGrid = document.querySelector('.proj-panel'); 
    const addToDotoGrid = (todo) => {
        const todoLine = document.createElement('div');
        todoLine.textContent = todo['title'];
        todoGrid.appendChild(todoLine);
    };
    const displayTodos = () => {
        while (todoGrid.firstChild) {
            todoGrid.removeChild(todoGrid.lastChild);
        };
        for (const todo of _applogic__WEBPACK_IMPORTED_MODULE_0__.projectFuncs.projects.All) {
            addToDotoGrid(todo);
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
    return { displayTodos, displayProjects }
})(); 

const btnFuncs = (function () {
    const projBtn = document.querySelector('.add-proj');
    const todoBtn = document.querySelector('.todo-btn');
    const addToDo = () => {
        const input = document.querySelector('.todo-inp').value;
        const newTodo = _applogic__WEBPACK_IMPORTED_MODULE_0__.todoFuncs.todo(input);
        _applogic__WEBPACK_IMPORTED_MODULE_0__.todoFuncs.add(newTodo);
        _applogic__WEBPACK_IMPORTED_MODULE_0__.projectFuncs.addTo('All', newTodo);
        domFuncs.displayTodos();
    }
    todoBtn.addEventListener('click', () => {
        addToDo();
        console.log(_applogic__WEBPACK_IMPORTED_MODULE_0__.projectFuncs.projects.All)
    });
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSw4QkFBOEIsTUFBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7Ozs7Ozs7O1VDakNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnRUFBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFjO0FBQ3RDLFFBQVEsb0RBQWE7QUFDckIsUUFBUSx5REFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0VBQTRCO0FBQ2hELEtBQUs7QUFDTCxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvZG9GdW5jcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdG9kbyA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7dGl0bGV9KTtcbiAgICB9O1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gW107XG4gICAgY29uc3QgYWRkID0gKHRvZG8pID0+IHtcbiAgICAgICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIC8vZm9yIGkgZmluZCB3aGVyZSBsaXN0W2ldWyd0aXRsZSddID09PSB0aXRsZVxuICAgICAgICB0b2RvTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgfTtcbiAgICByZXR1cm4geyB0b2RvLCB0b2RvTGlzdCwgYWRkLCByZW1vdmUgfVxufSkoKTtcblxuY29uc3QgcHJvamVjdEZ1bmNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHtcbiAgICAgICAgQWxsOiBbXVxuICAgIH07XG4gICAgY29uc3QgYWRkID0gKG5hbWUpID0+IHtcbiAgICAgICAgcHJvamVjdHNbbmFtZV0gPSBbXTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0c1tuYW1lXTtcbiAgICB9O1xuICAgIGNvbnN0IGFkZFRvID0gKHByb2plY3QsIHRvZG8pID0+IHtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdF0ucHVzaCh0b2RvKTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZUZyb20gPSAocHJvamVjdCwgdGl0bGUpID0+IHtcbiAgICAgICAvL2ZvciBpIGZpbmQgd2hlcmUgbGlzdFtpXVsndGl0bGUnXSA9PT0gdGl0bGU7XG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0c1t0b2RvXTtcbiAgICB9O1xuICAgIHJldHVybiB7IHByb2plY3RzLCBhZGQsIHJlbW92ZSwgYWRkVG8sIHJlbW92ZUZyb20gfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHRvZG9GdW5jcywgcHJvamVjdEZ1bmNzIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvZG9GdW5jcywgcHJvamVjdEZ1bmNzIH0gZnJvbSAnLi9hcHBsb2dpYyc7XG5cbmNvbnN0IGRvbUZ1bmNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0b2RvR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdCcpO1xuICAgIGNvbnN0IHByb2plY3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otcGFuZWwnKTsgXG4gICAgY29uc3QgYWRkVG9Eb3RvR3JpZCA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9MaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9MaW5lLnRleHRDb250ZW50ID0gdG9kb1sndGl0bGUnXTtcbiAgICAgICAgdG9kb0dyaWQuYXBwZW5kQ2hpbGQodG9kb0xpbmUpO1xuICAgIH07XG4gICAgY29uc3QgZGlzcGxheVRvZG9zID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSAodG9kb0dyaWQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdG9kb0dyaWQucmVtb3ZlQ2hpbGQodG9kb0dyaWQubGFzdENoaWxkKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChjb25zdCB0b2RvIG9mIHByb2plY3RGdW5jcy5wcm9qZWN0c1snQWxsJ10pIHtcbiAgICAgICAgICAgIGFkZFRvRG90b0dyaWQodG9kbyk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBkaXNwbGF5UHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcbiAgICAgICAgd2hpbGUgKHByb2plY3RHcmlkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHByb2plY3RHcmlkLnJlbW92ZUNoaWxkKHByb2plY3RHcmlkLmxhc3RDaGlsZCk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiBwcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvakxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2pMaW5lLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgICAgICAgIHByb2plY3RHcmlkLmFwcGVuZENoaWxkKHByb2pMaW5lKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiB7IGRpc3BsYXlUb2RvcywgZGlzcGxheVByb2plY3RzIH1cbn0pKCk7IFxuXG5jb25zdCBidG5GdW5jcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvaicpO1xuICAgIGNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1idG4nKTtcbiAgICBjb25zdCBhZGRUb0RvID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWlucCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gdG9kb0Z1bmNzLnRvZG8oaW5wdXQpO1xuICAgICAgICB0b2RvRnVuY3MuYWRkKG5ld1RvZG8pO1xuICAgICAgICBwcm9qZWN0RnVuY3MuYWRkVG8oJ0FsbCcsIG5ld1RvZG8pO1xuICAgICAgICBkb21GdW5jcy5kaXNwbGF5VG9kb3MoKTtcbiAgICB9XG4gICAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVG9EbygpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0RnVuY3MucHJvamVjdHNbJ0FsbCddKVxuICAgIH0pO1xufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=